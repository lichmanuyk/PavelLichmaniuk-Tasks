function Lada(model, power) {
  this.model = model;
  this.power = power;
  this._isOn = false;
}

Lada.prototype.start = function() {
  this._isOn = true;
};

Lada.prototype.stop = function() {
  this._isOn = false;
};

function Mercedes(model, power) {
  Lada.apply(this, arguments);
  this._isHeadlightsOn = false;
}

Mercedes.prototype = Object.create(Lada.prototype);
Mercedes.prototype.constructor = Mercedes;

Mercedes.prototype._headlightsOn = function() {
  this._isHeadlightsOn = true;
};

Mercedes.prototype._headlightsOff = function() {
  this._isHeadlightsOn = false;
};

Mercedes.prototype.start = function() {
  Lada.prototype.start.apply(this);
  this._headlightsOn();
  console.log("Mercedes is ready to go");
};

Mercedes.prototype.stop = function() {
  Lada.prototype.stop.apply(this);
  this._headlightsOff();
  console.log("Mercedes is stoped");
};
