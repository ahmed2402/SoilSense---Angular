import { Component, inject, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AddTest, ApiResponse, Sites, TestList, TestTypes, UserList } from '../../models/model';
import { MasterService } from '../../service/master.service';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tests',
  imports: [AsyncPipe,FormsModule],
  templateUrl: './tests.component.html',
  styleUrl: './tests.component.css'
})
export class TestsComponent implements OnInit {
  isNewTest : boolean = false;
  masterSrv = inject(MasterService)

  siteList$ : Observable<Sites[]> = new Observable<Sites[]>;
  userList$ : Observable<any> = new Observable<any>;
  testTypesList$ : Observable<TestTypes[]> = new Observable<TestTypes[]>;
  testObj : AddTest = {
      "testId": 0,
      "siteId": 0,
      "engineerId": 0,
      "testTypeId": 0,
      "testDate": new Date(),
      "remarks": "",
      "approvalStatus": "",
      "createdDate": new Date(),
      "testName": "aaa"
  }
    testList:TestList[] = [];


  constructor(){
    this.siteList$ = this.masterSrv.getSites();
    this.userList$ = this.masterSrv.getAllUsers().pipe(map((res:any)=>
      res.data));
    this.testTypesList$ = this.masterSrv.getAllTestTypes();
  }

  ngOnInit(): void {
    this.getAllTest()
  }

  showHideTest(){
    this.isNewTest = !this.isNewTest
  }

  onSaveTest(){
    this.masterSrv.createTest(this.testObj).subscribe((res:any)=> {
      alert("Test Created")
    },error=>{
      alert("API ERROR!")
    })
  }

  getAllTest(){
    this.masterSrv.getAllTest().subscribe((res:any)=> {
      console.log(res.data);
      
      this.testList = res.data;
      console.log(this.testList)
      alert("test showed");
    })
  }



}
