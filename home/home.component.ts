import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  array = [];
  constructor(private testService:TestService) { }

  ngOnInit(): void {
    this.testService.getDato().subscribe(data =>{ 
      this.array = data;
    });

  }

}
