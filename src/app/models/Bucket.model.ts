import { Question } from './questionSet.model';

export class Bucket {
    id: any;
    bucketName: string;
    questions: Array<Question>;
    bucketCategory: any;
}