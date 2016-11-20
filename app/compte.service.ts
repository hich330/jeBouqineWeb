import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Compte} from "./compte";

 
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/Rx';


@Injectable()
export class CompteService{
    private UrlWebApi = 'https://jebouquine-webrest.herokuapp.com';
    private  http:Http;
    //public loggedIn = false;

    isLoggedIn:boolean = false;
    _compte:Compte = new Compte();
    public loggedIn : Subject<boolean> = new BehaviorSubject<boolean>(this.isLoggedIn);
    public Compte : Subject<Compte> = new BehaviorSubject<Compte>(this._compte);

    constructor(http:Http) {
        this.http = http;
    }
    
    CreerNouveauCompte(compte:Compte)
    {
        let headers      = new Headers({ 'Content-Type':'application/json' });
        let options       = new RequestOptions({ headers: headers });

        this.http.post(this.UrlWebApi + '/Compte/Creer',compte, options)
       .map((res:Response) => {
        res.json();
           console.log('res',res);
        })
       .subscribe(p => {
            console.log('Compte a été enregistré');
       }, err => {
            console.log('Erreur de sauvegarde',err);
       });

    }

    Login(user:string,password:string)
    { 
        this.isLoggedIn = false;
        if (user && password) {
            var creds = "Email=" + user + "&Password=" + password;

            var headers = new Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');

           return this.http.post(this.UrlWebApi +'/Login', creds, {
                headers: headers
            })
                .map(res => res.json());



        }
        //console.log(this.loggedIn);
       // return this.isLoggedIn;
    }
}