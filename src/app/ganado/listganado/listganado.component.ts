import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-listganado',
  templateUrl: './listganado.component.html',
  styleUrls: ['./listganado.component.css']
})
export class ListganadoComponent implements OnInit {
  constructor(private router:Router, private apiservice: ApiService){}

  addnewganado(){
    this.router.navigate(["/addganado"])
  }

 idexplotationuser= this.apiservice.getidexplotationUser();
 ganado: any;

  ngOnInit(): void {

    this.apiservice.listganado(this.idexplotationuser).subscribe(
      (result:any)=>{
        this.ganado  =  result.data;
      }
    )

  }

  deleteganado(animal:any){
    this.apiservice.deleteganado(animal.idganado).subscribe(data=>{
      this.ganado = this.ganado.filter((u: any) => u !== animal);
    })
}
}
