<<<<<<< HEAD
import { HydraBatch } from '../../../gambit-client/entities/HydraBatch';
=======
import { BatchGambit } from '../../../gambit-client/entities/BatchGambit';
>>>>>>> 8badc09e6717c61cf339c7db8217d5ce1e3a9aef

export class Trainee {
    traineeId: number;
    resourceId: number;
    name: string;
    email: string;
    trainingStatus: string;
    phoneNumber: string;
    skypeId: string;
    profileUrl: string;
    recruiterName: string;
    college: string;
    degree: string;
    major: string;
    techScreenerName: string;
    projectCompletion: string;
    batch: BatchGambit;
}
