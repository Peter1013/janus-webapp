import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// rxjs
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

// services
import { AbstractApiService } from './abstract-api.service';
import { EnvironmentService } from './environment.service';

// batches
import { Batch } from '../entities/Batch';


/**
 * this service manages calls to the web service
 * for Batch objects
 */
@Injectable()
export class BatchService extends AbstractApiService<Batch> {

    constructor(httpClient: HttpClient, envService: EnvironmentService) {
      super(envService, httpClient);
    }

    /*
      =====================
      BEGIN: API calls
      =====================
    */

    /**
     * retrieves the batches that belong to the currently
     * authenticated trainer and pushes them on the
     * list subject
     *
     * spring-security: @PreAuthorize("hasAnyRole('VP', 'TRAINER', 'STAGING', 'PANEL')")
     */
    public fetchAllByTrainer(): void {
      const url = 'trainer/batch/all';

      super.doGetList(url);
    }

    /**
     * retrieves all training batches regardless of the trainer
     * and pushes them on the list subject
     *
     * spring-security: @PreAuthorize("hasAnyRole('VP', 'QC', 'STAGING', 'PANEL')")
     */
    public fetchAll(): void {
<<<<<<< HEAD
      const url = this.envService.buildUrl('vp/batch/all');
      this.fetch(url);
=======
      const url = 'vp/batch/all';

      super.doGetList(url);
>>>>>>> revaturions
    }

    /**
    * transmits a batch to be saved in persistent
    * storage on the server and pushes the saved
    * object on the saved subject
    *
    * spring-security: @PreAuthorize("hasAnyRole('VP', 'QC', 'TRAINER', 'PANEL')")
    *
    * @param batch: Batch
    */
    public create(batch: Batch): void {
      const url = 'all/batch/create';

      super.doPost(batch, url);
    }

    /**
     * transmits a Batch object to be updated and
     * pushes the updated object on th savedSubject
     *
     * spring-security: @PreAuthorize("hasAnyRole('VP', 'QC', 'TRAINER', 'PANEL')")
     *
     * @param batch: Batch
     */
    public update(batch: Batch): void {
      const url = 'all/batch/update';

      super.doPut(batch, url);
    }

    /**
     * transmits a batch object to be deleted and
     * pushes the deleted object on the deleted
     * subject
     *
     * spring-security: @PreAuthorize("hasAnyRole('VP')")
     *
     * @param batch: Batch
     */
    public delete(batch: Batch): void {
      const url = `all/batch/delete/${batch.batchId}`;

      super.doDelete(batch, url);
    }

}
