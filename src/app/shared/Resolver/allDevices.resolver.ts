import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';
import { DeviceService } from '../services/device.service';

@Injectable()
export class DevicesResolver implements Resolve<any> {
  constructor(private service: DeviceService) {}

  resolve() {
    return this.service.getAllDevices();
  }
}
