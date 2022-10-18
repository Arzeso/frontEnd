import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cajero } from 'src/app/Modelo/Cajero';
import { CajeroService } from 'src/app/Service/cajero.service';
import { ProductosService } from 'src/app/Service/Productos/productos.service';
import { VentaService } from 'src/app/Service/Ventas/venta.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-cajero',
  templateUrl: './cajero.component.html',
  styleUrls: ['./cajero.component.css']
})
export class CajeroComponent implements OnInit {

  productosDetails = null as any;

  

  ventasDetails = null as any;

  productosLocal = null as any;
  precioLocal = null as any;
  cantidadLocal = null as any;
  productoDetails = null as any;
  a=[];
  precio=[];
  cantidadProdu=[];
  montototal:number=0;

  venta:Cajero[];
  ventaDetails = null as any;

  ventaToUpdate={
    id_Venta:"",
    fecha:"",
    montoTotal:"",
    cactivacion:"",
  }

  cantidad:number |undefined;
  monto:string|undefined;

  constructor(private service:ProductosService, private router:Router, private service2:CajeroService, private service3:VentaService) { }

  ngOnInit(): void {
    this.getProductosDetails();
   
  }

  getProductosLocal(){
    this.productosLocal = JSON.parse(localStorage.getItem('productos'));
      console.log(this.productosLocal);
    this.cantidadLocal = JSON.parse(localStorage.getItem('cantidad'));
    this.precioLocal = JSON.parse(localStorage.getItem('precio'));
    
  }


  getProductosDetails(){
    
    this.service.getProductos().subscribe((resp)=>{
      console.log(resp);
      this.productosDetails = resp;
      
    },
    (err) => {
      console.log(err);
    }
    );
  }

  generaReporte(){
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
      docResult.save(`${new Date().toISOString()}_TICKET_DE_COMPRA.pdf`);
    });
  }
  


 

 calculoprecios(cantidad:number, precioMenudeo:number, precioMayoreo:number){
  var preciocalc; 

  if(cantidad<5){
    preciocalc=precioMenudeo*cantidad;
    this.precio.push(preciocalc);
    this.cantidadProdu.push(cantidad);
    this.cantidad = cantidad;

    console.log(precioMenudeo + " * " + cantidad + "= " + preciocalc);

    localStorage.setItem('cantidad',JSON.stringify(this.cantidadProdu));
    localStorage.setItem('precio', JSON.stringify(this.precio));

    this.montototal = preciocalc +this.montototal;

    console.log("monto total"+this.montototal);
   
   }
   else if(cantidad>=5){
    preciocalc=precioMayoreo*cantidad;

    console.log(precioMayoreo + " * " + cantidad + "= " + preciocalc);
    this.precio.push(preciocalc);
    localStorage.setItem('precio', JSON.stringify(this.precio));
    this.cantidadProdu.push(cantidad);
    this.cantidad = cantidad;
    localStorage.setItem('cantidad',JSON.stringify(this.cantidadProdu));
    this.montototal =preciocalc+this.montototal;
   }
 }

  getProductoDetails(id:string, cantidad:string){
    this.service.getProductoID(id).subscribe((resp)=>{
      console.log(resp);
      
      this.a.push(resp);
      localStorage.setItem('productos', JSON.stringify(this.a));
      
      this.productoDetails = resp;

      this.calculoprecios(parseFloat(cantidad), resp.precioMenudeo,resp.precioMayoreo);
      this.getProductosLocal();

      
    },
    (err) => {
      console.log(err);
    }
    );
  

  }



  

  addVentas(membrecisa:any) {

    if(membrecisa == "1"){
      this.montototal=this.montototal*.98;
    }
    else{
      
    }
  
    let valor = {

      "montoTotal": this.montototal,
      "cactivacion":true
    };
    console.log(valor);
    this.service2.registerVenta(valor).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
