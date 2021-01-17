import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationComponent } from './Components/location/location.component';
import { AppComponent } from './app.component';
const routes: Routes = [
{path:'locationComponent',component:LocationComponent},
{path:'AppComponent',component:AppComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
