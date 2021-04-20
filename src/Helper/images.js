export const renderImage = (objectUrl, canvasId) => {
  const canvas = document.getElementById(canvasId);
  var ctx = canvas.getContext("2d");
  var img = new Image();

  img.onload = function () {
    const aspectRatio = img.width / img.height;
    const newWidth = 200;
    const newHeight = newWidth / aspectRatio;
    canvas.width = newWidth;
    canvas.height = newHeight;
    ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, newWidth, newHeight);
    removeBackground(canvasId);
  };

  img.src = objectUrl;
};

export const removeBackground = (canvasId) => {
  const canvas = document.getElementById(canvasId);
  const context = canvas.getContext("2d");
  const imgData = context.getImageData(0, 0, canvas.width, canvas.height);
  const data = imgData.data;

  const firstColor = [data[0], data[1], data[2], data[3]];

  for (let i = 0; i < data.length; i += 4) {
    if (firstColor.filter((x, ind) => x === data[i + ind]).length === 4) {
      data[i + 3] = 0;
    }
  }

  context.putImageData(imgData, 0, 0);
};

export const removeImage = (canvasId) => {
  const canvas = document.getElementById(canvasId);
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
};
