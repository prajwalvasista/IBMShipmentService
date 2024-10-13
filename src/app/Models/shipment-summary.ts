// Define the structure of a single shipment
export interface ShipmentSummary {
    Shipment: {
        AssignedToUserId: string;
        Status: string;
        DeliveryMethod: string;
        ExpectedShipmentDate: string;
        OrderNo: string;
        ScacAndService: string;
        ShipmentKey: string;
        ShipmentNo: string;
        BillToAddress: {
            FirstName: string;
            LastName: string;
            EmailID: string;
            Phonenumber: string;
            AddressID: string;
            AddressLine1: string;
            AddressLine2?: string;
            City: string;
            Country: string;
            State: string;
            ZipCode: string;
            PersonInfoKey: string;
        };
        ToAddress: {
            FirstName: string;
            LastName: string;
            EmailID: string;
            DayPhone: string;
            AddressID: string;
            AddressLine1: string;
            AddressLine2?: string;
            City: string;
            Country: string;
            State: string;
            ZipCode: string;
            PersonInfoKey: string;
        };
        ShipmentLines: {
            TotalNumberOfRecords: string;
            ShipmentLine: {
                Quantity: string;
                ShipmentLineKey: string;
                OrderLine: {
                    ItemDetails: {
                        DisplayUnitOfMeasure: string;
                        Description: string;
                        ImageUrl: string;
                        ItemID: string;
                    };
                };
            }[];
        };
    };
}
