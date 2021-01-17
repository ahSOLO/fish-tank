class SwitchFish extends Fish {

  constructor(options) {
    super(options);
    this.imageUri = '/images/fish02.png';
  }

  onClick(event) {
    this.makeNewVelocity(50);
  }
}
