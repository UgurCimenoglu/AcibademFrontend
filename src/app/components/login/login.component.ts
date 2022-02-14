import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  submitForm(): void {

  }

  constructor(private fb: FormBuilder, private loginService: LoginService,private notification: NzNotificationService, private router: Router) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]]
    })
  }

  login() {
    if (this.loginForm.valid) {
      var login = Object.assign({}, this.loginForm.value);
      this.loginService.login(login)
        .subscribe(response => {
          if (response.statusCode === 200) {
            this.notification.success("Başarılı","Giriş Başarılı!");
            localStorage.setItem("token",response.data.token);
            localStorage.setItem("email",response.data.email);
            this.router.navigate([""]);
          }else{
            this.notification.error("Hata","Kullanıcı adı vey şifre hatalıdır!")
          }
        })
    }
  }
}
