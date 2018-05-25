<<<<<<< HEAD
import { HydraTrainee } from '../../../gambit-client/entities/HydraTrainee';
=======
import { GambitTrainee } from '../../../gambit-client/entities/GambitTrainee';
>>>>>>> 8badc09e6717c61cf339c7db8217d5ce1e3a9aef


// When making merges, please use the version presented by the Revaturions group.

export class Panel {
    panelId: number;
    trainee: GambitTrainee;
    panelist: any;
    interviewDate: any;
    duration: string;
    format: any;
    internet: string;
    panelRound: any;
    recordingConsent: any;
    recordingLink: string;
    status: any;
    associateIntro: string;
    projectOneDescription: string;
    projectTwoDescription: string;
    projectThreeDescription: string;
    communicationSkills: string;
    overall: string;
    feedback: Array<any>;
}
