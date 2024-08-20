'use client';
import React, { useState } from 'react';
import { PDFDocument, rgb } from 'pdf-lib';
import { Document, Packer, Paragraph } from 'docx';

const VTTConverter = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [format, setFormat] = useState('');
  const [convertedContent, setConvertedContent] = useState(null);
  const [showDownloadButton, setShowDownloadButton] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.name.endsWith('.vtt')) {
      setSelectedFile(file);
      setShowDownloadButton(false); // Hide the download button when a new file is selected
    } else {
      alert('Please select a .vtt file');
    }
  };

  const handleFormatChange = (event) => {
    setFormat(event.target.value);
    setShowDownloadButton(false); // Hide the download button when the format is changed
  };

  const convertFile = async (content) => {
    switch (format) {
      case 'srt':
        // Convert VTT content to SRT format
        const srtContent = content
          .replace(/WEBVTT\n\n/g, '')
          .replace(/(\d{2}:\d{2}:\d{2})\.(\d{3}) --> (\d{2}:\d{2}:\d{2})\.(\d{3})/g, '$1,$2 --> $3,$4');
        return new Blob([srtContent], { type: 'text/srt;charset=utf-8' });

      case 'docx':
        const doc = new Document({
          sections: [
            {
              children: content.split('\n').map(line => new Paragraph(line)),
            },
          ],
        });
        return await Packer.toBlob(doc);

      case 'pdf':
        const pdfDoc = await PDFDocument.create();
        const page = pdfDoc.addPage([600, 400]);
        const { width, height } = page.getSize();
        const fontSize = 12;

        content.split('\n').forEach((line, index) => {
          page.drawText(line, {
            x: 50,
            y: height - fontSize * (index + 2),
            size: fontSize,
            color: rgb(0, 0, 0),
          });
        });

        const pdfBlob = await pdfDoc.saveAsBase64({ dataUri: true });
        return fetch(pdfBlob).then(res => res.blob());

      default:
        return new Blob([content], { type: 'text/plain;charset=utf-8' });
    }
  };

  const handleConvert = async () => {
    if (selectedFile && format) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const content = e.target.result;
        const converted = await convertFile(content);
        setConvertedContent(converted);
        setShowDownloadButton(true); // Show the download button after conversion
      };
      reader.readAsText(selectedFile);
    } else {
      alert('Please select a file and format');
    }
  };

  const downloadConvertedFile = () => {
    if (convertedContent) {
      const url = URL.createObjectURL(convertedContent);
      const link = document.createElement('a');
      link.href = url;
      link.download = `converted.${format}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Refresh the page after the download
      window.location.reload();
    }
  };

  return (
    <div className="flex flex-col p-6 max-w-md mx-auto text-black">
      <h2 className="text-2xl font-bold mb-1 text-black">Select your file</h2>
      <div className='bg-[#4496d9] py-[3px] mb-4 mt-[2px] w-12'></div>
      <div className="w-full mb-6">
        <label className="block mb-4 text-sm text-black">Choose a .vtt file to convert</label>
        <div className="relative">
          <input
            type="text"
            placeholder="No file selected"
            className="block w-full px-3 py-2 text-black border border-gray-300 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
            readOnly
            value={selectedFile ? selectedFile.name : ''}
          />
          <input
            type="file"
            accept=".vtt"
            onChange={handleFileChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <button
            className="absolute inset-y-0 right-0 px-4 py-2 text-black bg-gray-400 rounded-r-lg hover:bg-gray-500"
            onClick={() => document.querySelector('input[type="file"]').click()}
          >
            Browse
          </button>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-2 text-gray-300 ">Converted file format</h2>
      <div className='bg-[#4496d9] py-[3px] mb-4 mt-[2px] w-12'></div>
      <div className="w-full mb-6">
        <label className="block mb-4 text-sm text-gray-400">Choose {format || ' Select Format '} to convert your file</label>
        <select
          value={format}
          onChange={handleFormatChange}
          className="block w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          <option value="">-- Select Format --</option>
          <option value="srt">SubRip Subtitle (.srt)</option>
          <option value="ass">Substation Alpha (.ass)</option>
          <option value="txt">Text (.txt)</option>
          <option value="html">HTML (.html)</option>
          <option value="pdf">PDF (.pdf)</option>
          <option value="docx">Word (.docx)</option>
        </select>
      </div>

      <button
        onClick={handleConvert}
        className="w-full px-5 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        CONVERT FILE
      </button>

      {showDownloadButton && convertedContent && (
        <button
          onClick={downloadConvertedFile}
          className="w-full px-5 py-3 mt-4 text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          DOWNLOAD CONVERTED FILE
        </button>
      )}
    </div>
  );
};

export default VTTConverter;
