import { Component, inject, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AddTest, ApiResponse, Sites, TestList, TestTypes, UserList } from '../../models/model';
import { MasterService } from '../../service/master.service';
import { AsyncPipe, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tests',
  imports: [AsyncPipe,FormsModule,NgClass],
  templateUrl: './tests.component.html',
  styleUrl: './tests.component.css'
})
export class TestsComponent implements OnInit {
  isNewTest : boolean = false;
  masterSrv = inject(MasterService)
  activeTest : number = 0;

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
  measurementObj : any = {
    "measurementId": 0,
    "testId": 0,
    "excavatedHoleVolume": 0,
    "wetSoilWeight": 0,
    "moistureContent": 0,
    "drySoilWeight": 0,
    "sandVolumeUsed": 0,
    "dryDensity": 0,
    "soilClassification": "",
    "createdDate": new Date()
  }
    testList:TestList[] = [];
    measuremntList:any[] = [];


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
      this.testList = res;
    })
  }

  setActiveTest(id: number){
      this.activeTest = id;
      this.getMeasurementByTestId();
  }

  addNewMeasurement(){
    alert("hello")
    console.log(this.activeTest)
    this.measurementObj.testId = this.activeTest //in active test there is the testid
    console.log(this.measurementObj.testId);
    
    this.masterSrv.createMeasurement(this.measurementObj).subscribe((res:any)=> {
      console.log(this.measurementObj);
      
      alert("Measurement Created")
      this.getMeasurementByTestId();
    },error=>{
      alert("API ERROR!")
    })
  }

  getMeasurementByTestId(){
    this.masterSrv.getMeasurementByTestId(this.activeTest).subscribe((res:any)=> {
    this.measuremntList = res;
    });
  }
}


