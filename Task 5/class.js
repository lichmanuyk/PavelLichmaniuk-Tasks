class Lada {
  constructor(model, power) {
    this.model = model;
    this.power = power;
    this._isOn = false;
  }

  start() {
    this._isOn = true;
  }

  stop() {
    this._isOn = false;
  }
};

class Mercedes extends Lada {
  constructor(model, power) {
    super(model, power);
    this._isHeadlightsOn = false;
  }

  _headlightsOn() {
    this._isHeadlightsOn = true;
  }

  _headlightsOff() {
    this._isHeadlightsOn = false;
  }

  start() {
    super.start();
    this._headlightsOn();
    alert("Mercedes is ready to go");
  }

  stop() {
    super.stop();
    this._headlightsOff();
    alert("Mercedes is stoped");
  }
};
