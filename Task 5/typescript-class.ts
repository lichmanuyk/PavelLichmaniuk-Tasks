class Lada {
    private _isOn: boolean = false;

    constructor(model: string, power: number) { }

    start(): void {
        this._isOn = true;
    }

    stop(): void {
        this._isOn = false;
    }
};


class Mercedes extends Lada {
    private _isHeadlightsOn: boolean = false;

    constructor(model: string, power: number) {
        super(model, power);
        
    }

    _headlightsOn(): void {
        this._isHeadlightsOn = true;
    }

    _headlightsOff(): void {
        this._isHeadlightsOn = false;
    }

    start(): void {
        super.start();
        this._headlightsOn();
        console.log("Mercedes is ready to go");
    }

    stop(): void {
        super.stop();
        this._headlightsOff();
        console.log("Mercedes is stoped");
    }
};

new Lada().