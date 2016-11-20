"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var compte_1 = require("./compte");
var Rx_1 = require('rxjs/Rx');
var CompteService = (function () {
    function CompteService(http) {
        this.UrlWebApi = 'https://jebouquine-webrest.herokuapp.com';
        //public loggedIn = false;
        this.isLoggedIn = false;
        this._compte = new compte_1.Compte();
        this.loggedIn = new Rx_1.BehaviorSubject(this.isLoggedIn);
        this.Compte = new Rx_1.BehaviorSubject(this._compte);
        this.http = http;
    }
    CompteService.prototype.CreerNouveauCompte = function (compte) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        this.http.post(this.UrlWebApi + '/Compte/Creer', compte, options)
            .map(function (res) {
            res.json();
            console.log('res', res);
        })
            .subscribe(function (p) {
            console.log('Compte a été enregistré');
        }, function (err) {
            console.log('Erreur de sauvegarde', err);
        });
    };
    CompteService.prototype.Login = function (user, password) {
        this.isLoggedIn = false;
        if (user && password) {
            var creds = "Email=" + user + "&Password=" + password;
            var headers = new http_1.Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            return this.http.post(this.UrlWebApi + '/Login', creds, {
                headers: headers
            })
                .map(function (res) { return res.json(); });
        }
        //console.log(this.loggedIn);
        // return this.isLoggedIn;
    };
    CompteService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CompteService);
    return CompteService;
}());
exports.CompteService = CompteService;
//# sourceMappingURL=compte.service.js.map