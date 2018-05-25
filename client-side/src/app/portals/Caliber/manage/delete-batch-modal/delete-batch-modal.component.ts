import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';
<<<<<<< HEAD
import { HydraBatch } from '../../../../gambit-client/entities/HydraBatch';
=======
import { BatchGambit } from '../../../../gambit-client/entities/BatchGambit';
>>>>>>> 8badc09e6717c61cf339c7db8217d5ce1e3a9aef
import { CompleteBatch } from '../../../../gambit-client/aggregator/entities/CompleteBatch';

@Component({
  selector: 'app-delete-batch-modal',
  templateUrl: './delete-batch-modal.component.html',
  styleUrls: ['./delete-batch-modal.component.css']
})
export class DeleteBatchModalComponent implements OnInit {

  @Input() batch: CompleteBatch;
  constructor(private activeModal: NgbActiveModal) {
    this.batch = new CompleteBatch();
  }

  ngOnInit() {}

  delete() {
    this.activeModal.close('Delete');
  }

  cancel() {
    this.activeModal.dismiss('nevermind');
  }

}
