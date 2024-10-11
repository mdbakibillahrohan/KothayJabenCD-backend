import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1728652858759 implements MigrationInterface {
    name = 'InitialMigration1728652858759'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`UserType\` (\`UserTypeId\` int NOT NULL AUTO_INCREMENT, \`UserTypeName\` varchar(255) NOT NULL, \`CreatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`UserTypeId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`UserTypeMapper\` (\`UserTypeMapperId\` int NOT NULL AUTO_INCREMENT, \`UserId\` int NULL, \`UserTypeId\` int NULL, PRIMARY KEY (\`UserTypeMapperId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`AddressType\` (\`AddressTypeId\` int NOT NULL AUTO_INCREMENT, \`AddressTypeName\` varchar(255) NOT NULL, \`CreatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`CreatedBy\` int NOT NULL, \`UpdatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`UpdatedBy\` int NOT NULL, PRIMARY KEY (\`AddressTypeId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Country\` (\`CountryId\` int NOT NULL AUTO_INCREMENT, \`CountryName\` varchar(255) NOT NULL, PRIMARY KEY (\`CountryId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Division\` (\`DivisionId\` int NOT NULL AUTO_INCREMENT, \`DivisionName\` varchar(255) NOT NULL, PRIMARY KEY (\`DivisionId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`District\` (\`DistrictId\` int NOT NULL AUTO_INCREMENT, \`DistrictName\` varchar(255) NOT NULL, PRIMARY KEY (\`DistrictId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`UserAddress\` (\`UserAddressId\` int NOT NULL AUTO_INCREMENT, \`StreetAddress1\` varchar(255) NOT NULL, \`StreetAddress2\` varchar(255) NOT NULL, \`PostCode\` varchar(255) NOT NULL, \`CityName\` varchar(255) NOT NULL, \`AddessTypeId\` int NULL, \`UserId\` int NULL, \`CountryId\` int NULL, \`DivisionId\` int NULL, \`DistrictId\` int NULL, PRIMARY KEY (\`UserAddressId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`VehicleType\` (\`TransportTypeId\` int NOT NULL AUTO_INCREMENT, \`TransportTypeName\` varchar(255) NOT NULL, \`CreatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`CreatedBy\` int NOT NULL, \`UpdatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`UpdatedBy\` int NOT NULL, PRIMARY KEY (\`TransportTypeId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`UserVehicleInfo\` (\`UserVehicleInfoId\` int NOT NULL AUTO_INCREMENT, \`LicenseNo\` varchar(255) NOT NULL, \`VehicleModel\` varchar(255) NOT NULL, \`VehiclePhoto\` varchar(255) NOT NULL, \`Details\` varchar(255) NOT NULL, \`VehicleTypeId\` int NULL, \`UserId\` int NULL, PRIMARY KEY (\`UserVehicleInfoId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`UserDriverInfo\` (\`UserDriverInfoId\` int NOT NULL AUTO_INCREMENT, \`DrivingLicenseNo\` varchar(255) NOT NULL, \`LicenseFrontPhoto\` varchar(255) NOT NULL, \`LicenseBackPhoto\` varchar(255) NOT NULL, \`AcknowledgementSlip\` varchar(255) NOT NULL, \`UserId\` int NULL, PRIMARY KEY (\`UserDriverInfoId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`UserSellerInfo\` (\`UserSellerInfoId\` int NOT NULL AUTO_INCREMENT, \`ShopName\` varchar(255) NOT NULL, \`ShopAddress\` varchar(255) NOT NULL, \`ShopLogo\` varchar(255) NOT NULL, \`ShopPhoto\` varchar(255) NOT NULL, \`UserId\` int NULL, PRIMARY KEY (\`UserSellerInfoId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`UserNidInfo\` (\`UserNidInfoId\` int NOT NULL AUTO_INCREMENT, \`NidNo\` varchar(255) NOT NULL, \`NidFrontPhoto\` varchar(255) NOT NULL, \`NidBackPhoto\` varchar(255) NOT NULL, \`UserId\` int NULL, PRIMARY KEY (\`UserNidInfoId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Gender\` (\`GenderId\` int NOT NULL AUTO_INCREMENT, \`GenderName\` varchar(255) NOT NULL, PRIMARY KEY (\`GenderId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Religion\` (\`ReligionId\` int NOT NULL AUTO_INCREMENT, \`ReligionName\` varchar(255) NOT NULL, PRIMARY KEY (\`ReligionId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`UserPersonalInfo\` (\`UserPersonalInfoId\` int NOT NULL AUTO_INCREMENT, \`Name\` varchar(255) NOT NULL, \`DateOfBirth\` datetime NOT NULL, \`Image\` varchar(255) NOT NULL, \`UserId\` int NULL, \`GenderId\` int NULL, \`ReligionId\` int NULL, UNIQUE INDEX \`REL_78e4cbc04be5ee7747fadf726a\` (\`UserId\`), PRIMARY KEY (\`UserPersonalInfoId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Users\` (\`UserId\` int NOT NULL AUTO_INCREMENT, \`UserName\` varchar(255) NOT NULL, \`Email\` varchar(255) NOT NULL, \`MobileNo\` varchar(255) NOT NULL, \`Password\` varchar(255) NOT NULL, \`CreatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`UserId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`UserTypeMapper\` ADD CONSTRAINT \`FK_96efaf8a434f3f9b6d3c80ea019\` FOREIGN KEY (\`UserId\`) REFERENCES \`Users\`(\`UserId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`UserTypeMapper\` ADD CONSTRAINT \`FK_4a2e0714a4320be8072edb02c64\` FOREIGN KEY (\`UserTypeId\`) REFERENCES \`UserType\`(\`UserTypeId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`UserAddress\` ADD CONSTRAINT \`FK_307db3790fb7024b52bc4e83a2c\` FOREIGN KEY (\`AddessTypeId\`) REFERENCES \`AddressType\`(\`AddressTypeId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`UserAddress\` ADD CONSTRAINT \`FK_15c9a1af0c6b6f063f9f2235c9a\` FOREIGN KEY (\`UserId\`) REFERENCES \`Users\`(\`UserId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`UserAddress\` ADD CONSTRAINT \`FK_fde79fa7a01c7b8acb0cbec964e\` FOREIGN KEY (\`CountryId\`) REFERENCES \`Country\`(\`CountryId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`UserAddress\` ADD CONSTRAINT \`FK_e5c43d77bb06dd6368bbad21a51\` FOREIGN KEY (\`DivisionId\`) REFERENCES \`Division\`(\`DivisionId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`UserAddress\` ADD CONSTRAINT \`FK_9567f0b875f520d6a6dc85b365b\` FOREIGN KEY (\`DistrictId\`) REFERENCES \`District\`(\`DistrictId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`UserVehicleInfo\` ADD CONSTRAINT \`FK_80a5df582b934a68ba37a423d38\` FOREIGN KEY (\`VehicleTypeId\`) REFERENCES \`VehicleType\`(\`TransportTypeId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`UserVehicleInfo\` ADD CONSTRAINT \`FK_b43fff8d7d74ead0bf12d983958\` FOREIGN KEY (\`UserId\`) REFERENCES \`Users\`(\`UserId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`UserDriverInfo\` ADD CONSTRAINT \`FK_e7f19b5df6dbe839803eecd6029\` FOREIGN KEY (\`UserId\`) REFERENCES \`Users\`(\`UserId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`UserSellerInfo\` ADD CONSTRAINT \`FK_d7cebfee35747c9bfd74f8c3bfc\` FOREIGN KEY (\`UserId\`) REFERENCES \`Users\`(\`UserId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`UserNidInfo\` ADD CONSTRAINT \`FK_9e9941711e23a16c16e48fb3011\` FOREIGN KEY (\`UserId\`) REFERENCES \`Users\`(\`UserId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`UserPersonalInfo\` ADD CONSTRAINT \`FK_78e4cbc04be5ee7747fadf726ac\` FOREIGN KEY (\`UserId\`) REFERENCES \`Users\`(\`UserId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`UserPersonalInfo\` ADD CONSTRAINT \`FK_bc491710fc66e8425f159293595\` FOREIGN KEY (\`GenderId\`) REFERENCES \`Gender\`(\`GenderId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`UserPersonalInfo\` ADD CONSTRAINT \`FK_43b8f66b858f0c4426991d5f3fd\` FOREIGN KEY (\`ReligionId\`) REFERENCES \`Religion\`(\`ReligionId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`UserPersonalInfo\` DROP FOREIGN KEY \`FK_43b8f66b858f0c4426991d5f3fd\``);
        await queryRunner.query(`ALTER TABLE \`UserPersonalInfo\` DROP FOREIGN KEY \`FK_bc491710fc66e8425f159293595\``);
        await queryRunner.query(`ALTER TABLE \`UserPersonalInfo\` DROP FOREIGN KEY \`FK_78e4cbc04be5ee7747fadf726ac\``);
        await queryRunner.query(`ALTER TABLE \`UserNidInfo\` DROP FOREIGN KEY \`FK_9e9941711e23a16c16e48fb3011\``);
        await queryRunner.query(`ALTER TABLE \`UserSellerInfo\` DROP FOREIGN KEY \`FK_d7cebfee35747c9bfd74f8c3bfc\``);
        await queryRunner.query(`ALTER TABLE \`UserDriverInfo\` DROP FOREIGN KEY \`FK_e7f19b5df6dbe839803eecd6029\``);
        await queryRunner.query(`ALTER TABLE \`UserVehicleInfo\` DROP FOREIGN KEY \`FK_b43fff8d7d74ead0bf12d983958\``);
        await queryRunner.query(`ALTER TABLE \`UserVehicleInfo\` DROP FOREIGN KEY \`FK_80a5df582b934a68ba37a423d38\``);
        await queryRunner.query(`ALTER TABLE \`UserAddress\` DROP FOREIGN KEY \`FK_9567f0b875f520d6a6dc85b365b\``);
        await queryRunner.query(`ALTER TABLE \`UserAddress\` DROP FOREIGN KEY \`FK_e5c43d77bb06dd6368bbad21a51\``);
        await queryRunner.query(`ALTER TABLE \`UserAddress\` DROP FOREIGN KEY \`FK_fde79fa7a01c7b8acb0cbec964e\``);
        await queryRunner.query(`ALTER TABLE \`UserAddress\` DROP FOREIGN KEY \`FK_15c9a1af0c6b6f063f9f2235c9a\``);
        await queryRunner.query(`ALTER TABLE \`UserAddress\` DROP FOREIGN KEY \`FK_307db3790fb7024b52bc4e83a2c\``);
        await queryRunner.query(`ALTER TABLE \`UserTypeMapper\` DROP FOREIGN KEY \`FK_4a2e0714a4320be8072edb02c64\``);
        await queryRunner.query(`ALTER TABLE \`UserTypeMapper\` DROP FOREIGN KEY \`FK_96efaf8a434f3f9b6d3c80ea019\``);
        await queryRunner.query(`DROP TABLE \`Users\``);
        await queryRunner.query(`DROP INDEX \`REL_78e4cbc04be5ee7747fadf726a\` ON \`UserPersonalInfo\``);
        await queryRunner.query(`DROP TABLE \`UserPersonalInfo\``);
        await queryRunner.query(`DROP TABLE \`Religion\``);
        await queryRunner.query(`DROP TABLE \`Gender\``);
        await queryRunner.query(`DROP TABLE \`UserNidInfo\``);
        await queryRunner.query(`DROP TABLE \`UserSellerInfo\``);
        await queryRunner.query(`DROP TABLE \`UserDriverInfo\``);
        await queryRunner.query(`DROP TABLE \`UserVehicleInfo\``);
        await queryRunner.query(`DROP TABLE \`VehicleType\``);
        await queryRunner.query(`DROP TABLE \`UserAddress\``);
        await queryRunner.query(`DROP TABLE \`District\``);
        await queryRunner.query(`DROP TABLE \`Division\``);
        await queryRunner.query(`DROP TABLE \`Country\``);
        await queryRunner.query(`DROP TABLE \`AddressType\``);
        await queryRunner.query(`DROP TABLE \`UserTypeMapper\``);
        await queryRunner.query(`DROP TABLE \`UserType\``);
    }

}
