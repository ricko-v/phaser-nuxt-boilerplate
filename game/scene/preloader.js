import Phaser from 'phaser';

class Preloader extends Phaser.Scene {
    preload() {
    }

    create() {
        this.add.text(100, 100, 'Lets realize your amazing idea!', { fontSize: 20 })
    }

    update() {
    }
}

export default Preloader;