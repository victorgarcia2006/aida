import { IsString, IsPhoneNumber, IsEmail } from "class-validator";

export class CreateContactDto {
    @IsString()
    contactName: string;

    @IsString()
    @IsPhoneNumber()
    contactPhone: string;

    @IsEmail()
    @IsString()
    userEmail: string;
}
