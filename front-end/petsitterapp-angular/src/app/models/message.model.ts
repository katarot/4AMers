import { User } from './user.model';

export class Message {
    id ?: number;
    subject: string;
    message: string;
    dateSent: string;
    sender: User;
    receiver: User;
}