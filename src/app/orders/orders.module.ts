import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { SharedFormsModule } from '../sharedforms.module'

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedFormsModule
  ],
  declarations: [
    OrdersListComponent
  ]
})
export class OrdersModule {

}