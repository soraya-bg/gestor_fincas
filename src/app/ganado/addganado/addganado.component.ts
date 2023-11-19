import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-addganado',
  templateUrl: './addganado.component.html',
  styleUrls: ['./addganado.component.css']
})
export class AddganadoComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {
  this.angForm = this.fb.group({
  gender: ['', Validators.required],
  idganado: ['', Validators.required],
  birth: ['', Validators.required],
  type: ['', Validators.required],
  death: ['', Validators.required],
  group: ['', Validators.required],
  idexplotation: ['', Validators.required],
  });
  }
  
  idexplotationuser= this.dataService.getidexplotationUser();

  ngOnInit() {
  }
  
  postdata(angForm1: { value: { idganado: any; type: any; gender: any; birth: any; death: any; group: any; idexplotation: any; }; })
  {
  this.dataService.addganado(angForm1.value.idganado,angForm1.value.type,angForm1.value.gender,angForm1.value.birth,angForm1.value.death,angForm1.value.group,this.idexplotationuser)
  .pipe(first())
  .subscribe(
  data => {
  this.router.navigate(['listganado']);
  },
  
  error => {
    alert("Id is already in use")
  });
  }
  
  cancel(){
    this.router.navigate(["/listganado"])
  }

  get idganado() { return this.angForm.get('idganado'); }
  get type() { return this.angForm.get('type'); }
  get gender() { return this.angForm.get('gender'); }
  get birth() { return this.angForm.get('birth'); }
  get death() { return this.angForm.get('death'); }
  get group() { return this.angForm.get('group'); }

}
