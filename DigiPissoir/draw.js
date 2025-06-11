console.log("draw.js läuft");

function enableDrawing(index) {
  const canvas = document.getElementById("draw-canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.display = "block";

  const colorMap = {
    5: "red",
    6: "blue",
    7: "green",
    8: "orange",
    9: "purple",
    10: "black",
    11: "pink",
    12: "brown",
    13: "yellow"
  };

  const color = colorMap[index] || "white";
  ctx.strokeStyle = color;
  ctx.lineWidth = 4;
  ctx.lineCap = "round";

  let drawing = false;

  function startDraw(e) {
    drawing = true;
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  }

  function draw(e) {
    if (!drawing) return;
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
  }

  function endDraw() {
    drawing = false;
  }

  canvas.addEventListener("mousedown", startDraw);
  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("mouseup", endDraw);
  canvas.addEventListener("mouseleave", endDraw);
}
