import React from "react";
import "../styles/Jobs.css";

const jobsData = [
  {
    id: 1,
    title: "Sistem ve Ağ Mühendisi",
    company: "Alışan Şirketler Grubu",
    logo: "img/alisan.png",
    tags: ["Lojistik", "GPO", "NPS"],
    location: "İstanbul (Asya)",
    type: "İş Yerinde",
    employment: "Tam Zamanlı",
    label: "yeni"
  },
  {
    id: 2,
    title: "Bilgi Güvenliği & IT Uzmanı",
    company: "ISS Türkiye",
    logo: "img/iss.png",
    tags: ["Excel", "IT", "Inventory"],
    location: "İstanbul (Avr.)",
    type: "Hibrit",
    employment: "Tam Zamanlı",
    label: "bugün"
  },
  {
    id: 3,
    title: "Bilgi Teknolojileri / IT Uzmanı",
    company: "YAYLA AGRO GIDA SANAYİ VE TİCAR...",
    logo: "img/yayla.png",
    tags: ["Bilgi Teknolojileri", "Mühendislik"],
    location: "Ankara",
    type: "İş Yerinde",
    employment: "Tam Zamanlı",
    label: "son-gün"
  }
];

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <div className="job-header">
        <div className="job-logo-title">
          <img src={job.logo} alt={job.company} className="job-logo" />
          <div>
            <div className="job-title">{job.title}</div>
            <div className="job-company">{job.company}</div>
          </div>
        </div>
        <span className={`job-label ${job.label}`}>{job.label === "yeni" ? "Yeni" : job.label === "bugün" ? "Bugün" : "Son Gün"}</span>
      </div>
      <div className="job-tags">
        {job.tags.map((tag, index) => (
          <span key={index} className="job-tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="job-details">
        {job.location} &middot; {job.type} &middot; {job.employment}
      </div>
    </div>
  );
};

const Jobs = () => {
  return (
    <div className="jobs-container">
      <h1>Kariyer Fırsatlarını Kaçırma</h1>
      {jobsData.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default Jobs;
