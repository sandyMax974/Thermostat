'use strict'

class Thermostat {
  constructor() {
    this.DEFAULT_TEMPERATURE = 20;
    this.MAX_TEMPERATURE_OFF = 32;
    this.MAX_TEMPERATURE_ON = 25;
    this.temperature = this.DEFAULT_TEMPERATURE;
    this.MINIMUM_TEMPERATURE = 10;
    this.powerSaving = true;
    this.maxTemperature = this.MAX_TEMPERATURE_ON;
    this.LOW_USAGE = 18;
    this.MEDIUM_USAGE = 25;
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
    this.maxTemperature = this.MAX_TEMPERATURE_ON;
  }

  switchOff() {
    this.powerSaving = false
    this.maxTemperature = this.MAX_TEMPERATURE_OFF;
  }

  reset() {
    this.temperature = this.DEFAULT_TEMPERATURE;
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
    if (this.getTemperature() < this.LOW_USAGE) {
      return 'low-usage'
    } else if (this.getTemperature() <= this.MEDIUM_USAGE) {
      return 'medium-usage'
    } else {
      return 'high-usage'
    }
  }
};
