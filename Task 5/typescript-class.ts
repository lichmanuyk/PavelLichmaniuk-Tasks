class Lada {
    public model: string;
    public power: number;
    private isOn: boolean = false;

    constructor(model: string, power: number) {
        this.model = model;
        this.power = power;
    }

    public start(): void {
        this.isOn = true;
    }

    public stop(): void {
        this.isOn = false;
    }
}

class Mercedes extends Lada {
    private isHeadlightsOn: boolean = false;

    constructor(model: string, power: number) {
        super(model, power);
    }

    public start(): void {
        super.start();
        this.headlightsOn();
        console.log("Mercedes is ready to go");
    }

    public stop(): void {
        super.stop();
        this.headlightsOff();
        console.log("Mercedes is stoped");
    }

    private headlightsOn(): void {
        this.isHeadlightsOn = true;
    }

    private headlightsOff(): void {
        this.isHeadlightsOn = false;
    }
}

let merin = new Mercedes("W222", 300);
