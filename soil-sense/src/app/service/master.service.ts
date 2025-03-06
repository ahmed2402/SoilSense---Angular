import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  http = inject(HttpClient);
  loggedUserData: any;
  
  constructor() { 
    const loggedData = localStorage.getItem("soilUser");
    if(loggedData != null){
    this.loggedUserData = JSON.parse(loggedData)
  }
}

  userLogin(obj:any){
    return this.http.post("https://projectapi.gerasim.in/api/SoilTest/login",obj)
  }

  
}
