import React from 'react';
import '../styles/Courses.css';
import { Link } from 'react-router-dom';

function Courses() {
  const courses = [
    {
      id: 1,
      image: 'img/Frame 25.png',
      title: 'React Native ile Mobil Uygulama Geliştirme',
      author: 'Hamit Mızrak',
      description: 'React Native, cross-platform mobil uygulama geliştirme framework\'üdür. Çalışmış olmanız faydalı olacaktır.',
      tags: ['React', 'Framework'],
      link: 'https://www.techcareer.net/courses/react-native-egitimi'
    },
    {
      id: 2,
      image: 'img/Frame 25 (1).png',
      title: 'Uygulamalarla SQL Eğitimi',
      author: 'Hamit Mızrak',
      description: 'SQL, veritabanı yönetimi ve veri sorgulama için kullanılan bir dildir. Bu eğitimde SQL\'in temel prensiplerini ve pratik uygulamalarını öğreneceksiniz.',
      tags: ['SQL', 'Veri Tabanı', 'SQL Server'],
      link: 'https://www.techcareer.net/courses/uygulamalarla-sql-egitimi'
    },
    {
      id: 3,
      image: 'img/Frame 25 (2).png',
      title: 'Unity ile Oyun Geliştirme',
      author: 'Ahmet Kaya',
      description: 'Unity, oyun geliştirmek için kullanılan güçlü ve esnek bir oyun motorudur. Bu eğitimde Unity\'nin temel prensiplerini ve pratik uygulamalarını öğreneceksiniz.',
      tags: ['Oyun Geliştirme', 'Unity', '2D', '3D'],
      link: 'https://www.techcareer.net/courses/unity-ile-oyun-gelistirme'
    },
  ];

  return (
    <div className="courses">
      <section className="education-cards">
        <h1>Eğitimlerle Geleceğini Şekillendir</h1>
        <div className="cards-container">
          {courses.map((course) => (
            <div className="card" key={course.id}>
              <div className="card-header">
                <img src={course.image} alt={course.title} />
              </div>
              <div className="card-body">
                <h3>{course.title}</h3>
                <p className="author">{course.author}</p>
                <p>{course.description}</p>
                <div className="tags">
                  {course.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>
             
                <a href={course.link} target="_blank" rel="noopener noreferrer">
                  <button className="basla-btn">Eğitime Başla</button>
                </a>
              </div>
            </div>
          ))}
        </div>

      
        <a href="https://www.techcareer.net/courses">
          <button className="view-all">Tümünü Gör</button>
        </a>
      </section>
    </div>
  );
}

export default Courses;
