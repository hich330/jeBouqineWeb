import { Component } from '@angular/core';
import { PanierService } from './panier.service';
import {Livre} from "./livre";
import {CompteService} from "./compte.service"
import {Compte} from "./compte"

@Component({
    selector: 'je-bouquine',
    templateUrl: "../app/html/index.html",
    styleUrls:["../Content/app.css"]
})

export class AppComponent {
    public PanierLivre : Livre[] = [];
    public LoggedIn :Boolean = true;

   public Compte :Compte = new Compte();


    constructor(private panierService:PanierService,private compteService:CompteService) {
        this.PanierLivre = this.panierService.Livres;
      //  console.log('okk',compteService.loggedIn);
     //   this.LoggedIn = compteService.loggedIn;

        this.compteService.loggedIn
                .subscribe(data =>{
                     this.LoggedIn = data;
        });

       this.compteService.Compte
                .subscribe(data =>{
                    console.log(data.Nom,data.Prenom);
                     this.Compte = data;
        });
    }

    CalculerNombreTotalLivre():number
    {
        let numbre:number =0;
        for (let item of this.PanierLivre) {
            numbre = numbre + +item.Quantite;
        }
        return numbre;
    }

    CalculerMontantTotal():number
    {
        let numbre:number =0;
        for (let item of this.PanierLivre) {
            numbre = numbre + (+item.Quantite * +item.Prix);
        }
        return numbre;
    }


    SupprimerLivre(livre:Livre)
    {
        this.panierService.SupprimerLivre(livre);
    }


    clickTogoogleMaps(adresse : string){

        console.log("Go to Google maps ",adresse);
    }
}
