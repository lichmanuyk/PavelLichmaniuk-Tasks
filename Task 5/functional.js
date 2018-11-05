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

  var ladaStart = this.start;
  this.start = function() {
    ladaStart.call(this);
    headlightsOn.call(this);
    alert("Mercedes is ready to go");
  };

  var ladaStop = this.stop;
  this.stop = function() {
    ladaStop.call(this);
    headlightsOff.call(this);
    alert("Mercedes is stoped");
  };
}
