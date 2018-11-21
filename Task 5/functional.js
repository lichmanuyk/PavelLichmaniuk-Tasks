function Lada(model, power) {
  this.model = model;
  this.power = power;
  this._isOn = false;

  this.start = function() {
    this._isOn = true;
  };

  this.stop = function() {
    this._isOn = false;
  };
}

function Mercedes(model, power) {
  Lada.apply(this, arguments);
  var isHeadlightsOn = false;

  function headlightsOn() {
    isHeadlightsOn = true;
  }

  function headlightsOff() {
    isHeadlightsOn = false;
  }

  var parentStart = this.start;
  this.start = function() {
    parentStart.call(this);
    headlightsOn.call(this);
    console.log("Mercedes is ready to go");
  };

  var parentStop = this.stop;
  this.stop = function() {
    parentStop.call(this);
    headlightsOff.call(this);
    console.log("Mercedes is stoped");
  };
}
