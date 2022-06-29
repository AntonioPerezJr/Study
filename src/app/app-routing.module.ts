import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArrayMethodsComponent } from './pages/array-methods/array-methods.component';
import { RxjsMethodsComponent } from './pages/rxjs-methods/rxjs-methods.component';

const routes: Routes = [
  { path: '', component: ArrayMethodsComponent },
  { path: 'Rxjs', component: RxjsMethodsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
