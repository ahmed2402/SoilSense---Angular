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

  export interface TestTypes {
    testTypeId: number
    testName: string
    referenceStandard: string
    createdDate: string
  }

  export interface AddTest {
    testId: number
    siteId: number
    engineerId: number
    testTypeId: number
    testDate: Date
    remarks: string
    approvalStatus: string
    createdDate: Date
    testName: string
  }

  export interface TestList {
    testDate: string
    testId: number
    approvalStatus: string
    testTypeName: string
    siteName: string
    clientName: string
    engineerName: string
    testName: string
  }
  