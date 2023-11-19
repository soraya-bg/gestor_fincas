export class Fincas {
    public idfinca?: number;
    public state?: string;
    public use?: string;
    public idexplotation?: number;
    
    constructor(idfinca:number,state:string,use:string,idexplotation:number) {
        this.idfinca = idfinca;
        this.state = state;
        this.use = use;
        this.idexplotation = idexplotation;
    
        }

    }