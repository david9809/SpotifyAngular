import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service.ts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pais: any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCountry().subscribe( data => {
        this.pais = data;
    });
  }

}
