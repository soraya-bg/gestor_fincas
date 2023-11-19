import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-editganado',
  templateUrl: './editganado.component.html',
  styleUrls: ['./editganado.component.css']
})
export class EditganadoComponent implements OnInit{
  cancel(){
    this.router.navigate(["/listganado"])
  }


  addForm:any; 
  ganado_id: any;
  
  
  constructor( 
    private formBuilder: FormBuilder, 
    private router: Router,
    private apiservice:ApiService, 
    private url:ActivatedRoute
    ) {



      this.addForm = this.formBuilder.group({
        idganado: [],
        type: ['', Validators.required],
        gender: ['', Validators.required],  
        birth: ['', Validators.required],  
        death: ['', Validators.required],  
        group: ['', Validators.required],     
        idexplotation: ['', Validators.required], 
      }
      )
     }


  ngOnInit(): void {

    this.ganado_id = this.url.snapshot.params['idganado'];
    if (this.ganado_id>0) {
      this.apiservice.getSingleGanado(this.ganado_id).subscribe((
        (data:any)=>{
          console.log(data.data);
          this.addForm.patchValue(data.data);
        }

      ))
    }
    console.log(this.ganado_id);
  }

  onEdit(addForm1: { value: { idganado: any; type: any; gender: any; birth: any; death: any; group: any; idexplotation: any; }; })
  {
  this.apiservice.deleteganado(addForm1.value.idganado).subscribe(data=>{})
  this.apiservice.addganado(addForm1.value.idganado,addForm1.value.type,addForm1.value.gender,addForm1.value.birth,addForm1.value.death,addForm1.value.group,addForm1.value.idexplotation)
  .pipe(first())
  .subscribe(
  data => {
  this.router.navigate(['listganado']);
  },
  );
  }
  get idganado() { return this.addForm.get('idganado'); }
  get type() { return this.addForm.get('type'); }
  get gender() { return this.addForm.get('gender'); }
  get birth() { return this.addForm.get('birth'); }
  get death() { return this.addForm.get('death'); }
  get group() { return this.addForm.get('group'); }
}
