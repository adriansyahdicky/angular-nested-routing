import { Injectable } from '@angular/core';
import { CreateUser } from '../data/create-user';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs';
import {
    HttpClient,
    HttpHeaders,
    HttpErrorResponse,
  } from '@angular/common/http';
  import { Router } from '@angular/router';

  @Injectable({
    providedIn: 'root'
  })

  export class AuthService{

    headers = new HttpHeaders().set('Content-Type', 'application/json');
    currentUser = {};

    constructor(private http:HttpClient, public router:Router){}

    signUp(user: CreateUser): Observable<any> {
        let api = '';
        return this.http.post(api, user).
        pipe(catchError(this.handleError));
    }

    getToken(){
        return localStorage.getItem('access_token');
    }

    get isLoggedIn() : boolean {
        let authToken = localStorage.getItem('access_token');
        return authToken != null ? true : false;
    }

    doLogout() {
        let removeToken = localStorage.removeItem('access_token');
        if(removeToken == null){
            this.router.navigate(['login']);
        }
    }

    handleError(error: HttpErrorResponse){
        let msg = '';
        if(error.error instanceof ErrorEvent){
            msg = error.error.message;
        }else{
            msg = `Error code: ${error.status}\nMessage: ${error.message}`;
        }
        return throwError(msg);
    }

  }