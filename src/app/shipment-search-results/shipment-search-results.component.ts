import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { HttpClient } from '@angular/common/http';
import { ShipmentService } from '../Services/shipment-service';
import SearchService from '../Services/search-service';
import { SearchParams } from '../Models/search-params';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipment-search-results',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  providers: [ShipmentService],
  templateUrl: './shipment-search-results.component.html',
  styleUrl: './shipment-search-results.component.scss'
})
export class ShipmentSearchResultsComponent implements OnInit {

  searchParams!: SearchParams | null;
  filteredData: any[] = [];
  allData: any[] = [];
  totalData: string = "0";

  constructor(private shipmentService: ShipmentService, private searchService: SearchService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.searchService.currentSearchParams.subscribe(params => {
      this.searchParams = params;
      this.fetchData();
    });
  }

  fetchData() {
    this.shipmentService.getShipments().subscribe({
      next: (response) => {
        this.allData = response?.Shipments?.Shipment || [];
        this.filterData();
      },
      error: (error) => {
        console.log(error.error);
      },
      complete: () => { }
    })
  }

  filterData() {
    if (!this.searchParams) {
      this.filteredData = this.allData;
      this.totalData = this.filteredData.length.toString();
      return this.filteredData;
    }

    this.filteredData = this.allData.filter(shipment => {
      const billToAddress = shipment.BillToAddress || {};

      const matchesOrderNo = !this.searchParams?.orderNumber || shipment.OrderNo.includes(this.searchParams?.orderNumber);
      const matchesShipmentNo = !this.searchParams?.shipmentNumber || shipment.ShipmentNo.includes(this.searchParams?.shipmentNumber);
      const matchesFirstName = !this.searchParams?.fName || billToAddress.FirstName?.toLowerCase().includes(this.searchParams?.fName.toLowerCase());
      const matchesLastName = !this.searchParams?.lName || billToAddress.LastName?.toLowerCase().includes(this.searchParams?.lName.toLowerCase());
      const matchesEmailId = !this.searchParams?.emailId || billToAddress.EMailID?.toLowerCase().includes(this.searchParams?.emailId.toLowerCase());
      const matchesPhoneNumber = !this.searchParams?.phoneNumber || billToAddress.DayPhone.includes(this.searchParams?.phoneNumber);

      return matchesOrderNo && matchesShipmentNo && matchesFirstName && matchesLastName && matchesEmailId && matchesPhoneNumber;
    });

    this.totalData = this.filteredData.length.toString();
    return this.filteredData;
  }

  navigateToHome() {
    this.router.navigate(["/"]);
  }

  navigateToShipmentSummary(orderNo: string) {
    this.router.navigate([`/shipment-summary/${orderNo}`]);
  }

}
