import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Fincas } from './fincas';
import { Ganado } from './ganado';
import { Observable } from 'rxjs';

@Injectable({
providedIn: 'root'
})

export class ApiService {

    redirectUrl: string | undefined;
    baseUrl:string = "http://localhost/php/";
    @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
    constructor(private httpClient : HttpClient, private http :HttpClient) { }

    //Login
    public userlogin(email: any, password: any) {
        return this.httpClient.post<any>(this.baseUrl + '/login.php', { email, password })
        .pipe(map(Users => {
        this.setToken(Users[0].name);
        this.setidexplotationUser(Users[0].idexplotation);
        this.getLoggedInName.emit(true);
        return Users;
        }));
    }

    //Register
    public userregistration(name: any,surname: any,email: any,password: any,idexplotation: any) {
        return this.httpClient.post<any>(this.baseUrl + '/register.php', { name,surname,email,password,idexplotation })
        .pipe(map(Users => {
        return Users;
        }));
    }

    //Fincas
    listfinca(idexplotation: any) {
        return this.http.get<Fincas[]>(this.baseUrl+'listfinca.php?idexplotation=' + idexplotation);
      } 

    public addfinca(idfinca: any,state: any,use: any,idexplotation: any) {
        return this.httpClient.post<any>(this.baseUrl + '/addfinca.php', { idfinca,state,use,idexplotation })
        .pipe(map(Fincas => {
        return Fincas;
        }));
    }

    deletefinca(idfinca: any) {
        return this.http.delete(this.baseUrl+'deletefinca.php?idfinca=' + idfinca);
    } 

    public editfinca(idfinca: any,state: any,use: any,idexplotation: any) {
        return this.httpClient.post<any>(this.baseUrl + '/editfinca2.php', { idfinca,state,use,idexplotation })
        .pipe(map(Fincas => {
        return Fincas;
        }));
    }


    getSingleFinca(idfinca:any) {
            return this.http.get<Fincas[]>(this.baseUrl+'listsinglefinca.php?idfinca=' + idfinca);
    } 


    //Ganado
    listganado(idexplotation: any) {
        return this.http.get<Ganado[]>(this.baseUrl+'listganado.php?idexplotation=' + idexplotation);
      } 

    public addganado(idganado: any,type: any,gender: any,birth: any,death: any,group: any,idexplotation: any) {
        return this.httpClient.post<any>(this.baseUrl + '/addganado.php', { idganado,type,gender,birth,death,group,idexplotation })
        .pipe(map(Ganado => {
        return Ganado;
        }));
    }

    deleteganado(idganado: any) {
        return this.http.delete(this.baseUrl+'deleteganado.php?idganado=' + idganado);
    } 


    getSingleGanado(idganado:any) {
            return this.http.get<Ganado[]>(this.baseUrl+'listsingleganado.php?idganado=' + idganado);
    } 


    //token
    setToken(token: string) {
        localStorage.setItem('token', token);
    }
    getToken() {
        return localStorage.getItem('token');
    }
    deleteToken() {
        localStorage.removeItem('token');
    }
    isLoggedIn() {
        const usertoken = this.getToken();
        if (usertoken != null) {
            return true
        }
        return false;
    }



        //idexplotationUser
        setidexplotationUser(idexplotationUser: string) {
            localStorage.setItem('idexplotationUser', idexplotationUser);
        }
        getidexplotationUser() {
            return localStorage.getItem('idexplotationUser');
        }
        deleteidexplotationUser() {
            localStorage.removeItem('idexplotationUser');
        }
}