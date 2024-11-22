import React from 'react';
import '../styles/Events.css';

const events = [
  {
    id: 1,
    image: 'img/hacettepe.webp',
    alt: 'Hacettepe Üniversitesi AI Fest',
    title: 'Hacetttepe Üniversitesi: AI Fest 2024',
    description: 'Yapay Zeka Topluluğu İş Birliğiyle!',
    deadline: '20.11.2024',
    tags: ['Hackathon'],
    link: 'https://www.techcareer.net/hackathon/hacettepe-universitesi-ai-fest-2024',
  },
  {
    id: 2,
    image: 'img/mvc.webp',
    alt: 'Senior Mvc Workshop',
    title: 'Senior Mvc Workshop',
    description: 'Ücretsiz öğren, mezun ol, iş fırsatı yakala!',
    deadline: '20.11.2024',
    tags: ['Bootcamp', 'İş Fırsatı'],
    link: 'https://www.techcareer.net/bootcamp/senior-mvc-workshop-1',
  },
  {
    id: 3,
    image: 'img/hackathon.webp',
    alt: 'Luxoft Parking Hackathon',
    title: 'Luxoft Parking Hackathon',
    description: 'Üniversitelilere Özel Ücretsiz Eğitim Fırsatını Kaçırma!',
    deadline: '24.11.2024',
    tags: ['Hackathon', 'İş Fırsatı'],
    link: 'https://www.techcareer.net/hackathon/luxoft-parking-hackathon',
  },
];

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <img className="event-card__image" src={event.image} alt={event.alt} />
      <div className="event-card__due-date">
        <img className="event-card__calendar-icon" src="img/calendar.png" alt="Calendar Icon" />
        <span>Son Başvuru: {event.deadline}</span>
      </div>
      <div className="event-card__details">
        <h3 className="event-card__title">{event.title}</h3>
        <p className="event-card__description">{event.description}</p>
        <div className="event-card__tags">
          {event.tags.map((tag, index) => (
            <span key={index} className="event-card__tag">{tag}</span>
          ))}
        </div>
        <a href={event.link} target="_blank" rel="noopener noreferrer">
          <button className="event-card__button">
            Hemen Başvur <img src="img/arrow.png" alt="Arrow Icon" />
          </button>
        </a>
      </div>
    </div>
  );
};

const Events = () => {
  return (
    <div className="events">
      <div className="events__title">
        <h2>Etkinlik Dünyasını Keşfet</h2>
      </div>
      <div className="events__container">
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
      <div className="events__see-all">
        <a className="events__see-all-link" href="https://www.techcareer.net/events">
          <button className="events__see-all-button"><b>Tümünü Gör</b></button>
        </a>
      </div>
    </div>
  );
};

export default Events;
