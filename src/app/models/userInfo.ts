export class userInfo {
    userId:Number;
    username: string;
    firstName:string;
    lastName: string;
    password: string;

    constructor (username: string,firstname:string,lastname:string, password: string){
        this.userId = 1;
        this.username = username;
        this.firstName = firstname;
        this.lastName = lastname;
        this.password = password;
    }
}