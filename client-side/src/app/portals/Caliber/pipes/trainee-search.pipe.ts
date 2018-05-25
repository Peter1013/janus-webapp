import { Pipe, PipeTransform } from '@angular/core';
<<<<<<< HEAD
import { HydraTrainee } from '../../../gambit-client/entities/HydraTrainee';
=======
import { GambitTrainee } from '../../../gambit-client/entities/GambitTrainee';
>>>>>>> 8badc09e6717c61cf339c7db8217d5ce1e3a9aef


@Pipe({
  name: 'traineeSearchPipe'
})
export class TraineeSearch implements PipeTransform {

  transform(trainees: any, searchText: String): GambitTrainee[] {
    if (!trainees) {
      return [];
    } else {
      searchText = searchText.toLowerCase();

      return trainees.filter(results => {
        return results.toLowerCase().includes(searchText);
      });
    }
  }
}

