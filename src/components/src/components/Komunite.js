import React from 'react';
import '../styles/Komunite.css';

const Komunite = () => {
  return (
    <div className="komunite-container">
      <h1 className="komunite-title">Komünite</h1>
      <p className="komunite-description">
        Teknoloji Komünitesi ile hayalindeki işi bulabilir, kendini geliştirecek
        eğitimlere katılabilir ve teknoloji uzmanlarıyla tanışabilirsin!
      </p>
      <a href="https://www.techcareer.net/community">
      <button className="komunite-button">Keşfet</button> </a>
    

      <div className="komunite-cards">
        <div className="komunite-card">
          <img
            src="img/brol.png" 
            alt="Topluluk"
            className="komunite-card-image"
          />
          <h3>170+</h3>
          <p>Topluluğumuz bulunmakta</p>
        </div>

        <div className="komunite-card">
          <img
            src="img/brol2.png" 
            alt="Etkinlik"
            className="komunite-card-image"
          />
          <h3>100+</h3>
          <p>Etkinlik gerçekleştirdik</p>
        </div>

        <div className="komunite-card">
          <img
            src="img/brol3.png"
            alt="Eğitim"
            className="komunite-card-image"
          />
          <h3>455+</h3>
          <p>Eğitim gerçekleştirdik</p>
        </div>
      </div>
    </div>
  );
};

export default Komunite;
