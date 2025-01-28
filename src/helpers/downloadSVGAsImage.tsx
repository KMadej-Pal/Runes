
export const downloadSVGAsImage = (svgElement:any, filename = 'image.png') => {
    const svgData = new XMLSerializer().serializeToString(svgElement);
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
  
    const { width, height } = svgElement.getBoundingClientRect();
  
    canvas.width = width;
    canvas.height = height;
  
    if(context){

    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);
  
    const img = new Image();
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);
  
    img.onload = function () {
      context.drawImage(img, 0, 0);
      URL.revokeObjectURL(url);
  
      const imgURI = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
      const link = document.createElement('a');
      link.href = imgURI;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  
    img.src = url;
    }
  };