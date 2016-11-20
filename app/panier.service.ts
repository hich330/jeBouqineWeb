import {Injectable} from '@angular/core';
import {Livre} from "./livre";

@Injectable()
export class PanierService
{
    public Livres :Livre[] =[];

    AjouterLivre(livre:Livre)  {
        let estNonAjoute = this.EstLivreAjoute(livre.Id);
        console.log('estNonAjoute',estNonAjoute,livre);
        if(!estNonAjoute)
            this.Livres.push(livre);
        else
        {
            this.SupprimerLivre(livre);
            this.Livres.push(livre);
        }
    }

    SupprimerLivre(livre:Livre)  {
        let index = this.IndexOf(livre);
        console.log('index',index);
        if(index != -1)
          this.Livres.splice(index,1);
    }

    EstLivreAjoute(id:string):boolean  {
        for(let item of this.Livres)
        {
            console.log('EstLivreAjoute',item);
            if(item.Id == id)
            {
                return true;
            }
        }
        return false;
    }

    IndexOf(livre:Livre)  {
        console.log('this.Livres',this.Livres);
        for (var i = 0; i <  this.Livres.length; i++)
        {
            console.log('index',this.Livres[i].Id, livre.Id);
            if(this.Livres[i].Id == livre.Id)
            {
                return i;
            }
        }
        return -1;
    }
}