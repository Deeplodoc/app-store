import { Injectable, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { RequestOptions } from '@angular/http';
import { Response, Headers } from '@angular/http';
import { User } from '../models/user';
import { LoginModel } from '../models/login.model';
import { LoginResponseModel } from '../models/login.response.model';
import { SessionName } from '../enums/session.name';
import { SessionService } from '../services/session.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService{
    @Output() loginUser = new EventEmitter<LoginResponseModel>();

    constructor(private http: Http,
    private sessionService: SessionService){}

    login(item: LoginModel): Observable<LoginResponseModel>{
        let data: string = JSON.stringify(item);
        let options = this.getOptionsForPost();
        return this.http.post('http://localhost:53791/account/login', data, options)
        .map((response: Response) => {
             let loginResponse: LoginResponseModel = response.json();
            this.loginUser.emit(loginResponse);
            return loginResponse;
        })
        .catch((error: any) => {
            return Observable.throw(error)
        });
    }

    register(item: User): void{
        let data: string = JSON.stringify(item);
        let options = this.getOptionsForPost();
        this.http.post('http://localhost:53791/account/register', data, options)
        .map((response: Response) => {
            console.log(response);
        })
        .catch((error: any) => {
            console.log(error);
            return Observable.throw(error);
        }).subscribe();
    }

    forgotPassword(email: string): Observable<boolean>{
        return this.http.get('http://localhost:53791/account/forgotPassword?email=' + email)
        .map((response: Response) => {
            return true;
        })
        .catch((error: any)=> {
            return Observable.throw(error)
        });
    }

    confirm(userId: string, code: string): Observable<LoginResponseModel>{
        return this.http.get('http://localhost:53791/account/confirm?userId=' + userId + '&code=' + code)
        .map((response: Response) => {
            console.log(response);
            return response.json();
        })
        .catch((error: any)=> {
            return Observable.throw(error)
        });
    }

    sendMailConfirm(userId: string): Observable<boolean>{
        return this.http.get('http://localhost:53791/account/sendConfirm?userId=' + userId)
        .map((response: Response) => {
            return true;
        })
        .catch((error: any)=> {
            return Observable.throw(error)
        });
    }

    resetPassword(email: string, code: string, newPassword: string): Observable<boolean>{
        return this.http.get('http://localhost:53791/account/resetPassword?email=' + email + '&code=' + code + '&newPassword=' + newPassword)
        .map((response: Response) => {
            return true;
        })
        .catch((error: any)=> {
            return Observable.throw(error);
        });
    }

    editUser(item: User): void{
        let data: string = JSON.stringify(item);
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        this.http.post('http://localhost:0000/account/editUser', data, {headers: headers})
        .map((response: Response) => {
            console.log(response);
        })
        .catch((error: any) => {
            return Observable.throw(error);
        });
    }

    getUserById(userId: string): Observable<User>{
        let loginModel: LoginResponseModel = this.sessionService.get(SessionName.Authorize);
        if(loginModel != null && loginModel != undefined){
            let headers = new Headers({ 'Authorization': 'Bearer ' + loginModel.access_token });
            let options = new RequestOptions({ headers: headers });

            return this.http.get('http://localhost:53791/account/getUserById?userId=' + userId, options)
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: any) => {
                return Observable.throw(error);
            });
        }

        return null;
    }

    private getOptionsForPost(): RequestOptions{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return new RequestOptions({ headers: headers });
    }
}