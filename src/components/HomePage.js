import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/loader.css';

function HomePage({ setSugarContent, setFirmness, setTat, setRipeness}) {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Function to handle image upload
  const handleImageUpload = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };



  const handlePrediction = async () => {
    if (!image) {
      alert("Please upload or capture an image.");
      return;
    }

    // const formData = new FormData();
    // formData.append('file', image);
    setLoading(true); // Show loading animation
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
      const result = await axios.post('https://ml-image-process-ranum.onrender.com/predict', formData, {
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
      alert('Gagal mendeteksi mangga.');
    } finally {
      setLoading(false); // Hide loading animation
    }
  };


  return (
    <body style={{background: 'linear-gradient(#D1D1AB, #519031)', height: '100vh', fontFamily: 'helvetica'}}>

    <div style={{ textAlign: 'center', paddingTop: '30px', color:'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%'}}>
      <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.7)', padding:'0px 20px', boxShadow:'0px 10px 15px rgba(0,0,0,0.1)', borderRadius: '40px', width:'200px'}}>
        <h1 style={{color:'#58d07f'}}>🥭 RANUM</h1>
        <h3 style={{color:'#888888', paddingTop:'16px'}}>v1</h3>
      </div>
      <p style={{textShadow:'0px 4px 10px rgba(0, 0, 0, 0.4)'}}> Aplikasi Prediksi Kualitas Mangga Gedong Gincu Menggunakan Machine Learning</p>
      <p style={{width: '70vw'}}>Upload an image of a mango or capture one using your camera:</p>
      
      <div style={{textAlign: 'center', backgroundColor: 'rgba(160, 208, 181, 0.7)', width: '70vw', padding:'20px', boxShadow:'0px 10px 25px rgba(0,0,0,0.2)', borderRadius: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
          <input style={{marginTop: '20px', marginLeft: '70px' }} type="file" accept="image/*" onChange={handleImageUpload} />
          {/* Display the selected/captured image */}
          {image && (
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
              <h3>Selected Image</h3>
              <img src={image} alt="Captured Mango" style={{ width: '40%', maxWidth: '400px', marginTop: '10px', height: 'auto' }} />
            </div>
          )}
          <br />
          <button onClick={handlePrediction} style={{ marginTop: '20px', padding: '10px 20px', borderRadius: '15px', border: '2px solid', color: '#31b65d'}}>
            Predict Mango Quality
          </button>
          <br />
          {/* Show loading animation while loading */}
          {loading && <div className="loader"></div>}


      </div>
      <footer style={{ }}>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '0px', marginTop: '10px'}}>
        <img src="/Logo-SITH-22-FC.png" alt="Captured Mango" style={{ width: '100px', marginTop: '10px', height: 'auto'}} />
        <img src="/Logo_FTMD_ITB.png" alt="Captured Mango" style={{ width: '150px', marginTop: '10px', height: 'auto', marginLeft:'10px' }} />
      </div>
      </footer>


    </div>
    </body>
  );
}

export default HomePage;
