import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class SignUpRequest {
  @IsNotEmpty()
  @ApiProperty({required: true})
  username: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({required:true})
  email:string;

  @IsNotEmpty()
  @ApiProperty({required: true})
  password: string;

  
}