import React from 'react';
import '../styles/Blog.css';


const Blog = () => {
  return (
    <div className="blog-container">
      <div className="blog-content">
        <h2>Blog</h2>
        <p>
          <a href="https://www.techcareer.net/blog" className="blog-link">Teknolojinin nabzını tutun!</a>
        </p>
        <p>
          En son teknoloji haberlerinden, inceleme yazılarına, derinlemesine
          analizlerden ipuçlarına kadar teknoloji dünyasında aradığınız her şeyi
          burada bulabilirsiniz.
        </p>
        <a href="https://www.techcareer.net/blog">
        <button className="blog-button">Oku</button> </a>
      </div>
      <div className="blog-image">
        <img
          src="img/bro.png" 
          alt="Teknoloji görseli"
        />
      </div>
    </div>
  );
};

export default Blog;
