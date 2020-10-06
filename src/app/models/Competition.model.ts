export class CompetitionTimeSlot{
    startTime: string;
    endTime: string;
}

export class Competition {
    id: any;
    competitionName: string;
    compeStartDate: Date;
    competionEndDate: Date;
    isCompetionPublished: Boolean;
    timeSlot: Array<CompetitionTimeSlot>;
    competitionDuration: Number;
    competitionContactPerson: string;
    competitionPhonenumber: Number
}

