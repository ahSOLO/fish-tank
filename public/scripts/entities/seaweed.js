class SeaWeed extends Denizen {

  constructor(options) {
    super(options);
    this.waterFriction = 0.3;      // "0.3" means "lose 30% per second"
    this.imageUri = '/images/seaweed.png';
    this.type = options.type;
    this.height = options.height || 100;
    this.width = options.width || 100;
  }

  updateOneTick() {

  }

  onClick(event) {
    this.kill();
  }

}
