import React, { useState, useRef, useEffect } from 'react';
import GIF from '@dhdbstjr98/gif.js'

const RotatingGifGenerator: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [generating, setGenerating] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.addEventListener('paste', handlePaste);
    return () => {
      document.removeEventListener('paste', handlePaste);
    };
  }, []);

  const handlePaste = (event: ClipboardEvent) => {
    const items = event.clipboardData?.items;
    if (items) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') !== -1) {
          const blob = items[i].getAsFile();
          if (blob) {
            const reader = new FileReader();
            reader.onload = (e) => setImage(e.target?.result as string);
            reader.readAsDataURL(blob);
          }
        }
      }
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImage(e.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const generateGif = async () => {
    if (!image || !canvasRef.current) return;

    setGenerating(true);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.src = image;
    await new Promise((resolve) => (img.onload = resolve));

    const size = Math.min(img.width, img.height);
    canvas.width = size;
    canvas.height = size;

    const gif = new GIF({
      workers: 2,
      quality: 10,
      width: size,
      height: size,
      background: '#ffffff',
    });

    for (let angle = 0; angle < 360; angle += 10) {
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, size, size);
      ctx.save();
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
      ctx.clip();
      ctx.translate(size / 2, size / 2);
      ctx.rotate((angle * Math.PI) / 180);
      ctx.drawImage(img, -size / 2, -size / 2, size, size);
      ctx.restore();
      gif.addFrame(ctx, { copy: true, delay: 50 });
    }

    gif.on('finished', (blob: Blob) => {
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'rotating-image.gif';
      link.click();
      setGenerating(false);
    });

    gif.render();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Rotating GIF Generator</h1>
      <div className="mb-4 text-center">
        <button
          onClick={() => fileInputRef.current?.click()}
          className="px-4 py-2 bg-blue-500 text-white rounded-full mr-2 hover:bg-blue-600 transition-colors"
        >
          Upload Image
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
        <p className="mt-2 text-sm text-gray-600">
          Or paste an image anywhere on the page
        </p >
      </div>
      {image && (
        <div className="mb-4 w-64 h-64 rounded-full overflow-hidden">
          < img src={image} alt="Uploaded" className="w-full h-full object-cover" />
        </div>
      )}
      <button
        onClick={generateGif}
        disabled={!image || generating}
        className="px-6 py-3 bg-blue-500 text-white rounded-full disabled:bg-gray-400 hover:bg-blue-600 transition-colors"
      >
        {generating ? 'Generating...' : 'Generate Rotating GIF'}
      </button>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
};

export default RotatingGifGenerator;