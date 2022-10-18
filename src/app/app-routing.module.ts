import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path: 'productos', component:ProductosComponent},
  {path: 'membresias', component:MembresiasComponent},
  {path: 'empleados', component:EmpleadosComponent},
  {path: 'devoluciones', component:DevolucionesComponent},
  {path: 'cajero', component:CajeroComponent},
  {path: 'ventas', component:VentasComponent},
  {path: 'tiendas', component:TiendasComponent},
  {path: 'categoria', component:CategoriasComponent},
  {path: 'proveedor', component:ProveedorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
