import { Sprite } from "./sprite";

const sourceConfig = {
    width: 72,
    height: 47,
    image: '../../../assets/sprites/dino.png',
    frameSpeed: 10,
    actions: {
        run: {length: 3, y: 0, auto: true}
    },
    defaultAction: 'run'
};

export class Obstacle extends Sprite {
    constructor(canvas) {
        super(
            canvas,
            105,
            70,
            sourceConfig
        );
    }

    isOutOfCanvas() {
        return this.x + this.width < 0 || this.x > this.canvas.width;
    }
}
