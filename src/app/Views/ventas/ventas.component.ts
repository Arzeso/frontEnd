import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Venta } from 'src/app/Modelo/Venta';
import { ngxCsv } from 'ngx-csv';
import { VentaService } from 'src/app/Service/Ventas/venta.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  ventas:Venta[];
  ventasDetails = null as any;
  total:number;

   fecha1 : string;
   fecha2 : string;
  constructor(public service:VentaService, router:Router) { }

  ngOnInit(): void {
    this.getVentasDetails();
  }

  reporteFechas(fecha1: string, fecha2: string){
    console.log(fecha1, fecha2);
    this.service.getlistfiltrada(fecha1, fecha2).subscribe((resp)=>
    {
      console.log(resp);
      this.ventasDetails = resp;
    },
    (err)=>{
      console.log(err);
    }
    );
  }
  

  generarReporte(){
    var options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true, 
      showTitle: true,
      title: 'REPORTE DE VENTAS',
      useBom: true,
      headers: ["Id venta", "Fecha", "Monto de venta"]
    };
    new ngxCsv(this.ventasDetails, "Reporte", options);
  }

  getVentasDetails(){
    this.service.getVentas().subscribe((resp)=>
    {
      console.log(resp);
      this.ventasDetails = resp;
    },
    (err)=>{
      console.log(err);
    }
    );
  }

  public downloadPDF(): void {
    // Extraemos el
    const DATA = document.getElementById('htmlData');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3
    };
    html2canvas(DATA, options).then((canvas) => {

      const img = canvas.toDataURL('image/PNG');

      // Add image Canvas to PDF
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`${new Date().toISOString()}_REPORTE.pdf`);
    });
  }

 
}
