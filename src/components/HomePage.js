import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function HomePage({ setSugarContent, setFirmness, setTat, setRipeness}) {
  const [image, setImage] = useState(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  // Function to handle image upload
  const handleImageUpload = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  // Function to open the camera
  const openCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      setIsCameraOpen(true);
    } catch (err) {
      console.error('Error accessing camera:', err);
      alert('Unable to access camera.');
    }
  };

  // Function to capture the image from the camera
  const captureImage = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    // Stop the camera stream after capturing
    video.srcObject.getTracks().forEach(track => track.stop());
    
    const dataUrl = canvas.toDataURL('image/png');
    setImage(dataUrl);
    setIsCameraOpen(false);
  };

  const handlePrediction = async () => {
    if (!image) {
      alert("Please upload or capture an image.");
      return;
    }

    // const formData = new FormData();
    // formData.append('file', image);

    try {

    // Fetch blob data from the blob URL
    const response = await fetch(image);  // `image` is your blob URL
    const blob = await response.blob();
    
    // Convert the blob to a File object
    const file = new File([blob], "mango.jpg", { type: blob.type });

    // Append file to FormData
    const formData = new FormData();
    formData.append("file", file);
      console.log("Start to receive data")
      const result = await axios.post('http://192.168.115.235:5000/predict', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log("Start to receive data")
      setSugarContent(result.data.sugar_content);
      setFirmness(result.data.firmness);
      setTat(result.data.tat);
      setRipeness(result.data.ripeness);
      console.log("Data received from server")
      
      navigate('/results');
    } catch (error) {
      console.error('Error fetching prediction:', error);
      alert('Error predicting sugar content.');
    }
  };


  return (
    <body style={{background: 'linear-gradient(#D1D1AB, #519031)', height: '100vh'}}>

    <div style={{ textAlign: 'center', paddingTop: '50px', color:'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%'}}>
      <h1 style={{textShadow:'0px 4px 10px rgba(0, 0, 0, 0.4)'}}>RANUM</h1>
      <h2 style={{textShadow:'0px 4px 10px rgba(0, 0, 0, 0.4)'}}> Aplikasi Prediksi Kualitas Mangga Gedong Gincu Menggunakan Machine Learning</h2>
      <p>Upload an image of a mango or capture one using your camera:</p>
      
      <div style={{textAlign: 'center', backgroundColor: 'rgba(160, 208, 181, 0.7)', width: '70%', padding:'20px', boxShadow:'0px 10px 25px rgba(0,0,0,0.2)', borderRadius: '15px'}}>

      {!isCameraOpen && (
        <>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          <br />
          <button onClick={handlePrediction} style={{ marginTop: '20px', padding: '10px 20px', borderRadius: '15px'}}>
            Predict Mango Quality
          </button>
          <br />
          <button onClick={openCamera} style={{ marginTop: '20px', padding: '10px 20px', borderRadius: '15px' }}>
            Use Camera
          </button>
        </>
      )}
      </div>

      {isCameraOpen && (
        <div>
          <video ref={videoRef} autoPlay style={{ width: '100%', maxWidth: '400px' }}></video>
          <br />
          <button onClick={captureImage} style={{ marginTop: '20px', padding: '10px 20px' }}>
            Capture Image
          </button>
        </div>
      )}

      {/* Canvas for capturing image from video */}
      <canvas ref={canvasRef} style={{ display: 'none' }} width="400" height="300"></canvas>

      {/* Display the selected/captured image */}
      {image && (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
          <h3>Selected Image</h3>
          <img src={image} alt="Captured Mango" style={{ width: '40%', maxWidth: '400px', marginTop: '10px', height: 'auto', display: 'block' }} />
        </div>
      )}
    </div>
    </body>
  );
}

export default HomePage;
