import React from 'react';
import { useNavigate } from 'react-router-dom';

function ResultsPage({ sugarContent, firmness, tat, ripeness}) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <body style={{background: 'linear-gradient(#D1D1AB, #519031)', height: '100vh', color:'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <div style={{ textAlign: 'center', paddingTop: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <div style={{textAlign: 'center', backgroundColor: 'rgba(160, 208, 181, 0.7)', width: '70%', padding:'20px', boxShadow:'0px 10px 25px rgba(0,0,0,0.2)', borderRadius: '15px'}}>

      <h2>Predicted Mango Sugar Content</h2>
      <p style={{ fontSize: '20px' }}>Sugar Content: <strong>{sugarContent ? `${sugarContent}%` : 'N/A'}</strong></p>
      <h2>Predicted Mango Firmness</h2>
      <p style={{ fontSize: '20px' }}>Firmness: <strong>{firmness ? `${firmness}` : 'N/A'}</strong></p>
      <h2>Predicted Mango Total Acidic</h2>
      <p style={{ fontSize: '20px' }}>Total Acidic: <strong>{tat ? `${tat}` : 'N/A'}</strong></p>

      </div>

      <div style={{textAlign: 'center', backgroundColor: 'rgba(160, 208, 181, 0.7)', width: '70%', padding:'20px', boxShadow:'0px 10px 25px rgba(0,0,0,0.2)', borderRadius: '15px', marginTop: '20px'}}>
      <h2>Predicted Mango Ripeness</h2>
      <p style={{ fontSize: '20px' }}>Ripeness Stage: <strong>{ripeness ? `${ripeness}` : 'N/A'}</strong></p>
      </div>
      <button onClick={handleBack} style={{ marginTop: '20px', padding: '10px 20px', borderRadius: '15px' }}>
        Back to Home
      </button>
    </div>
    </body>
  );
}

export default ResultsPage;
