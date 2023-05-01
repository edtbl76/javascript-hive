class StartScene extends Phaser.Scene {
    constructor() {
        super({ key: 'StartScene' });
    }

    create() {
        this.add.text(200, 160, 'Click to Start!', {
            fontSize: '30px',
            fill: '#000000'
        });

        this.input.on('pointerdown', () => {
            this.scene.stop('StartScene');
            this.scene.start('GameScene');
        })
    }
}