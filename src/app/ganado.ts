export class Ganado {
    public idganado?: number;
    public type?: string;
    public gender?: string;
    public birth?: Date;
    public death?: Date;
    public group?: string;
    public idexplotation?: number;
    
    constructor(idganado:number,type:string,gender:string,birth:Date,death:Date,group:string,idexplotation:number) {
        this.idganado = idganado;
        this.type = type;
        this.gender = gender;
        this.birth = birth;
        this.death = death;
        this.group = group;
        this.idexplotation = idexplotation;
    
        }

    }