import { Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShipmentSearchResultsComponent } from './shipment-search-results/shipment-search-results.component';
import { ShipmentSummaryComponent } from './shipment-summary/shipment-summary.component';

export const routes: Routes = [
    { path: '', component: HomeComponentComponent },
    { path: 'navbar', component: NavbarComponent },
    { path: 'search-results', component: ShipmentSearchResultsComponent },
    { path: 'shipment-summary/:OrderNo', component: ShipmentSummaryComponent },
];
