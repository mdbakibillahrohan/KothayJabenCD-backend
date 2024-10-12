import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEmpty, IsNotEmpty, validate, Validate } from 'class-validator';
import { CustomEmailValidation } from 'src/modules/auth/custom-validator/custom-email-validation';
import { CustomUserNameValidation } from 'src/modules/auth/custom-validator/custom-username-validation';


export class UserPersonalInfoDto{
  @IsEmpty()
  @ApiProperty({type:"number"})
  userId:number;

  @IsNotEmpty()
  @ApiProperty({required: true})
  name:string;

  @IsNotEmpty()
  @ApiProperty({required: true})
  dateOfBirth:Date;

  @ApiProperty()
  image:string;

  @IsNotEmpty()
  @ApiProperty({required: true})
  genderId:number;
  
  @IsNotEmpty()
  @ApiProperty({required: true})
  religionId:number;
}

export class UserAddressDto{

  @IsEmpty()
  @ApiProperty({type:"number"})
  userId:number;

  @IsEmpty()
  @ApiProperty()
  streetAddress1:string;

  @IsEmpty()
  @ApiProperty()
  streetAddress2:string;

  @IsEmpty()
  @ApiProperty()
  postCode:string;

  @IsEmpty()
  @ApiProperty()
  cityName:string;

  @IsNotEmpty()
  @ApiProperty({required: true, type:"number"})
  addressTypeId:number

  @IsNotEmpty()
  @ApiProperty({required: true, type:"number"})
  countryId:number

  @IsNotEmpty()
  @ApiProperty({required: true, type:"number"})
  divisionId:number

  @IsNotEmpty()
  @ApiProperty({required: true, type:"number"})
  districtId:number

}

export class UserNIDInfoDto{
  @IsEmpty()
  @ApiProperty({required: false, type:"number"})
  userId:number;

  @IsNotEmpty()
  @ApiProperty({type:"string", required: true})
  nidNo:string;

  @IsNotEmpty()
  @ApiProperty({type:"string", required: true})
  nidFrontPhoto:string;

  @IsNotEmpty()
  @ApiProperty({type:"string", required: true})
  nidBackPhoto:string;

}

export class SignUpDto {
  @IsNotEmpty()
  @Validate(CustomUserNameValidation)
  @ApiProperty({required: true})
  username: string;

  @IsNotEmpty()
  @IsEmail()
  @Validate(CustomEmailValidation)
  @ApiProperty({required:true})
  email:string;

  @IsNotEmpty()
  @ApiProperty({required: true})
  password: string;

  @IsNotEmpty()
  @ApiProperty({required: true})
  mobileNo:string;

  @IsNotEmpty()
  @ApiProperty({required: true})
  userTypeIds:number[]

  @IsNotEmpty()
  @ApiProperty({required: true})
  userPersonalInfo:UserPersonalInfoDto;

  @IsNotEmpty()
  @ApiProperty()
  userAddress:UserAddressDto;

  @IsNotEmpty()
  @ApiProperty()
  userNidInfo: UserNIDInfoDto
  
}



