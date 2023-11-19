import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-addfincas',
  templateUrl: './addfincas.component.html',
  styleUrls: ['./addfincas.component.css']
})

export class AddfincasComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {
  this.angForm = this.fb.group({
  use: ['', Validators.required],
  idfinca: ['', Validators.required],
  state: ['', Validators.required],
  idexplotation: ['', Validators.required]
  });
  }
  
  idexplotationuser= this.dataService.getidexplotationUser();

  ngOnInit() {
  }
  
  postdata(angForm1: { value: { idfinca: any; state: any; use: any; idexplotation: any; }; })
  {
  this.dataService.addfinca(angForm1.value.idfinca,angForm1.value.state,angForm1.value.use,this.idexplotationuser)
  .pipe(first())
  .subscribe(
  data => {
  this.router.navigate(['listfincas']);
  },
  
  error => {
    alert("Id is already in use")
  });
  }
  
  cancel(){
    this.router.navigate(["/listfincas"])
  }

  get idfinca() { return this.angForm.get('idfinca'); }
  get state() { return this.angForm.get('state'); }
  get use() { return this.angForm.get('use'); }
}
