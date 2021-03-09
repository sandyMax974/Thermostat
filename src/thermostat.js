class Thermostat {
  constructor() {
    this.temperature = 20;
    this.MINIMUM_TEMPERATURE = 10;
    this.isPowerSaving = true;
  }

  up() {
     this.temperature += 1
  }

  down() {
    if (this.temperature > this.MINIMUM_TEMPERATURE) {
      this.temperature -= 1
    }
  }

  switchOn() {
    this.isPowerSaving = true
  }

  switchOff() {
    this.isPowerSaving = false
  }
};
