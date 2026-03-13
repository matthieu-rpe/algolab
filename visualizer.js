export class Visualizer {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
  }

  draw(data, comparing = [], moving = [], sorted = []) {
    const { width, height } = this.canvas;
    this.ctx.clearRect(0, 0, width, height);

    const barWidth = width / data.length;

    data.forEach((val, i) => {
      this.ctx.fillStyle = "#c5003c44";
      if (comparing.includes(i)) this.ctx.fillStyle = "#55ead4";
      if (moving.includes(i)) this.ctx.fillStyle = "#f3e600";
      if (sorted.includes(i)) this.ctx.fillStyle = "#c5003c";

      const barHeight = (val / 100) * height;

      this.ctx.fillStyle = "";

      this.ctx.fillRect(
        i * barWidth,
        height - barHeight,
        barWidth - 2,
        barHeight
      );
    });
  }
}
