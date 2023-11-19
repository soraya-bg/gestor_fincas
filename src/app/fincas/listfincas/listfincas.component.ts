import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-listfincas',
  templateUrl: './listfincas.component.html',
  styleUrls: ['./listfincas.component.css']
})
export class ListfincasComponent implements OnInit {
  constructor(private router:Router, private apiservice: ApiService){}

  addnewfinca(){
    this.router.navigate(["/addfincas"])
  }

 idexplotationuser= this.apiservice.getidexplotationUser();
 fincas: any;

  ngOnInit(): void {

    this.apiservice.listfinca(this.idexplotationuser).subscribe(
      (result:any)=>{
        this.fincas  =  result.data;
      }
    )

  }

  deletefinca(finca:any){
    this.apiservice.deletefinca(finca.idfinca).subscribe(data=>{
      this.fincas = this.fincas.filter((u: any) => u !== finca);
    })
}

}