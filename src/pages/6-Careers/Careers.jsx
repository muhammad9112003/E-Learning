import { useState } from "react";
import { Link } from "react-router-dom";
import "./Careers.css";
import Nav from "../../components/1-Nav/Nav";
import Footer from "../../components/2-Footer/Footer";
import {
  HiOutlineLocationMarker,
  HiOutlineLightningBolt,
  HiOutlineHeart,
  HiOutlineAcademicCap,
  HiOutlineGlobeAlt,
  HiOutlineCurrencyDollar,
  HiOutlineCalendar,
} from "react-icons/hi";
import { BsBriefcase, BsCodeSlash } from "react-icons/bs";
import { MdOutlineSchedule } from "react-icons/md";
import { IoRocketOutline } from "react-icons/io5";
import { TbUsersGroup } from "react-icons/tb";

const Careers = () => {
  const [activeDept, setActiveDept] = useState("all");

  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description:
        "Build beautiful, responsive interfaces for our learning platform. Work with React and modern web technologies.",
      tags: ["React", "TypeScript", "Vite"],
    },
    {
      id: 2,
      title: "Content Creator & Course Designer",
      department: "Education",
      location: "Remote / Hybrid",
      type: "Full-time",
      description:
        "Create engaging course content and learning experiences that help thousands of students succeed.",
      tags: ["Instructional Design", "Video", "LMS"],
    },
    {
      id: 3,
      title: "Product Manager",
      department: "Product",
      location: "Remote",
      type: "Full-time",
      description:
        "Drive product vision and roadmap for our edtech platform. Work closely with engineering and design.",
      tags: ["Roadmap", "Agile", "Analytics"],
    },
    {
      id: 4,
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote",
      type: "Contract",
      description:
        "Design intuitive, accessible interfaces that make learning enjoyable and effective for all users.",
      tags: ["Figma", "Accessibility", "Design Systems"],
    },
  ];

  const benefits = [
    { icon: <HiOutlineGlobeAlt />, title: "Remote-first", desc: "Work from anywhere" },
    { icon: <HiOutlineLightningBolt />, title: "Flexible hours", desc: "Your schedule" },
    { icon: <HiOutlineAcademicCap />, title: "Learning budget", desc: "$2K per year" },
    { icon: <HiOutlineHeart />, title: "Health & wellness", desc: "Full coverage" },
    { icon: <HiOutlineCurrencyDollar />, title: "Competitive pay", desc: "Top of market" },
    { icon: <HiOutlineCalendar />, title: "Team retreats", desc: "Annual offsites" },
  ];

  const process = [
    { step: 1, title: "Apply", desc: "Send your resume and cover letter" },
    { step: 2, title: "Screen", desc: "30-min call with our team" },
    { step: 3, title: "Interview", desc: "Meet the team, share your work" },
    { step: 4, title: "Offer", desc: "Join the crew!" },
  ];

  const departments = ["all", "Engineering", "Education", "Product", "Design"];
  const filteredJobs = activeDept === "all" ? jobs : jobs.filter((j) => j.department === activeDept);

  return (
    <div className="careers-wrapper">
      <Nav bgColor="#FFFF" />
      <div className="careers-page">
        {/* Hero - Cinematic */}
        <section className="careers-hero">
          <div className="careers-hero-bg">
            <div className="career-blob career-blob-1" />
            <div className="career-blob career-blob-2" />
            <div className="career-mesh" />
          </div>
          <div className="careers-hero-content">
            <span className="career-badge">
              <IoRocketOutline /> We're hiring
            </span>
            <h1 className="careers-hero-title">
              Build the future of
              <span className="career-accent"> education</span>
            </h1>
            <p className="careers-hero-text">
              Join a team of passionate people on a mission to transform how
              millions learn. Remote-first, impact-driven, and always learning.
            </p>
            <a href="#jobs" className="career-hero-btn">
              View open roles
            </a>
          </div>
          <div className="hero-stats-row">
            <div className="hero-stat">
              <span className="hero-stat-num">50+</span>
              <span>Team members</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num">12</span>
              <span>Countries</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num">100%</span>
              <span>Remote</span>
            </div>
          </div>
        </section>

        {/* Culture / Why us */}
        <section className="careers-why">
          <div className="why-container">
            <span className="career-section-label">Why LearNova</span>
            <h2>Work somewhere that matters</h2>
            <div className="benefits-hex-grid">
              {benefits.map((item, index) => (
                <div
                  key={index}
                  className="benefit-hex-card"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className="benefit-hex-icon">{item.icon}</div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How we hire */}
        <section className="careers-process">
          <div className="process-container">
            <span className="career-section-label">How We Hire</span>
            <h2>Simple, transparent process</h2>
            <div className="process-timeline">
              {process.map((item, index) => (
                <div key={index} className="process-step">
                  <div className="process-step-num">{item.step}</div>
                  <div className="process-step-content">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                  {index < process.length - 1 && <div className="process-connector" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job listings */}
        <section className="careers-listings" id="jobs">
          <div className="listings-container">
            <span className="career-section-label">Open Positions</span>
            <h2>Find your role</h2>
            <div className="dept-filters">
              {departments.map((dept) => (
                <button
                  key={dept}
                  className={`dept-filter-btn ${activeDept === dept ? "active" : ""}`}
                  onClick={() => setActiveDept(dept)}
                >
                  {dept === "all" ? "All" : dept}
                </button>
              ))}
            </div>
            <div className="jobs-grid">
              {filteredJobs.map((job) => (
                <article
                  key={job.id}
                  className="job-card job-card-creative"
                  style={{ "--dept-color": getDeptColor(job.department) }}
                >
                  <div className="job-card-header">
                    <span
                      className="job-dept-badge"
                      style={{ background: getDeptColor(job.department) }}
                    >
                      {job.department}
                    </span>
                    <span className="job-type">{job.type}</span>
                  </div>
                  <h3 className="job-title">{job.title}</h3>
                  <div className="job-meta-row">
                    <span>
                      <HiOutlineLocationMarker /> {job.location}
                    </span>
                    <span>
                      <MdOutlineSchedule /> {job.type}
                    </span>
                  </div>
                  <p className="job-description">{job.description}</p>
                  <div className="job-tags">
                    {job.tags.map((tag, i) => (
                      <span key={i} className="job-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link to="/logIn" className="job-apply-btn">
                    Apply Now
                    <BsCodeSlash />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="careers-cta">
          <div className="cta-bg-shapes">
            <div className="cta-shape cta-shape-1" />
            <div className="cta-shape cta-shape-2" />
          </div>
          <div className="cta-inner">
            <TbUsersGroup className="cta-icon" />
            <h2>Don't see your role?</h2>
            <p>
              We're always looking for talented people. Send us your resume and
              we'll get in touch when something matches.
            </p>
            <Link to="/logIn" className="careers-cta-btn">
              Get in Touch
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

function getDeptColor(dept) {
  const colors = {
    Engineering: "linear-gradient(135deg, #49BBBD, #20C997)",
    Education: "linear-gradient(135deg, #F48C06, #FFB300)",
    Product: "linear-gradient(135deg, #6DB4A7, #49BBBD)",
    Design: "linear-gradient(135deg, #C583FF, #9B6BCC)",
  };
  return colors[dept] || "linear-gradient(135deg, #49BBBD, #20C997)";
}

export default Careers;
