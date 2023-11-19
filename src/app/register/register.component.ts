import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
selector: 'app-register',
templateUrl: './register.component.html',
styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
angForm: FormGroup;
constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {
this.angForm = this.fb.group({
email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
password: ['', Validators.required],
name: ['', Validators.required],
surname: ['', Validators.required],
idexplotation: ['', Validators.required]
});
}

ngOnInit() {
}

postdata(angForm1: { value: { name: any; surname: any; email: any; password: any; idexplotation: any; }; })
{
this.dataService.userregistration(angForm1.value.name,angForm1.value.surname,angForm1.value.email,angForm1.value.password,angForm1.value.idexplotation)
.pipe(first())
.subscribe(
data => {
this.router.navigate(['login']);
},

error => {
    alert("User email or id explotation is already in use")
});
}

get email() { return this.angForm.get('email'); }
get password() { return this.angForm.get('password'); }
get name() { return this.angForm.get('name'); }
get surname() { return this.angForm.get('surname'); }
get idexplotation() { return this.angForm.get('idexplotation'); }
}