import { SalePolicy } from './../../models/salePolicy';
import { AdminService } from './../../services/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  policySales: SalePolicy[];

  ngOnInit(): void {
    this.getAllSale();
  }

  getAllSale(): void {
    this.adminService.getAll()
      .subscribe(response => {
        if (response.statusCode === 200) {
          this.policySales = response.data;
        }
      })
  }
}
