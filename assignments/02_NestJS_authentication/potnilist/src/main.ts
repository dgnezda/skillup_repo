import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    session({
      secret: 'keyboard cat', // get from environment variables for production
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 3600000 }, // maxAge is expiration in ms, this nr == 1h / check docs for more info on security with cookies etc
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(3000);
}
bootstrap();
