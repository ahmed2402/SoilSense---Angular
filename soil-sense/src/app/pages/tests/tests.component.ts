import { Component, inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Sites, Test, TestTypes, UserList } from '../../models/model';
import { MasterService } from '../../service/master.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-tests',
  imports: [AsyncPipe],
  templateUrl: './tests.component.html',
  styleUrl: './tests.component.css'
})
export class TestsComponent {
  isNewTest : boolean = false;
  masterSrv = inject(MasterService)

  siteList$ : Observable<Sites[]> = new Observable<Sites[]>;
  userList$ : Observable<any> = new Observable<any>;
  testTypesList$ : Observable<TestTypes[]> = new Observable<TestTypes[]>;
  testObj : Test = new Test

  constructor(){
    this.siteList$ = this.masterSrv.getSites();
    this.userList$ = this.masterSrv.getAllUsers().pipe(map((res:any)=>
      res.data));
    this.testTypesList$ = this.masterSrv.getAllTestTypes();
  }

  showHideTest(){
    this.isNewTest = !this.isNewTest
  }

  onSaveTest(){

  }



}
