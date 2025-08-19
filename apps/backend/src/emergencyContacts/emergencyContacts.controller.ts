import { Controller, Post, Get, Put, Delete, Body, Param, HttpCode, HttpException } from "@nestjs/common";
import { CreateContactDto } from "./dto/create-contact.dto";
import { UpdateContactDto } from "./dto/update-contact.dto";
import { EmergencyContactsService } from "./emergencyContacts.service";

@Controller('contacts')
export class EmergencyContactsController {
    constructor(
        private emergencyContactsService: EmergencyContactsService
    ){}

    @Post()
    @HttpCode(201)
    async handleCreateContact(
        @Body() createContactDto: CreateContactDto
    ) {
        try {
            const newContact = await this.emergencyContactsService.createContact(createContactDto);
            return newContact;
        } catch (error) {
            throw new HttpException(error.message, error.status); 
        }

    }

    @Get('user/:email')
    @HttpCode(200)
    handleGetContacts(
        @Param('email') email: string
    ) {
        try {
            const contacts = this.emergencyContactsService.getContactsByUserEmail(email);
            return contacts;
        } catch (error) {
            throw new HttpException(error.message, error.status); 
        }
    }

    @Put(':id')
    @HttpCode(200)
    handleUpdateContact(
        @Param('id') id: string,
        @Body() updateContactDto: UpdateContactDto
    ) {
        try {
            const updatedContact = this.emergencyContactsService.updateContactById(id, updateContactDto);
            return updatedContact;
        } catch (error) {
            throw new HttpException(error.message, error.status); 
        }
    }

    @Delete(':id')
    @HttpCode(200)
    handleDeleteContact(
        @Param('id') id: string
    ) {
        try {
            const deletedContact = this.emergencyContactsService.deleteContactById(id);
            return deletedContact;
        } catch (error) {
            throw new HttpException(error.message, error.status); 
        }
    }
}