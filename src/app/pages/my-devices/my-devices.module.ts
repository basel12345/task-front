import { AddDataComponent } from './add-data/add-data.component';
import { MyDevicesResolver } from './../../shared/Resolver/MyDevices.resolver';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyDevicesComponent } from './my-devices.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: MyDevicesComponent,
    resolve: {
      MyDevices: MyDevicesResolver
    }
  },
  {
    path: 'add-data/:id',
    component: AddDataComponent
  }
];

@NgModule({
  declarations: [
    MyDevicesComponent,
    AddDataComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  providers: [
    MyDevicesResolver
  ],
})
export class MyDevicesModule { }
