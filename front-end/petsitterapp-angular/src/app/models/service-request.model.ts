import { Pet } from "./pet.model";
import { User } from "./user.model";

export class ServiceRequest {
    
    id: number;
    dateCreated: string;
    status: string;
    description: string;
    replyMessage: string;
    
    pet: Pet;
    sitter: User;

}
