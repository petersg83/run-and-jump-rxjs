import { Text } from './text';

export class GameOverText extends Text {
    constructor(canvas, scale) {
        super(canvas, 10 * scale);
        this.x = 25 * scale + 60;
        this.y = canvas.height / 2;
        this.visible = false;
    }

    render() {
        if (this.visible) {
            super.render('Pôle emploi a eu Mlle Pillon!');
        }
    }

    show() {
        this.visible = true;
    }

    hide() {
        this.visible = false;
    }
}
