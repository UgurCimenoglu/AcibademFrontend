import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { RegisterService } from './../../services/register.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService,
    private nofitication: NzNotificationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }

  register(): void {
    if (this.registerForm.valid) {
      console.log('submit', this.registerForm.value);
      let register = this.registerForm.value;
      this.registerService.register(register)
        .subscribe(response => {
          if (response.statusCode === 200) {
            this.nofitication.success("Başarılı", "Kayıt işlemi başarılı, girş sayfasına yönlendiriliyorsunuz...");
            this.router.navigate(["/login"])
          }
        })
    } else {
      Object.values(this.registerForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      firstname: [null, [Validators.required]],
      lastname: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
  }
}
