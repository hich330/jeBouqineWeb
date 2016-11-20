import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {CompteService} from "./compte.service";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'login',
    templateUrl: "../app/html/Login.html",
    styleUrls:["../Content/login.css"],
    styles: [`
    input.ng-dirty.ng-invalid { border: solid red 2px; !important;}
    input.ng-dirty.ng-valid { border: solid green 2px; !important;}
  `]
})

export class LoginComponent
{
 public  IsLogged :boolean = true;
    
    constructor( private compteService:CompteService, private router: Router) {

    }

    onSubmit(form: NgForm) {
        console.log('should register:', form.value);

        this.compteService.Login(form.value.user,form.value.password).subscribe(
            data => {
                console.log('data',data);
                if(data != null) {
                   this.compteService.isLoggedIn = true;
                    this.compteService.loggedIn.next(this.compteService.isLoggedIn);
                    this.compteService._compte = data;
                    this.compteService.Compte.next(this.compteService._compte);
                    this.router.navigate(['/LesLivres']);
                } 
                else 
                {
                    this.IsLogged = false;
                }
            },
            err => console.log(err),
            () => console.log('Authentication Complete')
        );


    }
}