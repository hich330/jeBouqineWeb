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
var router_1 = require('@angular/router');
var livres_service_1 = require('./livres.service');
var panier_service_1 = require('./panier.service');
var livre_1 = require("./livre");
var compte_service_1 = require("./compte.service");
var DetailComponent = (function () {
    function DetailComponent(route, livresService, panierService, compteService) {
        var _this = this;
        this.route = route;
        this.livresService = livresService;
        this.panierService = panierService;
        this.compteService = compteService;
        this.Id = "";
        this.Livre = new livre_1.Livre();
        this.birthday = new Date(1988, 3, 15); // April 15, 1988
        this.LoggedIn = true;
        this.compteService.loggedIn
            .subscribe(function (data) {
            _this.LoggedIn = data;
        });
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Id = this.route.snapshot.params['Id'];
        this.livresService.ChercherParId(this.Id)
            .subscribe(function (p) {
            _this.Livre = p;
        }, function (err) {
            console.log(err);
        });
    };
    DetailComponent.prototype.AjouterLivrePanier = function (item) {
        console.log(item);
        this.panierService.AjouterLivre(item);
        console.log(this.panierService.Livres);
    };
    DetailComponent = __decorate([
        core_1.Component({
            selector: 'detail',
            templateUrl: "../app/html/Detail.html"
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, livres_service_1.LivresService, panier_service_1.PanierService, compte_service_1.CompteService])
    ], DetailComponent);
    return DetailComponent;
}());
exports.DetailComponent = DetailComponent;
//# sourceMappingURL=detail.component.js.map