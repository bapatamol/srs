import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { card } from "./card.model"

@Injectable({providedIn: 'root'})
export class SrsHttp {
    loginComplete = new Subject<{status: string}>();
    isAuthenticated: boolean = false;
  

    constructor(private http: HttpClient) { }

    loadSRSDataFromServer() {
        return this.http.get<card[]>("http://bapatamol.alwaysdata.net/srs/get.php")
    }

    addCard(o : {quesiton: string, answer: string}) {
        return this.http.post ("http://bapatamol.alwaysdata.net/srs/add.php", o);
    };

    login(o: {username: string, password: string}) {
        console.log(o);
        return this.http.post("http://bapatamol.alwaysdata.net/srs/login.php", o).subscribe(respData =>  {
            this.isAuthenticated = true;
            this.loginComplete.next(<{status: string}>respData);
          });
    }
}