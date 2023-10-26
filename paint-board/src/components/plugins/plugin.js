export class Plugin {
	canvas = undefined;

	constructor(initialValues) {
		this.name = "";

		Object.assign(this, initialValues);
	}

	draw(data) {
		// x, y, color, lineWidth
		const context = this.canvas.getContext("2d");

		context.globalCompositeOperation = "source-over";
		context.strokeStyle = data.color;
		context.lineCap = "round";
		context.lineJoin = "round";
		context.shadowColor = "";
		context.shadowOffsetX = 0;
		context.shadowOffsetY = 0;
		context.shadowBlur = 0;
		context.lineWidth = data.lineWidth;
		context.textAlign = "left";
		context.textBaseline = "top";
		context.direction = "ltr";
		context.lineDashOffset = 0;
		context.miterLimit = 0;
		context.globalAlpha = 1;
		context.fillStyle = data.color;
	}
}
