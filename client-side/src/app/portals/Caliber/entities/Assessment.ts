<<<<<<< HEAD
import { HydraBatch } from '../../../gambit-client/entities/HydraBatch';
=======
import { GambitBatch } from '../../../gambit-client/entities/GambitBatch';
>>>>>>> 8badc09e6717c61cf339c7db8217d5ce1e3a9aef
import { GambitSkill } from '../../../gambit-client/entities/GambitSkill';

export class Assessment {
    assessmentId: number;
    title: string;
    batch: GambitBatch;
    rawScore: number;
    type: string;
    week: number;
    skill: GambitSkill;
}
