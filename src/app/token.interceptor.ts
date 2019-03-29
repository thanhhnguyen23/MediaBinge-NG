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
 */
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor() {
        console.log('TokenInterceptor constructed');
    }
    url = 'http://mediabingeeb-env-1.2dmqmp7wnb.us-east-1.elasticbeanstalk.com';
    // url='http://localhost:8080/MediaBinge';
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('HTTP request intercepted!');
        let token = localStorage.getItem('mb-jwt');

        console.log(request.url== this.url+'/login');

        console.log(token);
        if((request.url==this.url+'/login')||(request.url==this.url+'/users/register'))
        {
        request = request.clone({
            setHeaders: {
                'Content-Type': 'application/json'
            }

        });
         }
         else if(token)
         {
            request = request.clone({
                setHeaders: {
                    'Content-Type': 'application/json',
                     'Authorization':token

                }

            });
         }
        console.log('Sending HTTP request to HttpHandler')
        return next.handle(request);
    }
}
