    import { NgModule }      from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';

    import { routing }  from './app.routes';

    import { AppComponent }   from './app.component';
    import { AccueilComponent } from './accueil.component';
    import { BesoinAideComponent } from './besoin.aide.component';
    import { ContactComponent } from './contact.component';
    import { DetailComponent } from './detail.component';
    import { CreerCompteComponent } from './creer.compte.component';
    import { LivresComponent } from './livres.component';
    import { LoginComponent } from './login.component';
    import { HttpModule } from '@angular/http';
    import { LivresService } from './livres.service';
    import { PanierService } from './panier.service';
    import { CompteService } from './compte.service';

    import { InferieurAPipe } from './inferieur.pipe';

    import {FormsModule, ReactiveFormsModule} from "@angular/forms";
    import {AdresseComponent} from "./adresse.component";
    import { LocationStrategy, HashLocationStrategy } from '@angular/common';

    @NgModule({
        imports: [BrowserModule,routing,HttpModule,ReactiveFormsModule,FormsModule],
        declarations: [InferieurAPipe,AppComponent, AccueilComponent,BesoinAideComponent,
            ContactComponent,DetailComponent,CreerCompteComponent,LivresComponent,LoginComponent,AdresseComponent],
        bootstrap: [AppComponent],
        providers: [LivresService,PanierService,CompteService,     {provide: LocationStrategy, useClass: HashLocationStrategy}]
    })
    export class AppModule { }
