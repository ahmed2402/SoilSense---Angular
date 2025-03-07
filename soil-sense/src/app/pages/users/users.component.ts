import { Component, inject, OnInit, signal } from '@angular/core';
import { ApiResponse, User, UserList } from '../../models/model';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MasterService } from '../../service/master.service';

@Component({
  selector: 'app-users',
  imports: [FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  userObj : User = new User();
  isFormVisible = signal<boolean>(false); //using signals
  masterSrv = inject(MasterService)
  userList : UserList [] = [];

  
  ngOnInit(): void {
    this.loadUser();
  }


  showHideForm(){
    this.isFormVisible.set(!this.isFormVisible())
  }

  loadUser(){
    this.masterSrv.getAllUsers().subscribe((res:ApiResponse)=> {
      this.userList = res.data;
    })
  }

  onAddUser(){
    this.masterSrv.addUser(this.userObj).subscribe((res:ApiResponse)=> {
      if(res.result){
        alert("User Created")
        this.loadUser();
      } else {
        alert(res.message)
      }
    })
  }

  onEdit(data: User){
    this.userObj = data;
    this.showHideForm();
  }

  onUpdateUser(){
    this.masterSrv.updateUser(this.userObj).subscribe((res:ApiResponse)=> {
      if(res.result){
        alert("User Updated")
        this.loadUser();
      } else {
        alert(res.message)
      }
    })
  }

  onDelete(id: number){
    const isDelete = confirm("Are you sure you want to delete?")
    if(isDelete == true){
      this.masterSrv.deleteUserById(id).subscribe((res:ApiResponse)=> {
        if(res.result){
          alert("User Deleted")
          this.loadUser();
        } else {
          alert(res.message)
        }
      })
    }
  }

}
