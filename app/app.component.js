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
var panier_service_1 = require('./panier.service');
var compte_service_1 = require("./compte.service");
var compte_1 = require("./compte");
var AppComponent = (function () {
    function AppComponent(panierService, compteService) {
        var _this = this;
        this.panierService = panierService;
        this.compteService = compteService;
        this.PanierLivre = [];
        this.LoggedIn = true;
        this.Compte = new compte_1.Compte();
        this.PanierLivre = this.panierService.Livres;
        //  console.log('okk',compteService.loggedIn);
        //   this.LoggedIn = compteService.loggedIn;
        this.compteService.loggedIn
            .subscribe(function (data) {
            _this.LoggedIn = data;
        });
        this.compteService.Compte
            .subscribe(function (data) {
            console.log(data.Nom, data.Prenom);
            _this.Compte = data;
        });
    }
    AppComponent.prototype.CalculerNombreTotalLivre = function () {
        var numbre = 0;
        for (var _i = 0, _a = this.PanierLivre; _i < _a.length; _i++) {
            var item = _a[_i];
            numbre = numbre + +item.Quantite;
        }
        return numbre;
    };
    AppComponent.prototype.CalculerMontantTotal = function () {
        var numbre = 0;
        for (var _i = 0, _a = this.PanierLivre; _i < _a.length; _i++) {
            var item = _a[_i];
            numbre = numbre + (+item.Quantite * +item.Prix);
        }
        return numbre;
    };
    AppComponent.prototype.SupprimerLivre = function (livre) {
        this.panierService.SupprimerLivre(livre);
    };
    AppComponent.prototype.clickTogoogleMaps = function (adresse) {
        console.log("Go to Google maps ", adresse);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'je-bouquine',
            templateUrl: "../app/html/index.html",
            styleUrls: ["../Content/app.css"]
        }), 
        __metadata('design:paramtypes', [panier_service_1.PanierService, compte_service_1.CompteService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map