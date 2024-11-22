import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/Carousel.css'

const Carousel = () => {
  
    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1, 
        dots: true, 
        arrows: true, 
        autoplay: true, 
        autoplaySpeed: 3000, 
        prevArrow: <button type="button" className="slick-prev">←</button>, 
        nextArrow: <button type="button" className="slick-next">→</button> 
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                <div>
                    <a href="https://www.techcareer.net/hackathon/luxoft-parking-hackathon" target="_blank" rel="noopener noreferrer">
                        <img src="img/1.webp" alt="TechReport2024 Yazılımcı Anketi" />
                    </a>
                </div>
                <div>
                    <a href="https://survey.alchemer.com/s3/8068418/N240021" target="_blank" rel="noopener noreferrer">
                        <img src="img/2.webp" alt="Yazılımcı Anketi" />
                    </a>
                </div>
                <div>
                    <a href="https://www.techcareer.net/dictionary?utm_source=tcnet-community&utm_medium=banner&utm_campaign=teknik-sozluk" target="_blank" rel="noopener noreferrer">
                        <img src="img/3.webp" alt="Techcareer.net Video Eğitimleri" />
                    </a>
                </div>
                <div>
                    <a href="https://www.techcareer.net/courses" target="_blank" rel="noopener noreferrer">
                        <img src="img/4.webp" alt="Techcareer.net Video Eğitimleri" />
                    </a>
                </div>
                <div>
                    <a href="https://www.techcareer.net/jobs" target="_blank" rel="noopener noreferrer">
                        <img src="img/5.webp" alt="Techcareer.net Video Eğitimleri" />
                    </a>
                </div>
                <div>
                    <a href="https://kariyer.typeform.com/to/D3yn9U0w?_gl=1*4c1tcn*_gcl_au*MTU3MjM1MzE5NS4xNzI1NzA2NzQ5*_ga*MjI3NTI3ODU3LjE2OTIwMzc3MTg.*_ga_E0FGSHPKVP*MTczMjIyNzk0MC4xOC4xLjE3MzIyMjg3MTMuNS4wLjA.*_fplc*T0EyQ0RWY1NuOEpuZXp6S0RUajRWeSUyQlFoWkZBQ1loemFVbUpvRUZ5UGRueTY3R2RUMEUzJTJGY1gwSGRmJTJGbmxsdEU2ZEYyWlUyaGJHMkc2N1lpUmhHdE9qbUZLZU5JQzJXcXQ3aWpYRlp4c1VhOENxNDRUeHhud2MxVlROcjBRJTNEJTNE&typeform-source=www.techcareer.net" target="_blank" rel="noopener noreferrer">
                        <img src="img/6.webp" alt="Techcareer.net Video Eğitimleri" />
                    </a>
                </div>
                <div>
                    <a href="https://www.twitch.tv/techcareernet?utm_source=tcnet_kommunity&utm_medium=banner&utm_campaign=tcnet_twitch&_gl=1*isxne2*_gcl_au*MTU3MjM1MzE5NS4xNzI1NzA2NzQ5*_ga*MjI3NTI3ODU3LjE2OTIwMzc3MTg.*_ga_E0FGSHPKVP*MTczMjIyNzk0MC4xOC4xLjE3MzIyMjg3MzcuNjAuMC4w*_fplc*T0EyQ0RWY1NuOEpuZXp6S0RUajRWeSUyQlFoWkZBQ1loemFVbUpvRUZ5UGRueTY3R2RUMEUzJTJGY1gwSGRmJTJGbmxsdEU2ZEYyWlUyaGJHMkc2N1lpUmhHdE9qbUZLZU5JQzJXcXQ3aWpYRlp4c1VhOENxNDRUeHhud2MxVlROcjBRJTNEJTNE" target="_blank" rel="noopener noreferrer">
                        <img src="img/7.webp"alt="Techcareer.net Video Eğitimleri" />
                    </a>
                </div>
                <div>
                    <a href="https://www.techcareer.net/blog" target="_blank" rel="noopener noreferrer">
                        <img src="img/8.webp" alt="Techcareer.net Video Eğitimleri" />
                    </a>
                </div>
                <div>
                    <a href="https://cdn.gcp.techcareer.net/Tech_Report_2023_Yazilimci_ve_Isveren_Arastirmasi_Raporu_24_72478c3bae/Tech_Report_2023_Yazilimci_ve_Isveren_Arastirmasi_Raporu_24_72478c3bae.pdf?utm_source=aday&utm_medium=banner&utm_campaign=techreport-2023&_gl=1*i10jdv*_gcl_au*MTU3MjM1MzE5NS4xNzI1NzA2NzQ5*_ga*MjI3NTI3ODU3LjE2OTIwMzc3MTg.*_ga_E0FGSHPKVP*MTczMjIyNzk0MC4xOC4xLjE3MzIyMjg3NjguMjkuMC4w*_fplc*T0EyQ0RWY1NuOEpuZXp6S0RUajRWeSUyQlFoWkZBQ1loemFVbUpvRUZ5UGRueTY3R2RUMEUzJTJGY1gwSGRmJTJGbmxsdEU2ZEYyWlUyaGJHMkc2N1lpUmhHdE9qbUZLZU5JQzJXcXQ3aWpYRlp4c1VhOENxNDRUeHhud2MxVlROcjBRJTNEJTNE" target="_blank" rel="noopener noreferrer">
                        <img src="img/9.webp" alt="Techcareer.net Video Eğitimleri" />
                    </a>
                </div>
              
            </Slider>

            
        </div>
    );
};

export default Carousel;
