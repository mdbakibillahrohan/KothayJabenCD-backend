import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { Users } from './entities/user/users.entity';
import { UserPersonalInfo } from './entities/user/user-personal-info.entity';
import { UserAddress } from './entities/user/user-address.entity';
import { AddressType } from './entities/user/address-type.entity';
import { UserVehicleInfo } from './entities/user/user-vehicle-info.entity';
import { UserDriverInfo } from './entities/user/user-driver-info.entity';
import { UserSellerInfo } from './entities/user/user-seller-info.entity';
import { UserTypeMapper } from './entities/user/user-type-mapper.entity';
import { UserNidInfo } from './entities/user/user-nid-info.entity';
import { UserType } from './entities/user/user-type.entity';
import { Gender } from './entities/master/gender.entity';
import { Religion } from './entities/master/religion.entity';
import { Country } from './entities/master/country.entity';
import { Division } from './entities/master/division.entity';
import { District } from './entities/master/district.entity';
import { VehicleType } from './entities/master/vehicle-type.entity';

const entities = [
  Users,
  UserPersonalInfo,
  UserAddress,
  AddressType,
  UserVehicleInfo,
  UserDriverInfo,
  UserSellerInfo,
  UserTypeMapper,
  UserType,
  UserNidInfo,
  Gender,
  Religion,
  Country,
  Division,
  District,
  VehicleType
]

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), AuthModule, UserModule,...entities],
  controllers: [AppController],
  providers: [AppService],
  exports: [...entities]
})
export class AppModule { }
