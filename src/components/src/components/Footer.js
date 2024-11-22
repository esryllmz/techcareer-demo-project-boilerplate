import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <>
      <section className="c-bg py-5">
        <div className="d-flex flex-column align-items-center text-center text-white">
          <h2 className="text-sir mb-3">Şirketiniz için Teknoloji yeteneği mi arıyorsunuz?</h2>
          <h3 className="text-bir mb-4">
            Birlikte etkinlik düzenlemek ve size ulaşmamız için şirket e-mail adresinizi girin! 🚀
          </h3>

          <div className="container">
            <div className="row d-flex justify-content-center align-items-center my-4">
              <div className="col-md-6" style={{  width: "600px" }}>
                <div className="search">
                  <i className="fa-solid fa-envelope"></i>
                  <input type="text" className="form-control" placeholder="Şirket E-Mail Adresiniz" />
                  <button className="btn btn-primary">Gönder</button>
                </div>
              </div>
            </div>
          </div>

          <p className="s-item-t">Tüm soru ve önerileriniz için;</p>

          <div className="d-flex align-items-center">
            <div className="list-inline-item m-0">
              <a href="mailto:hello@techcareer.net" className="s-item-info">hello@techcareer.net</a>
            </div>
            <div className="border-start border-1 mx-3" style={{ height: "25px" }}></div>
            <div className="list-inline-item">
              <a href="tel:02164687600" className="s-item-info">0216 468 76 00</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="f-bg py-4">
        <div className="container">
          <div className="row border-bottom pb-4">
            <div className="col-lg-2">
              <h5 className="f-header text-lg-start text-center">TECHCAREER</h5>
              <ul className="nav flex-column d-lg-block d-none">
                {["Hakkımızda", "Etkinliklerimiz", "Şirketler İçin", "Eğitmen Ol", "İş Birliği", "İletişim"].map((item) => (
                  <li className="nav-item" key={item}>
                    <a href="#" className="fw-semibold f-item">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-lg-2">
              <h5 className="f-header text-lg-start text-center">Başvur</h5>
              <ul className="nav flex-column d-lg-block d-none">
                {["Bootcamp", "Hackathon", "Hiring Challenge", "İş İlanları"].map((item) => (
                  <li className="nav-item" key={item}>
                    <a href="#" className="fw-semibold f-item">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-lg-2">
              <h5 className="f-header text-lg-start text-center">SENİN İÇİN</h5>
              <ul className="nav flex-column d-lg-block d-none">
                {["Komünite", "TDC", "Blog", "Podcast", "Kariyer Rehperi", "Teknik Sözlük"].map((item) => (
                  <li className="nav-item" key={item}>
                    <a href="#" className="fw-semibold f-item">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-lg-2">
              <h5 className="f-header text-lg-start text-center">VERİ POLİTİKAMIZ</h5>
              <ul className="nav flex-column d-lg-block d-none">
                {["Aydınlatma Metni", "Hizmet Sözleşmesi", "Açık Rıza Metni", "Çerez Politikası"].map((item) => (
                  <li className="nav-item" key={item}>
                    <a href="#" className="fw-semibold f-item">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-lg-4">
              <div className="text-lg-start text-center mb-5">
                <img src="img/techcareer-logo.svg" alt="Techcareer Logo" />
                <p className="f-item-lg mt-3">Türkiye’nin teknoloji kariyeri platformu</p>
              </div>
              <div>
                <div className="text-lg-start text-center">
                  <h5 className="f-header">SOSYAL MEDYA</h5>
                  <ul className="list-inline">
                    {["linkedin", "twitter", "instagram", "youtube", "facebook"].map((platform) => (
                      <li className="list-inline-item" key={platform}>
                        <a href="#" className="btn btn-social">
                          <i className={`fa-brands fa-${platform}`}></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="row text-center my-4">
            <div className="col-lg-6 text-lg-start">
              <div className="list-inline d-flex align-items-center">
                <div className="list-inline-item list-leg m-0">
                  <a href="#" className="f-item-lg">TR</a>
                </div>
                <div className="border-start border-1 mx-3" style={{ height: "25px" }}></div>
                <div className="list-inline-item list-leg">
                  <a href="#" className="f-item-lg">EN</a>
                </div>
              </div>
            </div>

            <div className="col-lg-6 text-lg-end">
              <div className="list-inline">
                <div className="list-inline-item">
                  <span className="list-text">Tüm hakları saklıdır</span>
                </div>
                <div className="list-inline-item">
                  <span className="list-text">© Copyright 2024</span>
                </div>
                <div className="list-inline-item">
                  <a href="mailto:support@techcareer.net" className="list-text text-decoration-none">
                    support@techcareer.net
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
