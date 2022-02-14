import { User } from './../../models/user';
import { PaymentService } from './../../services/payment.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InstallmentService } from './../../services/installment.service';
import { Installment } from './../../models/installment';
import { PolicyService } from './../../services/policy.service';
import { Component, OnInit } from '@angular/core';
import { Policy } from 'src/app/models/policy';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { not } from '@angular/compiler/src/output/output_ast';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-policy-sale',
  templateUrl: './policy-sale.component.html',
  styleUrls: ['./policy-sale.component.css']
})
export class PolicySaleComponent implements OnInit {

  user: User;
  Policies: Policy[] = [];
  Installments: Installment[] = [];
  current = 0;
  policyValue: number;
  installmentValue: number;
  selectedPolicyForCard: any = null;
  selectedInstallmentForCard: any = null;
  saleQueryForm: FormGroup;
  paymentForm: FormGroup;
  pay: FormGroup;
  saleGuid: string;
  index = 'First-content';

  pre(): void {
    this.current -= 1;
    this.changeContent();
  }
  next(): void {

    if (this.current === 0 && this.addSaleQuery()) {
      this.current += 1;
      this.changeContent();
    }
    else if (this.current === 1) {
      //guidi onaylayacak kodu yaz.
      this.current += 1;
      this.changeContent();
    }
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
  setCurrentPolicyForCard(value: any) {
    this.selectedPolicyForCard = this.Policies ? this.Policies[value - 1] : null;
  }
  setCurrentInstallmentForCard(value: any) {
    this.selectedInstallmentForCard = this.Installments ? this.Installments[value - 1] : null;
  }


  constructor(
    private policyService: PolicyService,
    private installmentService: InstallmentService,
    private formBuilder: FormBuilder,
    private notification: NzNotificationService,
    private paymentService: PaymentService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getuserByEmail();
    this.getAllPolicies();
    this.getAllInstallments();
    this.createPaymentAddForm();
    this.createSaleQueryAddForm();
  }

  getAllPolicies(): void {
    this.policyService.getAllPolicies()
      .subscribe(response => {
        this.Policies = response.data;
        console.log(response.data)
      })
  }
  getAllInstallments(): void {
    this.installmentService.getAllPolicies()
      .subscribe(response => {
        this.Installments = response.data
      })
  }
  createSaleQueryAddForm(): void {
    this.saleQueryForm = this.formBuilder.group({
      userId: ["", Validators.required],
      policyId: ["", Validators.required],
      installmentId: ["", Validators.required]
    })
  }
  createPaymentAddForm(): void {
    this.paymentForm = this.formBuilder.group({
      cardName: ["", [Validators.required]],
      cardNumber: ["", [Validators.required, Validators.minLength(16), Validators.pattern("^[0-9]*$")]],
      validDate: ["", [Validators.required, Validators.pattern(/^(?:0?[1-9]|1[0-2]) *\/ *[1-9][0-9]$/)]],
      cvv: ["", [Validators.required, Validators.minLength(3), Validators.pattern("^[0-9]*$")]],
    })
  }
  createPayForm(): void {
    this.pay = this.formBuilder.group({
      Id: [this.saleGuid ? this.saleGuid : "", [Validators.required]],

    })
  }
  addSaleQuery(): boolean {
    if (this.saleQueryForm.valid) {
      let saleQuery = Object.assign({}, this.saleQueryForm.value);
      this.paymentService.add(saleQuery).subscribe(response => {
        if (response.statusCode === 200) {
          console.log("girdiii");
          this.saleGuid = response.data;
          this.createPayForm();
        }
      })
      return true;
    } else {
      this.notification.error("Hata", "Bilgilerinizi Kontrol Ediniz.")
      return false;
    }



  }
  payPolicy(): boolean {
    if (this.paymentForm.valid) {
      var pay = Object.assign({}, this.pay.value);
      console.log(this.saleGuid)
      console.log(pay);
      this.paymentService.pay(pay)
        .subscribe(response => {
          console.log(response)
          if (response.statusCode === 200) {
            this.saleGuid = "";
            this.notification.success("Satın Alma Başarılı.", "Success");
            this.next();
          }
        })
      return true;
    }
    else {
      this.notification.error("Beklenmeyen Hata!", "Error");
      return false;
    }
  }
  getuserByEmail() {
    let email: string | null = localStorage.getItem("email");
    if (email != null) {
      this.userService.getByMail(email).subscribe(response => {
        if (response.statusCode === 200) {
          this.user = response.data;
          this.saleQueryForm.patchValue({ userId: response.data.id })
        }
      })
    }

  }
}
