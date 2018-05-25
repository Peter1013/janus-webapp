import { Assessment } from './Assessment';
<<<<<<< HEAD
import { HydraTrainee } from '../../../gambit-client/entities/HydraTrainee';
=======
import { GambitTrainee } from '../../../gambit-client/entities/GambitTrainee';
>>>>>>> 8badc09e6717c61cf339c7db8217d5ce1e3a9aef

export class Grade {
    gradeId: number;
    assessment: Assessment;
    trainee: GambitTrainee;
    dateReceived: any;
    score: number;
}
