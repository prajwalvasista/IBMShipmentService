import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import SearchService from '../Services/search-service';
import { SearchParams } from '../Models/search-params';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [NavbarComponent, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.scss',
})
export class HomeComponentComponent implements OnInit {

  searchForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private searchService: SearchService,
    private router: Router
  ) {
    this.searchForm = this.formBuilder.group({
      orderNumber: new FormControl('', []),
      shipmentNumber: new FormControl('', []),
      fName: new FormControl('', []),
      lName: new FormControl('', []),
      emailId: new FormControl('', []),
      phoneNumber: new FormControl('', []),
    })
  }

  ngOnInit(): void {

  }

  async submitForm() {

    const orderNumber = this.searchForm.controls['orderNumber'].value;
    const shipmentNumber = this.searchForm.controls['shipmentNumber'].value;
    const fName = this.searchForm.controls['fName'].value;
    const lName = this.searchForm.controls['lName'].value;
    const emailId = this.searchForm.controls['emailId'].value;
    const phoneNumber = this.searchForm.controls['phoneNumber'].value;


    const params: SearchParams = {
      orderNumber: orderNumber,
      shipmentNumber: shipmentNumber,
      fName: fName,
      lName: lName,
      emailId: emailId,
      phoneNumber: phoneNumber,
    }
    console.log(params);

    this.searchService.updateSearchParams(params);

    this.router.navigate(['/search-results']);

  }
}
