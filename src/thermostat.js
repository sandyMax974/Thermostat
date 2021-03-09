class Thermostat {
  constructor() {
    this.temperature = 20;
    this.MINIMUM_TEMPERATURE = 10;
    this.isPowerSaving = true;
    this.maxTemperature = 25;
  }

  getTemperature() {
    return this.temperature
  }

  isMinTemperature(){
    return this.temperature === this.MINIMUM_TEMPERATURE
  }

  up() {
     this.temperature += 1
  }

  down() {
    if (this.isMinTemperature()) {
      this.temperature -= 0
    } else {
      this.temperature -= 1
    }
  }

  switchOn() {
    this.isPowerSaving = true
    this.maxTemperature = 25;
  }

  switchOff() {
    this.isPowerSaving = false
    this.maxTemperature = 32;
  }

  reset() {
    this.temperature = 20;
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
