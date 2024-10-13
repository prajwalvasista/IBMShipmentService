import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { Router, ActivatedRoute } from '@angular/router';
import { ShipmentService } from '../Services/shipment-service';
import { CommonModule } from '@angular/common';
import { ShipmentSummary } from '../Models/shipment-summary';
import { ToAddress } from '../Models/to-address';


@Component({
  selector: 'app-shipment-summary',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  providers: [ShipmentService],
  templateUrl: './shipment-summary.component.html',
  styleUrl: './shipment-summary.component.scss'
})
export class ShipmentSummaryComponent implements OnInit {

  orderNo!: string;
  shipmentSummary: any;

  constructor(private router: Router, private route: ActivatedRoute, private shipmentService: ShipmentService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.orderNo = params['OrderNo'] || '';
    })

    this.fetchShipmentSummary();

  }

  fetchShipmentSummary() {
    this.shipmentService.getShipmentSummary().subscribe({
      next: (shipments: ShipmentSummary[]) => {
        this.shipmentSummary = shipments.find((shipmentObj: ShipmentSummary) => shipmentObj.Shipment.OrderNo === this.orderNo)?.Shipment;
      },
      error: (error) => {
        console.log(error.error);
      },
      complete: () => { }
    });
  }



  navigateToHome() {
    this.router.navigate(["/"]);
  }

  navigateToSearchResults() {
    this.router.navigate(["/search-results"])
  }

  formatAddress(address: ToAddress): string {
    const { FirstName, LastName, AddressLine1, AddressLine2, City, State, ZipCode, Country } = address;

    const fullName = `${FirstName} ${LastName}`;
    const addressLine = AddressLine2 ? `${AddressLine1}, ${AddressLine2}` : AddressLine1;
    const cityStateZip = `${City}, ${State}, ${ZipCode}`;
    const country = Country;

    return `${fullName} ${addressLine} ${cityStateZip} ${country}`;
  }

}
