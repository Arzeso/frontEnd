import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CajeroComponent } from './Views/cajero/cajero.component';
import { CategoriasComponent } from './Views/categorias/categorias.component';
import { DevolucionesComponent } from './Views/devoluciones/devoluciones.component';
import { EmpleadosComponent } from './Views/empleados/empleados.component';
import { LoginComponent } from './Views/login/login.component';
import { MembresiasComponent } from './Views/membresias/membresias.component';
import { ProductosComponent } from './Views/productos/productos.component';
import { ProveedorComponent } from './Views/proveedor/proveedor.component';
import { TiendasComponent } from './Views/tiendas/tiendas.component';
import { VentasComponent } from './Views/ventas/ventas.component';
import { TiendaPipe } from './pipes/Filtros/Tienda/tienda.pipe';
import { CategoriasPipe } from './pipes/Filtros/Categoria/categorias.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FiltrodevPipe } from './pipes/Filtros/Devoluciones/filtrodev.pipe';
import { FiltroProductoPipe } from './pipes/Filtros/Productos/filtro-producto.pipe';
import { FiltroProveedorPipe } from './pipes/Filtros/Proveedor/filtro-proveedor.pipe';
import { FiltroEmpleadoPipe } from './pipes/Filtros/Empleados/filtro-empleado.pipe';
import { MembresiasPipe } from './pipes/Filtros/membresias.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CajeroComponent,
    CategoriasComponent,
    DevolucionesComponent,
    EmpleadosComponent,
    LoginComponent,
    MembresiasComponent,
    ProductosComponent,
    ProveedorComponent,
    TiendasComponent,
    VentasComponent,
    TiendaPipe,
    CategoriasPipe,
    FiltrodevPipe,
    FiltroProductoPipe,
    FiltroProveedorPipe,
    FiltroEmpleadoPipe,
    MembresiasPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
