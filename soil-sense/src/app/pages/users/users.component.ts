import { Component, inject, signal } from '@angular/core';
import { ApiResponse, User } from '../../models/model';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MasterService } from '../../service/master.service';

@Component({
  selector: 'app-users',
  imports: [FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  userObj : User = new User();
  isFormVisible = signal<boolean>(false);
  masterSrv = inject(MasterService)

  showHideForm(){
    this.isFormVisible.set(!this.isFormVisible())
  }

  onAddUser(){
    this.masterSrv.addUser(this.userObj).subscribe((res:ApiResponse)=> {
      if(res.Result){
        alert("User Created")
      } else {
        alert(res.Message)
      }
    })
  }

}
