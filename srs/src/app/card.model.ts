export class card {
    public id: string;
    public clue: string;
    public answer: string;
    public srslocation: string;
    constructor(id: string, clue: string, a: string, srslocation: string) {
        this.id = id;
        this.clue = clue;
        this.answer = a;
        this.srslocation = srslocation;
    }
}