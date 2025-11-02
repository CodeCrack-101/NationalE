import React from 'react';
import './Download.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const pdfFiles = [
  { name: 'Canvas', url: './canvas.pdf' },
  { name: 'Selfiepoint', url: '/selfiepoint.pdf' },
  { name: 'Mirabell PVC', url: '/Mirable.pdf' },
  { name: 'Sky', url: '/Sky.pdf' },
  { name: 'Texture Touch', url: '/Texture.pdf' },
  { name: 'Urbano', url: '/Urban.pdf' },
  { name: 'Wall Flora', url: '/wallflora.pdf' },
];

const Download = () => {
  return (
    <div className="download-container">
      <h2 className="download-title">Download Catalogue</h2>
      <p className="download-subtitle">Please select a PDF to download.</p>
      

      <div className="download-flex">
        {pdfFiles.map((file, index) => (
          <a
            key={index}
            href={file.url}
            download
            className="download-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="c">
                {file.name}
            </div>

          </a>
        ))}
      </div>
    </div>
  );
};

export default Download;
