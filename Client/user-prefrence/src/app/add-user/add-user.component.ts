import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { Location } from '@angular/common';
import { User } from '../_interface/user';
import {Router, ActivatedRoute} from "@angular/router"
import { DataService } from '../service/data-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  public userForm: FormGroup;
  constructor(private router: Router,private route:ActivatedRoute, public dataService:DataService) {
    
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    if(id != undefined)
    {
      console.log("id found");
      this.dataService.GetUser(id).subscribe(res=>{
        this.userForm = new FormGroup({
          firstname: new FormControl(res.data.firstName, [Validators.required, Validators.maxLength(60)]),
          lastname: new FormControl(res.data.lastName, [Validators.required, Validators.maxLength(60)]),
          age: new FormControl(res.data.age,[Validators.required, Validators.min(0)]),
          color: new FormControl(res.data.color, [Validators.required]),
          id: new FormControl(id,[])
        });
      });
    }else{
      this.userForm = new FormGroup({
        firstname: new FormControl('', [Validators.required, Validators.maxLength(60)]),
        lastname: new FormControl('', [Validators.required, Validators.maxLength(60)]),
        age: new FormControl(18,[Validators.required, Validators.min(0)]),
        color: new FormControl('', [Validators.required]),
        id: new FormControl(0,[])
      });
    }
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.userForm.controls[controlName].hasError(errorName);
  }

  public saveUser = (createUser) => {
    if (this.userForm.valid) {
      let userDetail: User = {
        firstname: createUser.firstname,
        lastname: createUser.lastname,
        age: createUser.age,
        color:createUser.color,
        id:createUser.id
      }
      
      if(userDetail.id > 0){
        this.dataService.UpdateUser(userDetail).subscribe(res=>{
          this.router.navigate(['/'])    
        });
      }else{
      this.dataService.CreateUser(userDetail).subscribe(res=>{
        this.router.navigate(['/'])    
      });
    }
    }
  }

  public onCancel = () => {
    this.router.navigate(['/'])
  }
}
