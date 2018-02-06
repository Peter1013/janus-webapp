import { Component, OnInit, Input } from '@angular/core';
import { EditBatchService } from '../../services/edit-batch/edit-batch.service';
import { BamUser } from '../../models/bamuser.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-add-associate-to-batch',
  templateUrl: './add-associate-to-batch.component.html',
  styleUrls: ['./add-associate-to-batch.component.css']
})

/**
 * Class for adding an associate to the batch.
 * @author Patrick Kennedy
 * @author Shane Avery Sistoza
 * @batch 1712-Steve
 *
 */
export class AddAssociateToBatchComponent implements OnInit {

  associates: BamUser[];
  @Input() searchTerm: string;

  constructor(public editBatchService: EditBatchService, public usersService: UsersService) {
  }

  ngOnInit() {
    this.editBatchService.getUsersNotInBatch(4).subscribe(users => this.associates = users);
    console.log(this.searchTerm);
  }

  /**
   * Adds user to the batch.
   *
   * @param      {BamUser}  user    The user being added to the batch.
   */
  addUser(user: BamUser) {
    let i = 0;
    for (let associate of this.associates) {
      if (associate.userId === user.userId) {
        this.usersService.addUserToBatch(4, associate.userId).subscribe(users => this.associates = users);
        break;
      }
      i++;
    }
  }

}
