import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { ErrorAlertComponent } from '../gambit-client/ui/error-alert/error-alert.component';
<<<<<<< HEAD
import { HydraInterceptor } from '../gambit-client/interceptors/hydra.interceptor';
=======
import { GambitInterceptor } from '../gambit-client/interceptors/gambit.interceptor';
>>>>>>> 8badc09e6717c61cf339c7db8217d5ce1e3a9aef

@Component({
  selector: 'app-janus',
  templateUrl: './janus.component.html',
  styleUrls: ['./janus.component.css', '../../assets/css/styles.css']
})
export class JanusComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
  }

}
