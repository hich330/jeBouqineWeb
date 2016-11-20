import { Component ,OnInit} from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
import { LivresService } from './livres.service';
import { PanierService } from './panier.service';
import { Livre } from './livre';
import {CompteService} from "./compte.service"

@Component({
    selector: 'livres',
    templateUrl: "../app/html/Livres.html"
})

export class LivresComponent implements OnInit{
    livres: Livre[] = [];
    public MaxPrix:number= 0;
    public LoggedIn :Boolean = true;

    constructor(private route: ActivatedRoute,
                private livresService : LivresService,
                private panierService:PanierService,
                private compteService:CompteService){
     
        this.compteService.loggedIn
                .subscribe(data =>{
                     this.LoggedIn = data;
        });

    }

    ngOnInit(){

        this.route.params.subscribe(params => {
            let category = params['Category'];
            console.log('ngOnInit', category);
            if (category != null) {
               this.livresService.ChercherParCategorie(category).subscribe(p => {
                    this.livres = p;
                }, err => {
                    console.log(err);
                });
            }
            else {
                this.livresService.RecupererLivres().subscribe(p => {
                    this.livres = p;
                }, err => {
                    console.log(err);
                });
            }
        });
    }

    AjouterLivrePanier(item : Livre)
    {
        console.log(item);
        this.panierService.AjouterLivre(item);
        console.log( this.panierService.Livres);
    }
}
