import { Pipe, PipeTransform } from '@angular/core';

import { Grade } from '../entities/Grade';
import { Assessment } from '../entities/Assessment';
<<<<<<< HEAD
import { HydraTrainee } from '../../../gambit-client/entities/HydraTrainee';
=======
import { GambitTrainee } from '../../../gambit-client/entities/GambitTrainee';
>>>>>>> 8badc09e6717c61cf339c7db8217d5ce1e3a9aef

@Pipe({
  name: 'gradeByTraineeByAssessment'
})

export class GradeByTraineeByAssessmentPipe implements PipeTransform {

  transform(value: Grade[], trainee: GambitTrainee, assessment: Assessment ): Grade[] {
    return value.filter( (grade) =>
      ( grade.assessment.assessmentId === assessment.assessmentId && grade.trainee.traineeId === trainee.traineeId ) );
  }

}
