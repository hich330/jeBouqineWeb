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
var compte_service_1 = require("./compte.service");
var LivresComponent = (function () {
    function LivresComponent(route, livresService, panierService, compteService) {
        var _this = this;
        this.route = route;
        this.livresService = livresService;
        this.panierService = panierService;
        this.compteService = compteService;
        this.livres = [];
        this.MaxPrix = 0;
        this.LoggedIn = true;
        this.compteService.loggedIn
            .subscribe(function (data) {
            _this.LoggedIn = data;
        });
    }
    LivresComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var category = params['Category'];
            console.log('ngOnInit', category);
            if (category != null) {
                _this.livresService.ChercherParCategorie(category).subscribe(function (p) {
                    _this.livres = p;
                }, function (err) {
                    console.log(err);
                });
            }
            else {
                _this.livresService.RecupererLivres().subscribe(function (p) {
                    _this.livres = p;
                }, function (err) {
                    console.log(err);
                });
            }
        });
    };
    LivresComponent.prototype.AjouterLivrePanier = function (item) {
        console.log(item);
        this.panierService.AjouterLivre(item);
        console.log(this.panierService.Livres);
    };
    LivresComponent = __decorate([
        core_1.Component({
            selector: 'livres',
            templateUrl: "../app/html/Livres.html"
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, livres_service_1.LivresService, panier_service_1.PanierService, compte_service_1.CompteService])
    ], LivresComponent);
    return LivresComponent;
}());
exports.LivresComponent = LivresComponent;
//# sourceMappingURL=livres.component.js.map