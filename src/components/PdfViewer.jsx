"use client";
import React, { useEffect, useRef, useState } from "react";
import { pdfjs } from "pdfjs-dist";

interface PdfViewerProps {
  fileUrl: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ fileUrl }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPdf = async () => {
      try {
        const pdf = await pdfjs.getDocument(fileUrl).promise;
        const page = await pdf.getPage(1); // Load the first page

        const viewport = page.getViewport({ scale: 1.5 }); // Adjust scale for better resolution
        const canvas = canvasRef.current;

        if (canvas) {
          const context = canvas.getContext("2d");
          if (context) {
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            // Render the PDF page onto the canvas
            await page.render({
              canvasContext: context,
              viewport: viewport,
            });
          }
        }
        setIsLoading(false);
      } catch (error) {
        setError("Failed to load PDF.");
        setIsLoading(false);
      }
    };

    loadPdf();
  }, [fileUrl]);

  if (isLoading) {
    return <div>Loading PDF...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return <canvas ref={canvasRef}></canvas>;
};

export default PdfViewer;
