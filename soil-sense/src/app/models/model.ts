export class User { //in class you need to intilaizie them also
    userId: number ;
    userName: string;
    emailId: string;
    fullName: string;
    password: string;

    constructor(){
        this.emailId = "" ;
        this.fullName = "";
        this.password = "";
        this.userId = 0;
        this.userName = "";
    }
  }
 
  export interface ApiResponse {  //in interface you don't need to intialize them
        message: string,
        result: boolean,
        data: any
  }

  export interface UserList  {
    userId: number
    userName: string
    emailId: string
    fullName: string
    role: string
    createdDate: string
    password: string
    projectName: string
    refreshToken: string
    refreshTokenExpiryTime: string
  }

  export interface Sites {
    siteId: number
    siteName: string
    location: string
    clientName: string
    weatherConditions: string
    createdDate: string
  }