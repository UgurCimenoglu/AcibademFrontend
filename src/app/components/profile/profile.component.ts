import { Component, OnInit } from '@angular/core';
import { PolicyService } from 'src/app/services/policy.service';
import { SalePolicy } from 'src/app/models/salePolicy';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  sales: SalePolicy[]
  constructor(private policyService: PolicyService) { }

  ngOnInit(): void {
    this.getPolicySalesByEmail();
  }

  getPolicySalesByEmail() {
    let email: string | null = localStorage.getItem("email");
    if (email) {
      this.policyService.getPoliciesByMail(email)
        .subscribe(response => {
          if (response.statusCode === 200) {
            this.sales = response.data;
          }
        })
    }
  }
}
