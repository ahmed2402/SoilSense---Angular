import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MasterService } from '../../service/master.service';
import { ApiResponse, Sites } from '../../models/model';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-sites',
  imports: [ReactiveFormsModule,AsyncPipe],
  templateUrl: './sites.component.html',
  styleUrl: './sites.component.css'
})
export class SitesComponent {
  isFormVisible:boolean = false ; //using simple variables
  masterSrv = inject(MasterService)
  siteList$ : Observable<Sites[]> = new Observable<Sites[]>; // using observable method (u can add interface of list instead of any  )

  constructor(){
    this.siteList$ = this.masterSrv.getSites(); // calling site list in constructor nstead on ng oninit
  }

  siteForm : FormGroup = new FormGroup({
      siteId: new FormControl(0),
      siteName: new FormControl(""),
      location: new FormControl(""),
      clientName: new FormControl(""),
      weatherConditions: new FormControl(""),
      createdDate: new FormControl(new Date())
  })

  showHideForm(){
    this.isFormVisible = !this.isFormVisible;
  }

  onSave(){
    const formValue = this.siteForm.value;
    this.masterSrv.createNewSite(formValue).subscribe((res:ApiResponse)=> {
      alert("Site Created")
    },error=>{
      alert("Error From API")
    })
  }
}
