import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite', // if you use mysql or similar, you may need to pass also
    // username: 'mrMistr'
    // password: 'asdd34' etc
    database: 'db.sqlite',
    entities: ['dist/**/*.entity.js'],
    synchronize: true // don't use in production! it deletes/overwrites previous db file. Use 'migrations' for production
  }), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
