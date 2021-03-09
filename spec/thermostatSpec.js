describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should have a starting temperature 20 degrees", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it("should have a minimum temperature of 10 degrees", function() {
    expect(thermostat.MINIMUM_TEMPERATURE).toEqual(10);
  });

  describe("PowerSaving", function() {
    it("returns true when power saving is on", function(){      
      expect(thermostat.powerSaving).toEqual(true)
    })
  })

  describe("getTemperature", function() {
    it("retreive the current temperature", function() {
      expect(thermostat.getTemperature()).toEqual(20)
    })
  })

  describe("up", function() {
    it("increases temperature", function(){
      thermostat.up()
      expect(thermostat.temperature).toEqual(21);
    })
  })

  describe("down", function() {
    it("decreases temperature", function() {
      thermostat.down()
      expect(thermostat.temperature).toEqual(19)
    })

    it("doesn't decreases temperature under 10 degrees", function() {
      for (var i = 0; i < 11; i++) { thermostat.down() }
      expect(thermostat.temperature).toEqual(10)
    })
  })

  describe("switchOff", function() {
    it("it switch off power saving mode", function(){
      thermostat.switchOff()
      expect(thermostat.powerSaving).toEqual(false)
    })
  })

  describe("switchOn", function(){
    it("switch on into power saving mode", function(){
      thermostat.switchOff()
      thermostat.switchOn()
      expect(thermostat.powerSaving).toEqual(true)
    })
  })

  describe("isMinTemperature", function() {
    it("return true if tempertaure is equak to minimum temperature", function() {
      expect(thermostat.isMinTemperature()).toEqual(false)
    })
  })

  describe("isPowerSavingOn", function() {
    it("should return true when power saving mode is ON", function() {
      expect(thermostat.isPowerSavingOn()).toEqual(true)
    })
  })

  describe("maxTemperature", function() {
    it("swhen power saving mode is on, should equal 25", function() {
      expect(thermostat.maxTemperature).toEqual(25)
    })
    it("when power saving mode is off, should equal 32", function() {
      thermostat.switchOff()
      for (var i = 0; i < 15; i++) { thermostat.up() }
      expect(thermostat.getTemperature()).toEqual(32)
    })
  })

  describe("reset", function() {
    it("resets the temperature to the default 20 degree", function() {
      thermostat.down()
      thermostat.reset()
      expect(thermostat.getTemperature()).toEqual(20)
    })
  })

  describe("energyUsage", function() {
    it("returns `low-usage` when under 18 degree", function() {
      for (var i = 0; i < 13; i++) { thermostat.down() }
      expect(thermostat.energyUsage()).toEqual('low-usage')
    })
    it("returns `medium-usage` when less or equal to 25 degree", function() {
      for (var i = 0; i < 4; i++) { thermostat.up() }
      expect(thermostat.energyUsage()).toEqual('medium-usage')
    })
    it("returns `high-usage` when superior to 25 degree", function() {
      thermostat.switchOff()
      for (var i = 0; i < 7; i++) { thermostat.up() }
      expect(thermostat.energyUsage()).toEqual('high-usage')
    })
  })

  describe("isMaxTemperature", function() {
    it("should return true if temperature is at the max", function() {
      expect(thermostat.isMaxTemperature()).toEqual(false)
    })
  })
});

