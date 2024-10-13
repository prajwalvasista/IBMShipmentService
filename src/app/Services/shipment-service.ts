import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SearchParams } from '../Models/search-params';
import { ShipmentSummary } from '../Models/shipment-summary';

@Injectable({
    providedIn: 'root'
})

export class ShipmentService {
    private dataUrl = 'assets/Data/shipment_list.json';
    private shipmentSummaryUrl = 'assets/Data/updated_shipment_details.json';

    constructor(private http: HttpClient) { }

    getShipments(): Observable<any> {
        return this.http.get<any>(this.dataUrl).pipe(
            map(data => data)
        );
    }

    getShipmentSummary(): Observable<ShipmentSummary[]> {
        return this.http.get<any>(this.shipmentSummaryUrl).pipe(
            map(data => data)
        );
    }

}