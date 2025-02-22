import React, { useState, useRef } from 'react';
import {Shield, Upload, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';


function Check() {
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.type === 'audio/mpeg' || selectedFile.type === 'audio/wav') {
        setFile(selectedFile);
        setUploadStatus('idle');
        setErrorMessage('');
      } else {
        setErrorMessage('Please select an MP3 or WAV file');
        setFile(null);
      }
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setIsUploading(true);
    setUploadStatus('idle');

    try {
      const formData = new FormData();
      formData.append('audio', file);

      // Replace with your actual API endpoint
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Upload failed');

      const data = await response.json();
      console.log('Upload response:', data);
      setUploadStatus('success');
    } catch (error) {
      console.error('Upload error:', error);
      setUploadStatus('error');
      setErrorMessage('Failed to upload file. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && (droppedFile.type === 'audio/mpeg' || droppedFile.type === 'audio/wav')) {
      setFile(droppedFile);
      setUploadStatus('idle');
      setErrorMessage('');
    } else {
      setErrorMessage('Please drop an MP3 or WAV file');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">ScamShield AI</span>
            </div>
              <Link to="/" className="ml-6 text-gray-700 hover:text-indigo-600">Home</Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/community" className="text-indigo-600 hover:text-indigo-700 font-medium">Community</Link>
              <Link to="/check" className="text-indigo-600 hover:text-indigo-700 font-medium">Call Detector</Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">

        <div className="w-full max-w-2xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Audio Analysis</h1>
            <p className="text-gray-600">Upload your audio file for AI-powered analysis</p>
          </div>

          <div 
            className={`
              border-2 border-dashed rounded-lg p-8 text-center
              ${file ? 'border-indigo-600 bg-indigo-50' : 'border-gray-300 bg-white'}
              hover:border-indigo-500 transition-colors duration-200
            `}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".mp3,.wav"
              className="hidden"
            />

            <div className="mb-4">
              <Upload 
                className={`w-12 h-12 mx-auto ${file ? 'text-indigo-600' : 'text-gray-400'}`}
              />
            </div>

            {!file && (
              <div>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="text-indigo-600 font-medium hover:text-indigo-500"
                >
                  Click to upload
                </button>
                <span className="text-gray-500"> or drag and drop</span>
                <p className="text-gray-500 text-sm mt-1">MP3 or WAV files only</p>
              </div>
            )}

            {file && (
              <div>
                <p className="text-gray-700 font-medium mb-4">{file.name}</p>
                <button
                  onClick={handleUpload}
                  disabled={isUploading}
                  className={`
                    px-4 py-2 rounded-md font-medium
                    ${isUploading 
                      ? 'bg-indigo-400 cursor-not-allowed' 
                      : 'bg-indigo-600 hover:bg-indigo-500'}
                    text-white transition-colors duration-200
                  `}
                >
                  {isUploading ? (
                    <span className="flex items-center">
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Uploading...
                    </span>
                  ) : (
                    'Analyze Audio'
                  )}
                </button>
              </div>
            )}
          </div>

          {errorMessage && (
            <div className="mt-4 p-4 bg-red-50 rounded-md flex items-center text-red-700">
              <AlertCircle className="w-5 h-5 mr-2" />
              {errorMessage}
            </div>
          )}

          {uploadStatus === 'success' && (
            <div className="mt-4 p-4 bg-green-50 rounded-md flex items-center text-green-700">
              <CheckCircle2 className="w-5 h-5 mr-2" />
              File uploaded successfully! Analysis results will appear here.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Check;