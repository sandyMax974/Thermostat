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

});










//   it("should be able to play a Song", function() {
//     player.play(song);
//     expect(player.currentlyPlayingSong).toEqual(song);

//     //demonstrates use of custom matcher
//     expect(player).toBePlaying(song);
//   });

//   describe("when song has been paused", function() {
//     beforeEach(function() {
//       player.play(song);
//       player.pause();
//     });

//     it("should indicate that the song is currently paused", function() {
//       expect(player.isPlaying).toBeFalsy();

//       // demonstrates use of 'not' with a custom matcher
//       expect(player).not.toBePlaying(song);
//     });

//     it("should be possible to resume", function() {
//       player.resume();
//       expect(player.isPlaying).toBeTruthy();
//       expect(player.currentlyPlayingSong).toEqual(song);
//     });
//   });

//   // demonstrates use of spies to intercept and test method calls
//   it("tells the current song if the user has made it a favorite", function() {
//     spyOn(song, 'persistFavoriteStatus');

//     player.play(song);
//     player.makeFavorite();

//     expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
//   });

//   //demonstrates use of expected exceptions
//   describe("#resume", function() {
//     it("should throw an exception if song is already playing", function() {
//       player.play(song);

//       expect(function() {
//         player.resume();
//       }).toThrowError("song is already playing");
//     });
//   });
// });
