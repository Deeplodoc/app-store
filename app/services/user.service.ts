import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response, Headers } from '@angular/http';
import { User } from '../models/user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService{
    constructor(private http: Http){}

    login(login: string, password: string): void{
        this.http.get('http://localhost:0000/account/login?login=' + login + '&password=' + password)
        .map((response: Response) => {
            console.log(response);
        })
        .catch((error: any)=> {
            return Observable.throw(error)
        });
    }

    register(item: User): void{
        let data: string = JSON.stringify(item);
        let headers=new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        this.http.post('http://localhost:0000/account/register', data, {headers: headers})
        .map((response: Response) => {
            console.log(response);
        })
        .catch((error: any) => {
            return Observable.throw(error);
        });
    }

    forgotPassword(code: string): Observable<User>{
        return this.http.get('http://localhost:0000/account/getUserByForgotCode?code=' + code)
        .map((response: Response) => {
            return response.json();
        })
        .catch((error: any)=> {
            return Observable.throw(error)
        });
    }

    confirm(userId: string, code: string): void{
        this.http.get('http://localhost:0000/account/confirm?userId=' + userId + '&code=' + code)
        .map((response: Response) => {
            console.log(response);
        })
        .catch((error: any)=> {
            return Observable.throw(error)
        });
    }

    resetPassword(email: string, newPassword: string): void{
        this.http.get('http://localhost:0000/account/resetPassword?email=' + email + '&newPassword=' + newPassword)
        .map((response: Response) => {
            console.log(response);
        })
        .catch((error: any)=> {
            return Observable.throw(error)
        });
    }

    editUser(item: User): void{
        let data: string = JSON.stringify(item);
        let headers=new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        this.http.post('http://localhost:0000/account/editUser', data, {headers: headers})
        .map((response: Response) => {
            console.log(response);
        })
        .catch((error: any) => {
            return Observable.throw(error);
        });
    }
}