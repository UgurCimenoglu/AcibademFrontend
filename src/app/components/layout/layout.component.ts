import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  isCollapsed = false;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  isAuth(): boolean {
    if (this.loginService.isAuthenticated()) {
      return true;
    } else {
      return false;
    }
  }

  logOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    this.router.navigateByUrl("/").then(() => window.location.reload());
  }
}
