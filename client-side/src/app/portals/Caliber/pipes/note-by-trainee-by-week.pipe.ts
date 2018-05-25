import { Pipe, PipeTransform } from '@angular/core';
import { Note } from '../entities/Note';
<<<<<<< HEAD
import { HydraTrainee } from '../../../gambit-client/entities/HydraTrainee';
=======
import { GambitTrainee } from '../../../gambit-client/entities/GambitTrainee';
>>>>>>> 8badc09e6717c61cf339c7db8217d5ce1e3a9aef

@Pipe({
  name: 'noteByTraineeByWeek'
})
export class NoteByTraineeByWeekPipe implements PipeTransform {

  transform(value: Note[], trainee: GambitTrainee, week: number ): Note {

    const n = value.filter( (note) => {

        return (note.type === 'TRAINEE' && note.trainee != null &&
          note.trainee.traineeId === trainee.traineeId && Number(note.week) === Number(week));
      })[0];

      if (n != null) {
        return n;
      } else {
        return new Note();
      }

  }

}
