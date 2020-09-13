import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/services/router.service';
import { ServiceTarget } from 'src/app/models/ServiceTarget';

@Component({
  selector: 'app-service-target-view',
  templateUrl: './service-target-view.component.html',
  styleUrls: ['./service-target-view.component.css']
})
export class ServiceTargetViewComponent implements OnInit {

  targets = [];
  selectedTarget: ServiceTarget;
  constructor(private routerService:RouterService ) { }

  ngOnInit() {
    this.getTargets();
  }

  loadTargets(){
    this.getTargets();
  }

  getTargets(){
    this.routerService.getServiceTargets().subscribe(targets => {this.targets = targets});
  }

}
