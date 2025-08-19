import { Injectable } from "@nestjs/common";
import { EmergencyContact } from "../schemas/emergencyContact.schema";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { CreateContactDto } from "./dto/create-contact.dto";
import { UpdateContactDto } from "./dto/update-contact.dto";

@Injectable()
export class EmergencyContactsService {
    constructor(
        @InjectModel(EmergencyContact.name) private emergencyContactModel: Model<EmergencyContact>
    ){}

    createContact(createContactDto: CreateContactDto) {
        const newContact = new this.emergencyContactModel(createContactDto);
        return newContact.save();
    }
    
    getContactsByUserEmail(email: string) {
        return this.emergencyContactModel.find({ userEmail: email.toLowerCase() });
    }
    
    updateContactById(email: string, updateContactDto: UpdateContactDto) {
        return this.emergencyContactModel.findOneAndUpdate({ userEmail: email.toLowerCase() }, updateContactDto, { new: true });
    }
    
    deleteContactById(email: string) {
        return this.emergencyContactModel.findOneAndDelete({ userEmail: email.toLowerCase() });
    }
}