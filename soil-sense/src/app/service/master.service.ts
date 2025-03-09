import { HttpClient } from '@angular/common/http';
import { literal } from '@angular/compiler';
import { inject, Injectable } from '@angular/core';
import { AddMeasurement, AddTest, ApiResponse, Sites, TestList, TestTypes, User, UserList } from '../models/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  http = inject(HttpClient);
  loggedUserData: any;
  apiUrl = "https://projectapi.gerasim.in/api/SoilTest/";
  
  constructor() { 
    const loggedData = localStorage.getItem("soilUser");
    if(loggedData != null){
    this.loggedUserData = JSON.parse(loggedData)
  }
}

  userLogin(obj:any){
    return this.http.post(this.apiUrl+"login",obj) //using string concatenation
  }

  getAllUsers() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}GetAllUsers`) //using template literal
  }

  addUser(obj:User) : Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.apiUrl}AddNewUser`,obj) //using template literal
  }

  updateUser(obj:User) : Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.apiUrl}UpdateUser`,obj) //using template literal
  }
  deleteUserById(id: number) : Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(`${this.apiUrl}DeleteUserByUserId?userId=${id}`) //using template literal
  }

  //Sites Page APIs
  createNewSite(obj:Sites) : Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.apiUrl}CreateNewSites`,obj) //using template literal
  }

  getSites() : Observable<Sites[]> {
    return this.http.get<Sites[]>(`${this.apiUrl}GetSites`) //using template literal
  }
  //test page apis
  getAllTestTypes() : Observable<TestTypes[]> {
    return this.http.get<TestTypes[]>(`${this.apiUrl}GetAllTestTypes`) //using template literal
  }
  createTest(obj:AddTest) : Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.apiUrl}CreateTest`,obj) //using template literal
  }
  getAllTest() : Observable<TestList[]> {
    return this.http.get<TestList[]>(`${this.apiUrl}GetAllTests`) //using template literal
  }
  // GetAllMeasurementsByTestId?testid=1
  createMeasurement(obj:AddMeasurement) : Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.apiUrl}CreateMeasurement`,obj) //using template literal
  }
  getMeasurementByTestId(testId: number) : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}GetAllMeasurementsByTestId?testid=${testId}`) //using template literal
  }

}
