import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddDeviceComponent } from './add-device/add-device.component';
import { DeviceService } from 'src/app/shared/services/device.service';

@Component({
  selector: 'devices-root',
  templateUrl: './devices.component.html',
})
export class DevicesComponent implements OnInit {
  Devices: any;
  constructor(
    private route: ActivatedRoute,
    public activeModal: NgbActiveModal,
    private modalService: NgbModal,
    private service: DeviceService
    ) {
  }

  ngOnInit() {
    this.route.data.subscribe(res => {
      this.Devices = res.Devices;
    });
  }

  addDevice() {
    const modalRef = this.modalService.open(AddDeviceComponent);
    modalRef.result.then((res) => {
      this.service.getAllDevices().subscribe(res => {
        this.Devices = res;
      });
    });
  }
}
