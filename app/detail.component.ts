import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LivresService } from './livres.service';
import { PanierService } from './panier.service';
import {Livre} from "./livre";
import {CompteService} from "./compte.service";

@Component({
    selector: 'detail',
    templateUrl: "../app/html/Detail.html"
})

export class DetailComponent implements OnInit{
    public Id :string = "";
    public Livre :Livre = new Livre();
    birthday = new Date(1988, 3, 15); // April 15, 1988
    public LoggedIn :Boolean = true;

    constructor(private route: ActivatedRoute,
                private livresService : LivresService,
                private panierService:PanierService,
                private compteService:CompteService) {

        this.compteService.loggedIn
            .subscribe(data =>{
                this.LoggedIn = data;
            });

    }


    ngOnInit() {
        this.Id = this.route.snapshot.params['Id'];
        this.livresService.ChercherParId(this.Id)
            .subscribe(p => {
                    this.Livre = p;
            }
         , err => {
            console.log(err);
        });
    }

    AjouterLivrePanier(item : Livre)
    {
        console.log(item);
        this.panierService.AjouterLivre(item);
        console.log( this.panierService.Livres);
    }



}
