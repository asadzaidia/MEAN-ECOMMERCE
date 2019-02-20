import { async } from '@angular/core/testing';
import { RestApiService } from './../rest-api.service';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
name='';
email='';
password='';
password1='';
isSeller=false;

btnDisabled=false;
  constructor(private router:Router,private data:DataService,private rest:RestApiService) { }

  ngOnInit() {
  }

  validate(){
    if(this.name){
        if(this.email){ 
          if(this.password){
            if(this.password1){
                if(this.password==this.password1){

                }else{
                  this.data.error("Password do not match");
                }
            }else{
              this.data.error("Confirmation password is not entered");
            }
          }else{
            this.data.error("Password is not entered");
          }
        }else{
          this.data.error("Email is not entered");
        }
    }else{
      this.data.error("Name is not entered");
    }
  }

  async register(){
    console.log('register call');
    this.btnDisabled=true;
    try{
    if(this.validate()){//agar valide hogaya hai to
      const data= await this.rest.post('http://localhost:3030/api/accounts/signup',{
        name:this.name,
        email:this.email,
        password:this.password,
        isSeller:this.isSeller
        
      }
      
    );
    if(data['success']){ //if data success =true from signup api
      console.log('member');
      localStorage.setItem('token',data['token']);//like cookies
      this.data.success("Registration successfull!");
      await this.data.getProfile();
    }else{
      this.data.error(data['message']);
    }

}
  }catch(error){
    this.data.error(error['message']);//if server down or other things then exception
  }
    this.btnDisabled=false;
}
}