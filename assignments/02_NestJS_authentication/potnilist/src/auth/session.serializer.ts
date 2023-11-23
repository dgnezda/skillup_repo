import { Injectable } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";

@Injectable()
export class SessionSerializer extends PassportSerializer {
    serializeUser(user: any, done: (err: Error, user: any) => void): any {
        // also can do smtn like:    done(null, {id: user.id})
        done(null, user);
    }
    deserializeUser(payload: any, done: (err: Error, payload: string) => void): any {
        // also:    const user = this.userService.findById(payload.id)
        done(null, payload);
    }
}