import { ReactiveFormsModule } from '@angular/forms';
import { DevicesResolver } from './../../shared/Resolver/allDevices.resolver';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevicesComponent } from './devices.component';
import { AddDeviceComponent } from './add-device/add-device.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path: '',
    component: DevicesComponent,
    resolve: {
      Devices: DevicesResolver
    }
  }
];

@NgModule({
  declarations: [
    DevicesComponent,
    AddDeviceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [
    DevicesResolver
  ],
  entryComponents: [
    AddDeviceComponent
  ]
})
export class DevicesModule { }
