import { Router } from '@angular/router';
import { DeviceService } from './../../../shared/services/device.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'add-data-root',
  templateUrl: './add-data.component.html',
})
export class AddDataComponent implements OnInit {
  FormDatas: FormGroup;
  submitted = false;
  id: string;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private service: DeviceService) {
  }
  ngOnInit() {
    this.route.params.subscribe(res => {
      this.id = res.id;
    });
    this.FormDatas = this.fb.group({
      price: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  get f() {
    return this.FormDatas.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.FormDatas.invalid) {
        return;
    }
    this.service.addDataForDevices(this.id, this.FormDatas.getRawValue()).subscribe(res => {
      console.log(res);
      if (res['status'] === true) {
        this.router.navigate(["pages/my-devices"]);
      }
    });
  }
}
