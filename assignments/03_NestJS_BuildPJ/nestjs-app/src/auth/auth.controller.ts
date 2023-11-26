import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth.credential.dto';

@Controller('auth')
export class AuthController {

    constructor(
        private authService: AuthService
    ) {}
    
    @Post('signin')
    signIn(@Body(ValidationPipe) authCredentials: AuthCredentialsDto): Promise<{ accessToken: string}> {
        return this.authService.signIn(authCredentials);
    }

    @Post('/signup')
    signUp(@Body(ValidationPipe) authCredentials: AuthCredentialsDto): Promise<void> {
        return this.authService.signUp(authCredentials);
    }

    @Post('/test')
    authTest(@Req() req) {
        console.log('req', req);
    }
}
