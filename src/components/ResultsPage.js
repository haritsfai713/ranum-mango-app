import React from 'react';
import { useNavigate } from 'react-router-dom';

function ResultsPage({ sugarContent, firmness, tat, ripeness}) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <body style={{background: 'linear-gradient(#D1D1AB, #519031)', height: '100vh', color:'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'helvetica'}}>
    <div style={{ textAlign: 'center', paddingTop: '5px', marginTop: '80px', marginBottom: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.7)', padding:'0px 20px', boxShadow:'0px 10px 15px rgba(0,0,0,0.1)', borderRadius: '40px', width:'200px'}}>
        <h1 style={{color:'#58d07f'}}>🥭 RANUM</h1>
        <h3 style={{color:'#888888', paddingTop:'16px'}}>v1</h3>
      </div>
      <div style={{textAlign: 'center', backgroundColor: 'rgba(160, 208, 181, 0.7)', padding:'20px', boxShadow:'0px 10px 25px rgba(0,0,0,0.2)', borderRadius: '30px', width: '70vw', marginTop: '20px'}}>

      <h2 style={{textAlign: 'left', textShadow:'0px 4px 10px rgba(0, 0, 0, 0.3)', marginTop: '0px', marginBottom: '3px'}}>Metrik</h2>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems:'center'}}>
        <p style={{ fontSize: '20px', margin:'4px 0' }}>Sugar Content: </p>
        <p style={{ fontSize: '20px', margin:'4px 0' }}><strong>{sugarContent ? `${sugarContent}%` : 'N/A'}</strong></p>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems:'center'}}>
        <p style={{ fontSize: '20px', margin:'4px 0' }}>Firmness: </p>
        <p style={{ fontSize: '20px', margin:'4px 0' }}><strong>{firmness ? `${firmness}` : 'N/A'}</strong></p>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems:'center'}}>
        <p style={{ fontSize: '20px', margin:'4px 0' }}>Total Acidic: </p>
        <p style={{ fontSize: '20px', margin:'4px 0' }}><strong>{tat ? `${tat}` : 'N/A'}</strong></p>
      </div>

      </div>

      <div style={{textAlign: 'center', color: '#FFFFFF', backgroundColor: 'rgba(160, 208, 181, 0.7)', padding:'20px', boxShadow:'0px 10px 25px rgba(0,0,0,0.2)', borderRadius: '30px', marginTop: '20px', width: '70vw'}}>
      <h2 style={{textShadow:'0px 4px 10px rgba(0, 0, 0, 0.3)', marginTop: '1px', marginBottom:'5px'}}>Tingkat Kematangan</h2>
      {/* <p style={{ fontSize: '20px' }}>Ripeness Stage: <strong>{ripeness ? `${ripeness}` : 'N/A'}</strong></p> */}
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '0px'}}>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginBottom: '15px', marginRight: '5px'}}>
        {(ripeness === 0) ? (<img src="/leaf.png" alt="Captured Mango" style={{ width: '10vw', maxWidth: '40px', marginTop: '10px', height: 'auto', display: 'block', filter: 'drop-shadow(0px 2px 2px #000000)', transform: 'rotate(90deg)' }} />) : (<img src="/leaf.png" alt="Captured Mango" style={{ width: '10vw', maxWidth: '40px', marginTop: '10px', height: 'auto', display: 'block', filter: 'drop-shadow(0px 2px 2px #000000)', transform: 'rotate(90deg)', visibility: 'hidden' }} />)}
        {(ripeness === 3) ? (<img src="/leaf.png" alt="Captured Mango" style={{ width: '10vw', maxWidth: '40px', marginTop: '10px', height: 'auto', display: 'block', filter: 'drop-shadow(0px 2px 2px #000000)', transform: 'rotate(90deg)' }} />) : (<img src="/leaf.png" alt="Captured Mango" style={{ width: '10vw', maxWidth: '40px', marginTop: '10px', height: 'auto', display: 'block', filter: 'drop-shadow(0px 2px 2px #000000)', transform: 'rotate(90deg)', visibility: 'hidden' }} />)}
        {(ripeness === 1) ? (<img src="/leaf.png" alt="Captured Mango" style={{ width: '10vw', maxWidth: '40px', marginTop: '10px', height: 'auto', display: 'block', filter: 'drop-shadow(0px 2px 2px #000000)', transform: 'rotate(90deg)' }} />) : (<img src="/leaf.png" alt="Captured Mango" style={{ width: '10vw', maxWidth: '40px', marginTop: '10px', height: 'auto', display: 'block', filter: 'drop-shadow(0px 2px 2px #000000)', transform: 'rotate(90deg)', visibility: 'hidden' }} />)}
        {(ripeness === 4) ? (<img src="/leaf.png" alt="Captured Mango" style={{ width: '10vw', maxWidth: '40px', marginTop: '10px', height: 'auto', display: 'block', filter: 'drop-shadow(0px 2px 2px #000000)', transform: 'rotate(90deg)' }} />) : (<img src="/leaf.png" alt="Captured Mango" style={{ width: '10vw', maxWidth: '40px', marginTop: '10px', height: 'auto', display: 'block', filter: 'drop-shadow(0px 2px 2px #000000)', transform: 'rotate(90deg)', visibility: 'hidden' }} />)}
        {(ripeness === 2) ? (<img src="/leaf.png" alt="Captured Mango" style={{ width: '10vw', maxWidth: '40px', marginTop: '10px', height: 'auto', display: 'block', filter: 'drop-shadow(0px 2px 2px #000000)', transform: 'rotate(90deg)' }} />) : (<img src="/leaf.png" alt="Captured Mango" style={{ width: '10vw', maxWidth: '40px', marginTop: '10px', height: 'auto', display: 'block', filter: 'drop-shadow(0px 2px 2px #000000)', transform: 'rotate(90deg)', visibility: 'hidden' }} />)}

      </div>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginBottom: '10px', marginLeft: '20px', marginRight: '55px'}}>
        <img src="/stage5.png" alt="Captured Mango" style={{ width: '8vw', maxWidth: '40px', marginTop: '10px', height: 'auto', display: 'block', filter: 'drop-shadow(0px 2px 2px #000000)' }} />
        <img src="/stage4.png" alt="Captured Mango" style={{ width: '8vw', maxWidth: '40px', marginTop: '10px', height: 'auto', display: 'block', filter: 'drop-shadow(0px 2px 2px #000000)' }} />
        <img src="/stage3.png" alt="Captured Mango" style={{ width: '8vw', maxWidth: '40px', marginTop: '10px', height: 'auto', display: 'block', filter: 'drop-shadow(0px 2px 2px #000000)' }} />
        <img src="/stage2.png" alt="Captured Mango" style={{ width: '8vw', maxWidth: '40px', marginTop: '10px', height: 'auto', display: 'block', filter: 'drop-shadow(0px 2px 2px #000000)' }} />
        <img src="/stage1.png" alt="Captured Mango" style={{ width: '8vw', maxWidth: '40px', marginTop: '10px', height: 'auto', display: 'block', filter: 'drop-shadow(0px 2px 2px #000000)' }} />
      </div>
      <div style={{position: 'absolute', right:'30px'}}>
        <img src="/gradient.png" alt="Captured Mango" style={{ width: '28vh', height: 'auto', display: 'block', transform: 'rotate(-90deg)', filter: 'drop-shadow(0px 2px 2px #000000)' }} />
      </div>
      </div>
      </div>

      <button onClick={handleBack} style={{ marginTop: '20px', padding: '10px 20px', borderRadius: '15px', border: '2px solid', color: '#31b65d' }}>
        Back to Home
      </button>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',margin: '10px 0'}}>
        <img src="/Logo-SITH-22-FC.png" alt="Captured Mango" style={{ width: '100px', marginTop: '10px', height: 'auto', display: 'block' }} />
        <img src="/Logo_FTMD_ITB.png" alt="Captured Mango" style={{ width: '150px', marginTop: '10px', height: 'auto', display: 'block', marginLeft:'10px' }} />
      </div>
    </div>

    </body>
  );
}

export default ResultsPage;
