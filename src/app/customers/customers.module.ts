import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersListComponent } from './customer-list/customer-list.component'

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  declarations: [
    CustomersListComponent
  ],
  exports: [

  ]
})
export class CustomersModule {

}