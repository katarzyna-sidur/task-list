export interface Task {
    title: string;
    isDone: boolean;
    startDate: Date;
    finishDate: Date;
    userId: number;
    properties: string;
    id: number;
}
