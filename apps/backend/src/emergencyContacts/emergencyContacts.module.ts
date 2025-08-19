import { Module } from "@nestjs/common";
import { EmergencyContactsController } from "./emergencyContacts.controller";
import { EmergencyContactsService } from "./emergencyContacts.service";
import { EmergencyContactSchema } from "../schemas/emergencyContact.schema";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
    imports: [MongooseModule.forFeature([{ name: 'EmergencyContact', schema: EmergencyContactSchema }])],
    controllers: [EmergencyContactsController],
    providers: [EmergencyContactsService],
    exports: [EmergencyContactsService],
})
export class EmergencyContactsModule {}
