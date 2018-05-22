import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../../../environments/environment';
import { User } from '../../models/user.model';

@Injectable()
export class RequestService {

  host: string = environment.url;
  context: string = environment.context;
  hostms: string = environment.msurl;
  trackPath: string = this.host + 'TrackForce/track';
  dataPath: string = this.host + 'TrackForce/track/data/get';
  /**
   * @param {HttpClient} http
   * Need to create a connection to REST endpoint
   * And initiate Http requests
   */
  constructor(private http: HttpClient) { }

  public populateDB(): Observable<any> {
    return this.http.get(this.host + 'TrackForce/track/database/populateDB');
  }

  public populateDBSF(): Observable<any> {
    return this.http.get(this.host + 'TrackForce/track/database/populateDBSF');
  }

  public deleteDB(): Observable<any> {
    return this.http.delete(this.host + 'TrackForce/track/database/deleteFromDB');
  }

  public getAssociates(): Observable<any> {
    return this.http.get(this.context + '/trainees');
  }


  public getClients(): Observable<any> {
    return this.http.get(this.dataPath + '/client');
  }

  public getTotals(): Observable<any> {
    return this.http.get(this.dataPath + '/summary');
  }

  public getStatuses(): Observable<any> {
    return this.http.get(this.hostms + '8094/all/marketingstatus');
  }

  // get first match of Client Object
  getOneClient(clientId: number): Observable<any> {
    return this.http.get(this.trackPath + '/clients/' + clientId);
  }
}
