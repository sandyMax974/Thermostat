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

  describe("isPowerSaving", function() {
    it("returns true when power saving is on", function(){      
      expect(thermostat.isPowerSaving).toEqual(true)
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
      thermostat.temperature = 10
      thermostat.down()
      expect(thermostat.temperature).toEqual(10)
    })
  })

  describe("switchOff", function() {
    it("it switch off power saving mode", function(){
      thermostat.switchOff()
      expect(thermostat.isPowerSaving).toEqual(false)
    })
  })
  describe("switchOn", function(){
    it("switch on into power saving mode", function(){
      thermostat.switchOff()
      thermostat.switchOn()
      expect(thermostat.isPowerSaving).toEqual(true)
    })
  })

  describe("isMinTemperature", function() {
    it("return true if tempertaure is equak to minimum temperature", function() {
      expect(thermostat.isMinTemperature()).toEqual(false)
    })
  })

  describe("maxTemperature", function() {
    it("swhen power saving mode is on, should equal 25", function() {
      expect(thermostat.maxTemperature).toEqual(25)
    })
    it("swhen power saving mode is off, should equal 32", function() {
      thermostat.switchOff()
      expect(thermostat.maxTemperature).toEqual(32)
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
      thermostat.temperature = 17;
      expect(thermostat.energyUsage()).toEqual('low-usage')
    })
    it("returns `medium-usage` when less or equal to 25 degree", function() {
      thermostat.temperature = 25;
      expect(thermostat.energyUsage()).toEqual('medium-usage')
    })
    it("returns `high-usage` when superior to 25 degree", function() {
      thermostat.temperature = 26;
      expect(thermostat.energyUsage()).toEqual('high-usage')
    })
  })
});

