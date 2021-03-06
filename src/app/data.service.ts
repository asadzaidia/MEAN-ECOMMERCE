import { RestApiService } from './rest-api.service';
import { Injectable } from '@angular/core';

import {NavigationStart,Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
message='';
messageType='danger';
user: any;
  constructor(private router:Router,private rest:RestApiService) {
    this.router.events.subscribe(event=>{
      if(event instanceof NavigationStart){
        this.message='';
      }

    });
   }

   async getProfile(){
    try{
      if(localStorage.getItem('token')){
        const data=await this.rest.get(
          'http://localhost:3030/api/accounts/profile'
        );
        // console.log(this.data);
        this.user=data['user'];
      }

    }catch(error){
      this.error(error);
    }

    
     
   }

   error(message){
     this.messageType='danger';
     this.message=message;
   }
   success(message){
     this.messageType='success';
     this.message=message;
   }
   warning(message){
     this.messageType='warning';
     this.message=message;
   }
}
