import React from 'react';
import '../styles/Dictionary.css';

const Dictionary = () => {
  return (
    <div className="dictionary-container">
      <div className="dictionary-image">
        <img
          src="img/bro2.png" 
          alt="Astronot kaskı"
        />
      </div>
      <div className="dictionary-content">
        <h2>Teknik Sözlük</h2>
        <p>
          <a href="https://www.techcareer.net/dictionary" className="dictionary-link">Teknoloji alanına yabancı mısın?</a>
        </p>
        <p>
          Bu dünyada uzayı kaçırmamak için A'dan Z'ye tüm teknoloji terimlerinin
          tanımlarını senin için hazırladığımız teknoloji sözlüğünde bulabilirsin!
        </p>
        <a href="https://www.techcareer.net/dictionary">
        <button className="dictionary-button">İncele</button> </a>
      </div>
    </div>
  );
};

export default Dictionary;
