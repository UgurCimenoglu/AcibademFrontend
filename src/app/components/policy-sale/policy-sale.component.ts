import { PolicyService } from './../../services/policy.service';
import { Component, OnInit } from '@angular/core';
import { Policy } from 'src/app/models/policy';
import { PolicyResponseModel } from 'src/app/models/policyResponseModel';

@Component({
  selector: 'app-policy-sale',
  templateUrl: './policy-sale.component.html',
  styleUrls: ['./policy-sale.component.css']
})
export class PolicySaleComponent implements OnInit {

  Policies: Policy[] = [];
  current = 0;

  index = 'First-content';

  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    this.current += 1;
    this.changeContent();
  }

  done(): void {
    console.log('done');
  }

  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.index = 'First-content';
        break;
      }
      case 1: {
        this.index = 'Second-content';
        break;
      }
      case 2: {
        this.index = 'third-content';
        break;
      }
      default: {
        this.index = 'error';
      }
    }
  }

  constructor(private policyService: PolicyService) { }

  ngOnInit(): void {
    this.getAllPolicies();
  }

  getAllPolicies():void {
    this.policyService.getAllPolicies()
      .subscribe(response => {
        this.Policies = response.data;
      })
  }
}
