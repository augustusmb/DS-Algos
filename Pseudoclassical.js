
function logCabin(rooms) {
  this.material = 'wood';
  this.rooms = rooms;
  this.heatSource = 'Fire Place';
  this.vibe = 'homely';
  this.surrounding = 'remote';
}


logCabin.prototype.countRooms = function() {
  console.log('This cabin has ' +
    this.rooms + ' rooms. Enjoy.');
}


var myCabin = new logCabin(10);


myCabin.countRooms();