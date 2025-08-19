import { IsString, IsPhoneNumber, IsEmail } from "class-validator";

export class UpdateContactDto {
    @IsString()
    contactName: string;

    @IsString()
    @IsPhoneNumber()
    contactPhone: string;

    @IsEmail()
    @IsString()
    userEmail: string;
}
