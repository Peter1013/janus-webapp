import { Injectable } from '@angular/core';

/**
 * Utility service that holds the base url for the Zuul gateway.
 * Any component or service that needs to communicate with anything else
<<<<<<< HEAD
 * in the Hydra ecosystem must access Zuul
=======
 * in the Gambit ecosystem must access Zuul
>>>>>>> 8badc09e6717c61cf339c7db8217d5ce1e3a9aef
 * through the URL provided by this service.
 *
 * The primary benefit is that if the Zuul gateway changes,
 * only a single line of code needs to be changed in response
 *
 * Last modified by the Avengers
 *
 * Alex Pich | 1803-USF-MAR26 | Wezley Singleton
 *
 * Danny S Chhunn | 1803-USF-MAR26 | Wezley Singleton
 *
 * Michael Adedigba | 1803-USF-MAR26 | Wezley Singleton
 *
 * Pedro De Los Reyes | 1803-USF-MAR26 | Wezley Singleton
 *
 * For consistency added a forward slash to the end of zullEndpoint
 */
@Injectable()
export class UrlUtilService {

  // base url to get to the zuul gateway
<<<<<<< HEAD
  readonly zuulEndpoint = 'https://hydra-gateway-service.cfapps.io/';
=======
  readonly zuulEndpoint = 'http://ec2-35-182-210-106.ca-central-1.compute.amazonaws.com:10000/';
>>>>>>> 8badc09e6717c61cf339c7db8217d5ce1e3a9aef

  constructor() { }

  public getBase(): string {
    return this.zuulEndpoint;
  }

}
