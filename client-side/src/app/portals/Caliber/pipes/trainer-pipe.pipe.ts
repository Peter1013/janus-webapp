import { Pipe, PipeTransform } from '@angular/core';
<<<<<<< HEAD
import { HydraTrainer } from '../../../gambit-client/entities/HydraTrainer';
=======
import { GambitTrainer } from '../../../gambit-client/entities/GambitTrainer';
>>>>>>> 8badc09e6717c61cf339c7db8217d5ce1e3a9aef


@Pipe({
  name: 'trainerPipe'
})
export class TrainerPipePipe implements PipeTransform {
  /**
   * Logic to filter out Active/Inactive Trainers
   * @param {*} gamtrainers
   * @param {String} status
   * @returns {*}
   * @memberof TrainerPipePipe
   */
  transform(trainers: GambitTrainer[], status: String): GambitTrainer[] {
    if (status === 'ROLE_INACTIVE') {
      return trainers.filter(trainer => trainer.role.role === status);
    } else {
      return trainers.filter(trainer => trainer.role.role !== 'ROLE_INACTIVE');
    }
  }
}
