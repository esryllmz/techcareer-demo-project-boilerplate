import React, { useState, useEffect } from "react";
import "../styles/Comments.css";

const comments = [
  {
    id: 1,
    name: "Melek Kaya",
    bootcamp: "Tech Recruitment Bootcamp",
    comment:
      "Bootcamp bana IT dünyasını bir işe alımcının gözünden en ince ayrıntısına kadar, keyifli ve öğretici şekilde aktardı. İçinde bulunmaktan çok keyif aldığım, bolca pratik yapma şansı sunan bir eğitim oldu.",
    image: "img/Ellipse2.png",
  },
  {
    id: 2,
    name: "Beyza Yüksel",
    bootcamp: "ASP.Net Core Bootcamp",
    comment:
      "Yaptığımız projelerde iş hayatı için bizi hazırladı bu yüzden çok mutluyum. Çok verimli güzel bir süreçti emeği olan herkese teşekkür ederim.",
    image: "img/Ellipse1.png",
  },
  {
    id: 3,
    name: "Ömer Faruk Üçer",
    bootcamp: "SQL Bootcamp",
    comment:
      "Bootcamp süreci benim için verimli ve istikrarlı bir şekilde geçti. Ders öncesi yapılacakların önceden bildirilmesi, dersin nasıl işleneceği hakkında bilgi verilmesi, ders esnasında, ders arasında, ders dışında eğitmene ulaşıp soru sorabilme imkanı beni ziyadesiyle memnun etti.",
    image: "img/Ellipse3.png",
  },
  {
    id: 4,
    name: "Emre Tüzünoğlu",
    bootcamp: "Back-End Bootcamp",
    comment:
      "Değerlendirme aşamasından Bootcamp final sunumuna kadar geçen her an çok keyifli ve verimliydi. Çok şey öğrendiğim ve öğrendiklerimi uygulama fırsatı bulduğum dolu dolu bir 6 hafta geçirdim.",
    image: "img/Ellipse4.png",
  },
  {
    id: 5,
    name: "Ayşe Yılmaz",
    bootcamp: "Front-End Bootcamp",
    comment:
      "Eğitim içeriği oldukça kapsamlı ve faydalıydı. Front-End teknolojilerine giriş yaparken pratik uygulamalarla öğrendiklerimi pekiştirdim.",
    image: "img/Ellipse1.png",
  },
  {
    id: 6,
    name: "Ahmet Çelik",
    bootcamp: "Data Science Bootcamp",
    comment:
      "Bootcamp süresince veri bilimi ile ilgili pek çok yeni şey öğrendim ve projelerde öğrendiklerimi uygulama fırsatı buldum.",
    image: "img/Ellipse3.png",
  },
];

const Comments = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 3 >= comments.length ? 0 : prevIndex + 3
      );
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  const visibleComments = [
    ...comments.slice(currentIndex, currentIndex + 3),
    ...comments.slice(0, Math.max(0, currentIndex + 3 - comments.length)),
  ];

  return (
    <div className="comments-container">
      <h2 className="title">Katılımcı Yorumlarıyla Fark Yaratan Deneyimler</h2>
      <div className="slideshow">
        {visibleComments.map((comment, index) => (
          <div
            key={comment.id}
            className={`comment-card ${
              index % 2 === 0 ? "white-card" : "blue-card"
            }`}
          >
            <div className="comment-content">
              <img
                src={comment.image}
                alt={`${comment.name} profile`}
                className="profile-img"
              />
              <div className="comment-text">
                <h5 className="comment-name">{comment.name}</h5>
                <p className="comment-bootcamp">{comment.bootcamp}</p>
                <p className="comment-body">{comment.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
     
      <a
        href="https://www.techcareer.net/user-stories"
        target="_blank"
        rel="noopener noreferrer"
        className="see-all-button"
      >
        Tümünü Gör
      </a>
    </div>
  );
};

export default Comments;
