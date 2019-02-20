import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http: HttpClient) {   }

    getheaders(){
      const token=localStorage.getItem('token');
      return token? new HttpHeaders().set('Authorization',token):null;//http readers use for authorization
    }
   get(link:string){
     return this.http.get(link,{headers:this.getheaders()}).toPromise();//it will get values from parameters
   }

   post(link: string,body:any){
     return this.http.post(link,body,{headers:this.getheaders()}).toPromise();//it will post parameters of body to a link and hit api using http angular
   }
}




