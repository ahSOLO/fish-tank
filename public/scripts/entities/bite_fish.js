class BiteFish extends Fish {
  constructor(options) {
    super(options);
    this.imageUri = '/images/bite_fish.gif';
    this.isTasty = false;
  }

  collisionCheck(tank, position) {
    Object.values(tank.denizens).forEach( ele => {
      if (!ele.isTasty) {
        return;
      }
      let xDiff = Math.abs(ele.position.x - position.x)
      let yDiff = Math.abs(ele.position.y - position.y)
      if ( xDiff < this.width/2  && yDiff < this.height/2) {
        ele.kill();
      }
    });
  }

  updateOneTick() {
    var delta = this.swimVelocity.scale(PHYSICS_TICK_SIZE_S);
    this.position.addMut(delta);
    this.timeUntilSpeedChange -= PHYSICS_TICK_SIZE_S;
    if (this.timeUntilSpeedChange < 0) {
      this.makeNewVelocity();
    }
    this.collisionCheck(this.tank, this.position);
  }

  // onClick() {

  // }

}
