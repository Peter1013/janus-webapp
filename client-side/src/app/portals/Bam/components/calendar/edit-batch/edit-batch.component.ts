import { Component, OnInit, Input } from '@angular/core';
import { Batch } from '../../../models/batch.model';
import { BatchType } from '../../../models/batchtype.model';
import { Output } from '@angular/core/src/metadata/directives';
import { BatchService } from '../../../services/batch.service';
import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'app-edit-batch',
  templateUrl: './edit-batch.component.html',
  styleUrls: ['./edit-batch.component.css']
})

/** TODO: Get User from session.
 * Class for edit the current batch.
 * @author Patrick Kennedy | Batch: 1712-Steve
 * @author Shane Avery Sistoza | Batch: 1712-Steve
 */
export class EditBatchComponent implements OnInit {

  @Input() batch: Batch = new Batch(null, null, null, null, null, new BatchType(null, null, null));
  @Input() searchTerm: string;
  batchTypes: BatchType[];
  showAddUserTable: boolean = false;

  editBatchAlertType: string;
  editBatchAlertMessage: string;

  associateAlertType: string;
  associateAlertMessage: string;

  constructor(private batchService: BatchService, private sessionService: SessionService) {
    this.editBatchAlertType = "danger";
    this.editBatchAlertMessage = "Warning!";

    this.associateAlertType = "success";
    this.associateAlertMessage = "Success!";
  }

  /**
   * Toggle to the table to remove an associate from the batch.
   */
  toggleRemove() {
    this.showAddUserTable = false;
  }

  /**
   * Toggle to the table to add an associate to the batch.
   */
  toggleAdd() {
    this.showAddUserTable = true;
  }

  /**
   * Submit and persist updated changes to the batch.
   *
   * @param      {number}  typeId  The type id the batch wil change to.
   */
  submit(typeId) {

    let selectedType: BatchType;
    for (let i = 0; i < this.batchTypes.length; i++) {
      if (typeId == this.batchTypes[i].id) {
        selectedType = this.batchTypes[i];
        break;
      }
    }

    this.batch.type = selectedType;
    this.batchService.updateBatch(this.batch).subscribe( status => {
      this.batchAlert("success", "Updated: " + this.batch.name + " successfully! ");
    }, error => {
      console.log(error);
      this.batchAlert("danger", "Error: Update " + this.batch.name + " unsuccessful! ");
    });
  }

  batchAlert(type, message) {
    this.editBatchAlertMessage = message;
    this.editBatchAlertType = type;
  }

  closeEditBatchAlert() {
    this.editBatchAlertMessage = null;
  }

  /**
   * Change the end date of this batch.
   *
   * @param      {string}  newDate  The new date being modified to.
   */
  endDateChanged(newDate) {
    this.batch.endDate = new Date(newDate);
  }

  /**
   * Change the start date of this batch.
   *
   * @param      {string}  newDate  The new date being modified to.
   */
  startDateChanged(newDate) {
    this.batch.startDate = new Date(newDate);
  }

  ngOnInit() {
    // this.batch = this.sessionService.getSelectedBatch();
    this.batchService.getBatchById(4).subscribe( batch => this.batch = batch );
    this.batchService.getAllBatchTypes().subscribe( types => this.batchTypes = types);
  }
}
