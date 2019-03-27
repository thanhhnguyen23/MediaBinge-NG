import { Injectable, OnDestroy } from '@angular/core';
import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { LoginService } from './login.service';
import { environment } from '../environments/environment';


/**
 * TokenInterceptor
 *
 *      An HTTP Interceptor that attaches JWT tokens to requests to the backend API
 *      within an Authorization HTTP header.
 *
 * @author Wezley Singleton
 */
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor() {
        console.log('TokenInterceptor constructed');
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('HTTP request intercepted!');
        let token = localStorage.getItem('mb-jwt');
        console.log(token);
        request = request.clone({
            setHeaders: {
                'Content-Type': 'application/json'   
            }
    
        });
        // if (request.url.indexOf('http://localhost:8080/MediaBinge/login')) {
        //     console.log('Attaching JWT to Authorization header...')
        //     request = request.clone({
        //         setHeaders: {
        //             'Content-Type': 'application/json'
                    
        //         }
        
        //     });
        //     console.log('JWT attached!');
        // }
        console.log('Sending HTTP request to HttpHandler')
        return next.handle(request);
    }
}
