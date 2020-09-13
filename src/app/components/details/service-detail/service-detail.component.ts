import { Component, OnInit, Input } from '@angular/core';
import { ServiceTarget } from 'src/app/models/ServiceTarget';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {
  @Input() target : ServiceTarget;
  
  constructor() { }

  ngOnInit() {
  }

}
