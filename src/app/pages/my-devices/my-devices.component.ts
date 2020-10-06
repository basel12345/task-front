import { Router } from '@angular/router';
import { Device } from './../../shared/Interfaces/devices';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-devices-root',
  templateUrl: './my-devices.component.html',
})
export class MyDevicesComponent implements OnInit {
  MyDevices: Device;
  constructor(private route: ActivatedRoute, private router: Router) {
  }
  ngOnInit() {
    this.route.data.subscribe(res => {
      console.log(res);

      this.MyDevices = res.MyDevices['devices'];
    });
  }

  addData(id) {
    this.router.navigate([`pages/my-devices/add-data/${id}`]);
  }
}
