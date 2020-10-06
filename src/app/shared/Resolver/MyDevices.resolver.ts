import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';
import { DeviceService } from '../services/device.service';

@Injectable()
export class MyDevicesResolver implements Resolve<any> {
  constructor(private service: DeviceService) {}

  resolve() {
    let user = JSON.parse(localStorage.getItem('user'));
    return this.service.getMyDevices(user['_id']);
  }
}
