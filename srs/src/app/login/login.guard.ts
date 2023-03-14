import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { SrsHttp } from "../srshttp.service";

@Injectable({providedIn: 'root'})
export class LoginGuard implements CanActivate {
    constructor(private http: SrsHttp, private router: Router) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (this.http.isAuthenticated) {
            return this.http.isAuthenticated;
        }
        return this.router.createUrlTree(['/login']);
    }
}