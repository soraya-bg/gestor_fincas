export class Users {
    public id: number;
    public name: string;
    public surname: string;
    public email:string;
    public password:number;
    public idexplotation:number;
    
    constructor(id:number,name:string,surname:string,email:string,password:number,idexplotation:number) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.password = password;
    this.idexplotation = idexplotation;

    }
    }