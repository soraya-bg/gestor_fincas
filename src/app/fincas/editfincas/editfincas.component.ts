import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { Fincas } from 'src/app/fincas';
import { first } from 'rxjs';

@Component({
  selector: 'app-editfincas',
  templateUrl: './editfincas.component.html',
  styleUrls: ['./editfincas.component.css']
})
export class EditfincasComponent implements OnInit {
  cancel(){
    this.router.navigate(["/listfincas"])
  }


  addForm:any; 
  finca_id: any;
  
  
  constructor( 
    private formBuilder: FormBuilder, 
    private router: Router,
    private apiservice:ApiService, 
    private url:ActivatedRoute
    ) {



      this.addForm = this.formBuilder.group({
        idfinca:[],
        state: ['', Validators.required],  
        use: ['', [Validators.required, Validators.maxLength(20)]],   
        idexplotation: ['', Validators.required], 
      }
      )
     }


  ngOnInit(): void {

    this.finca_id = this.url.snapshot.params['idfinca'];
    if (this.finca_id>0) {
      this.apiservice.getSingleFinca(this.finca_id).subscribe((
        (data:any)=>{
          this.addForm.patchValue(data.data);
        }

      ))
    }
    console.log(this.finca_id);
  }

 onEdit(addForm1: { value: { idfinca: any; state: any; use: any; idexplotation: any; }; })
 {
 this.apiservice.deletefinca(addForm1.value.idfinca).subscribe(data=>{})
 this.apiservice.addfinca(addForm1.value.idfinca,addForm1.value.state,addForm1.value.use,addForm1.value.idexplotation)
 .pipe(first())
 .subscribe(
 data => {
 this.router.navigate(['listfincas']);
 },
 );
 }
  get idfinca() { return this.addForm.get('idfinca'); }
  get state() { return this.addForm.get('state'); }
  get use() { return this.addForm.get('use'); }
  get idexplotation() { return this.addForm.get('idexplotation'); }


}
