import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeORMConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1mesamark1',
    database: 'boardproject',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true // change to false for production!! otherwise lose data..
}