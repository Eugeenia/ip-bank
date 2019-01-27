import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { TokensService } from './tokens.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AutentificateInterceptor implements HttpInterceptor{
    constructor(private token: TokensService){}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const token = this.token.getToken();
        return next.handle(req.clone({ headers: req.headers.append('Authorization', token) }));
    }
}
