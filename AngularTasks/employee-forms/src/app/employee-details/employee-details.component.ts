import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IEmployee } from '../models/employee';
import { ActivePipe } from "../pipe/active.pipe";


@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ActivePipe],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.scss'
})

export class EmployeeDetailsComponent implements OnInit {

  employeeForm:FormGroup<IEmployee>;

  projects= [
    { "name": "Hilite", "isActive": true },
    { "name": "Lulu", "isActive": true },
    { "name": "Cordova School", "isActive": true },
    { "name": "Azure Heights Apartments", "isActive": true },
    { "name": "Greenfield Mall", "isActive": true },
    { "name": "Pinnacle Corporate Towers", "isActive": true },
    { "name": "Sunshine Valley Resort", "isActive": true },
    { "name": "Everest Office Park", "isActive": false },
    { "name": "Maplewood Villas", "isActive": false },
    { "name": "Sterling Shopping Complex", "isActive": false }
  ]
  
  
  ngOnInit(){
    this.employeeForm = new FormGroup<IEmployee>({
      firstname: new FormControl(null,Validators.required),
      lastname:new FormControl(null),
      email: new FormControl(null,[Validators.required,Validators.email]),
      pNumber: new FormControl(null,[Validators.required,Validators.minLength(10),Validators.pattern(/^\d{1,10}$/)]),
      project:new FormControl(null,Validators.required),
      address:new FormGroup({
        address1:new FormControl(null),
        address2:new FormControl(null),
        city:new FormControl(null)
      })
    })
  }
  

  data:any;


  onSubmit()
    {
      if(this.employeeForm.valid)
      {
        this.display();
      }

    }

  display()
  {
    this.data=this.employeeForm.value;
  }


}
