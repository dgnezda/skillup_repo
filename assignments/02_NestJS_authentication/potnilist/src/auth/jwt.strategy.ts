import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        // the constructor actually already validates the user
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'SECRET' // protect this, move to env var!
        })
    }

    async validate(payload: any) {
        // returns the object, doesn't validate anything (already in constructor)
        // maybe:
        // const user = await this.usersService.getById(payload.sub);
        return {
            id: payload.sub,
            name: payload.name,
            //...user
        };
    }
}