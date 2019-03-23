import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersListComponent } from './customer-list/customer-list.component';

const routes: Routes = [
  {
    path: '',
    component: CustomersListComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CustomersRoutingModule {

}