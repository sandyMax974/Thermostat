'use strict'

class Thermostat {
  constructor() {
    this.temperature = 20;
    this.MINIMUM_TEMPERATURE = 10;
    this.powerSaving = true;
    this.maxTemperature = 25;
  }

  getTemperature() {
    return this.temperature
  }

  up() {
    if (this.isMaxTemperature()) {
     return;
    }
    this.temperature += 1
  }

  down() {
    if (this.isMinTemperature()) {
      return;
    }
    this.temperature -= 1
  }

  switchOn() {
    this.powerSaving = true;
    this.maxTemperature = 25;
  }

  switchOff() {
    this.powerSaving = false
    this.maxTemperature = 32;
  }

  reset() {
    this.temperature = 20;
  }

  isPowerSavingOn() {
    return this.powerSaving
  }

  isMinTemperature() {
    return this.temperature === this.MINIMUM_TEMPERATURE
  }

  isMaxTemperature() {
    return this.temperature === this.maxTemperature;
  }

  energyUsage() {
    if (this.getTemperature() < 18) {
      return 'low-usage'
    } else if (this.getTemperature() <= 25) {
      return 'medium-usage'
    } else {
      return 'high-usage'
    }
  }
};
