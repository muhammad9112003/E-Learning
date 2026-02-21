import { Link } from "react-router-dom";
import "./About.css";
import Nav from "../../components/1-Nav/Nav";
import Footer from "../../components/2-Footer/Footer";
import { TbUsersGroup } from "react-icons/tb";
import { GrCertificate } from "react-icons/gr";
import { FaEarthAmericas } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { IoRocketOutline } from "react-icons/io5";
import { MdSchool } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";

const About = () => {
  const values = [
    {
      icon: <TbUsersGroup />,
      title: "Community First",
      description:
        "We believe in the power of learning together. Our community of students and educators supports each other to achieve their goals.",
      gradient: "linear-gradient(135deg, #49BBBD 0%, #20C997 100%)",
      delay: "0s",
    },
    {
      icon: <GrCertificate />,
      title: "Quality Education",
      description:
        "Every course is vetted for excellence. We partner with top experts to deliver content that makes a real impact.",
      gradient: "linear-gradient(135deg, #F48C06 0%, #FFB300 100%)",
      delay: "0.1s",
    },
    {
      icon: <FaEarthAmericas />,
      title: "Global Reach",
      description:
        "LearNova connects learners worldwide. We break down barriers so anyone, anywhere can access world-class education.",
      gradient: "linear-gradient(135deg, #6DB4A7 0%, #49BBBD 100%)",
      delay: "0.2s",
    },
  ];

  const stats = [
    { number: "250K+", label: "Students Enrolled", icon: <MdSchool /> },
    { number: "500+", label: "Expert Instructors", icon: <TbUsersGroup /> },
    { number: "50+", label: "Countries", icon: <FaEarthAmericas /> },
    { number: "16", label: "Years of Experience", icon: <BsGraphUpArrow /> },
  ];

  const timeline = [
    { year: "2008", title: "Founded", desc: "LearNova started as a small online tutoring project." },
    { year: "2012", title: "First 10K", desc: "Reached 10,000 active learners across 5 countries." },
    { year: "2018", title: "Series A", desc: "Raised funding to scale our platform globally." },
    { year: "2024", title: "250K+", desc: "Now serving over 250,000 students worldwide." },
  ];

  const testimonials = [
    { quote: "LearNova transformed how I learn. The community and quality of courses are unmatched.", author: "Sarah M.", role: "Software Engineer", rating: 5 },
    { quote: "Teaching on LearNova has been incredible. The platform makes it so easy to create engaging content.", author: "James L.", role: "Course Creator", rating: 5 },
    { quote: "I landed my dream job after completing the AWS course. Best investment I've made.", author: "Priya K.", role: "Cloud Architect", rating: 5 },
  ];

  const team = [
    { name: "Alex Chen", role: "CEO & Co-founder", initial: "A" },
    { name: "Maria Santos", role: "Head of Product", initial: "M" },
    { name: "David Park", role: "CTO", initial: "D" },
  ];

  return (
    <div className="about-wrapper">
      <Nav bgColor="#FFFF" />
      <div className="about-page">
        {/* Hero - Bold gradient with floating shapes */}
        <section className="about-hero">
          <div className="about-hero-bg">
            <div className="hero-blob hero-blob-1" />
            <div className="hero-blob hero-blob-2" />
            <div className="hero-blob hero-blob-3" />
            <div className="hero-grid" />
          </div>
          <div className="about-hero-content">
            <span className="hero-badge">Since 2008</span>
            <h1 className="about-hero-title">
              We're on a mission to
              <span className="accent-line"> transform education</span>
            </h1>
            <p className="about-hero-text">
              LearNova empowers educators and students worldwide. We create
              interactive, engaging experiences that help people learn, grow,
              and achieve their goals—anywhere, anytime.
            </p>
            <div className="hero-actions">
              <Link to="/courses" className="hero-btn hero-btn-primary">
                Explore Courses
              </Link>
              <a href="#story" className="hero-btn hero-btn-ghost">
                Our Story
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card hero-card-1">
              <IoRocketOutline />
              <span>16 years of innovation</span>
            </div>
            <div className="hero-card hero-card-2">
              <MdSchool />
              <span>250K+ learners</span>
            </div>
          </div>
        </section>

        {/* Mission - Asymmetric split */}
        <section className="about-mission" id="mission">
          <div className="mission-container">
            <div className="mission-visual">
              <div className="mission-shape" />
              <div className="mission-stats-mini">
                <div><span>75%</span> Success rate</div>
                <div><span>35</span> Questions answered daily</div>
              </div>
            </div>
            <div className="mission-content">
              <span className="section-label">Our Mission</span>
              <h2>Making quality education accessible to everyone</h2>
              <p>
                Learning should be flexible, interactive, and designed to fit
                your life. Whether you're advancing your career, exploring new
                interests, or teaching the next generation—LearNova is here to
                support you.
              </p>
              <div className="mission-pill">
                <FaEarthAmericas />
                <span>Available in 50+ countries</span>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline / Story */}
        <section className="about-story" id="story">
          <div className="story-container">
            <span className="section-label">Our Journey</span>
            <h2>Building the future of learning</h2>
            <div className="timeline">
              {timeline.map((item, index) => (
                <div key={index} className="timeline-item" style={{ animationDelay: `${index * 0.15}s` }}>
                  <div className="timeline-marker">
                    <span className="timeline-year">{item.year}</span>
                    <div className="timeline-dot" />
                  </div>
                  <div className="timeline-content">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
              <div className="timeline-line" />
            </div>
          </div>
        </section>

        {/* Values - Bento grid */}
        <section className="about-values">
          <div className="values-container">
            <span className="section-label">What We Stand For</span>
            <h2>Our core values</h2>
            <div className="values-bento">
              {values.map((item, index) => (
                <div
                  key={index}
                  className="value-card"
                  style={{ animationDelay: item.delay }}
                >
                  <div className="value-icon" style={{ background: item.gradient }}>
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="value-accent" style={{ background: item.gradient }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats - Animated cards */}
        <section className="about-stats">
          <div className="stats-container">
            <div className="stats-grid">
              {stats.map((item, index) => (
                <div key={index} className="stat-card" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="stat-icon">{item.icon}</div>
                  <span className="stat-number">{item.number}</span>
                  <span className="stat-label">{item.label}</span>
                  <div className="stat-glow" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="about-team">
          <div className="team-container">
            <span className="section-label">Meet the Team</span>
            <h2>People behind LearNova</h2>
            <div className="team-grid">
              {team.map((member, index) => (
                <div key={index} className="team-card">
                  <div className="team-avatar">{member.initial}</div>
                  <h4>{member.name}</h4>
                  <p>{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="about-testimonials">
          <div className="testimonials-container">
            <span className="section-label">What They Say</span>
            <h2>Voices from our community</h2>
            <div className="testimonials-grid">
              {testimonials.map((item, index) => (
                <div key={index} className="testimonial-card">
                  <div className="testimonial-stars">
                    {[...Array(item.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <p className="testimonial-quote">"{item.quote}"</p>
                  <div className="testimonial-author">
                    <div className="author-avatar">{item.author.charAt(0)}</div>
                    <div>
                      <strong>{item.author}</strong>
                      <span>{item.role}</span>
                    </div>
                  </div>
                  <div className="testimonial-accent" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="about-cta">
          <div className="cta-bg-pattern" />
          <div className="cta-content">
            <h2>Join our learning community</h2>
            <p>Start your journey today. Thousands of courses await.</p>
            <Link to="/courses" className="about-cta-btn">
              <span>Explore Courses</span>
              <IoRocketOutline />
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
