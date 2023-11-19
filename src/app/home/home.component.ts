import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private router:Router, private dataService: ApiService){}

  name = this.dataService.getToken();

  ngOnInit(): void { 
      
  }
  
}