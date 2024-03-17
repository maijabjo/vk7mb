import { Shape } from "./Shape.js "


export class Line extends Shape {

constructor(x,y,x2,y2) {
super(x,y,x2,y2)
}

lineTo(ctx) {
ctx.beginPath()
ctx.moveTo(x, y);
ctx.lineTo(x2, y2);
ctx.lineWidth = this._lineWidth
ctx.stroke()
}
}
