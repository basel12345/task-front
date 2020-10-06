import { User } from './../../../shared/Interfaces/user';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DeviceService } from 'src/app/shared/services/device.service';

@Component({
  selector: 'add-device-root',
  templateUrl: './add-device.component.html',
})
export class AddDeviceComponent implements OnInit {
  formDevice: FormGroup;
  submitted = false;
  user: User;
  id: string;

  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder, private service: DeviceService, private router: Router) {
  }

  ngOnInit() {
    this.formDevice = this.fb.group({
      name: ['', Validators.required]
    });
    this.user = JSON.parse(localStorage.getItem('user'));
    this.id = this.user._id;
  }

  get f() {
    return this.formDevice.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.formDevice.invalid) {
        return;
    }
    this.service.addDevices(this.id, this.formDevice.getRawValue()).subscribe(res => {
      console.log(res);
      if (res['status'] === true) {
        this.activeModal.close(res['device'])
      }
    });
  }
}
