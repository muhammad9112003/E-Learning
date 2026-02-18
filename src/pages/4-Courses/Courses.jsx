import { useState } from "react";
import "./Courses.css";
import Nav from "../../components/1-Nav/Nav";
import Footer from "../../components/2-Footer/Footer";

const Courses = () => {
  const [courses] = useState([
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      instructor: "Lina",
      lessonInfo: "Lesson 5 of 7",
      progress: 70,
      category: "Design",
      duration: "3 Month",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      oldPrice: 100,
      price: 80,
      image:
        "https://images.pexels.com/photos/4143798/pexels-photo-4143798.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      id: 2,
      title: "AWS Certified Solutions Architect",
      instructor: "Lina",
      lessonInfo: "Lesson 5 of 7",
      progress: 70,
      category: "Design",
      duration: "3 Month",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      oldPrice: 100,
      price: 80,
      image:
        "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      id: 3,
      title: "AWS Certified Solutions Architect",
      instructor: "Lina",
      lessonInfo: "Lesson 5 of 7",
      progress: 70,
      category: "Design",
      duration: "3 Month",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      oldPrice: 100,
      price: 80,
      image:
        "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      id: 4,
      title: "AWS Certified Solutions Architect",
      instructor: "Lina",
      lessonInfo: "Lesson 5 of 7",
      progress: 70,
      category: "Design",
      duration: "3 Month",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      oldPrice: 100,
      price: 80,
      image:
        "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
  ]);

  const [categories] = useState([
    { id: 1, name: "Design", color: "#c1f5e9", icon: "✏️" },
    { id: 2, name: "Development", color: "#d9d4ff", icon: "💻" },
    { id: 3, name: "Development", color: "#d9ecff", icon: "🗄️" },
    { id: 4, name: "Business", color: "#c2f4e7", icon: "💼" },
    { id: 5, name: "Marketing", color: "#ffe1c4", icon: "📢" },
    { id: 6, name: "Photography", color: "#ffd6d6", icon: "📷" },
    { id: 7, name: "Acting", color: "#d8d8de", icon: "🎬" },
    { id: 8, name: "Business", color: "#c1f5e9", icon: "📊" },
  ]);

  return (
    <div>
      <Nav bgColor="#FFFF" />
      <div className="courses-page">
        <section className="courses-hero">
          <div className="courses-hero-header">
            <h1 className="courses-hero-title">
              Welcome back, ready for your next lesson?
            </h1>
            <button className="courses-history-btn">View history</button>
          </div>
          <div className="courses-cards">
            {courses.slice(0, 3).map((course) => (
              <article className="course-card" key={course.id}>
                <div className="course-card-image">
                  <img src={course.image} alt={course.title} />
                </div>

                <div className="course-card-content">
                  <h3 className="course-card-title">{course.title}</h3>

                  <div className="course-card-meta">
                    <div className="course-author-avatar">L</div>
                    <span className="course-author-name">
                      {course.instructor}
                    </span>
                  </div>

                  <div className="course-progress-row">
                    <div className="course-progress-bar">
                      <span
                        className="course-progress-fill"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                    <span className="course-lesson-info">
                      {course.lessonInfo}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="courses-carousel-controls">
            <button className="courses-carousel-btn" aria-label="Previous">
              &#8249;
            </button>
            <button className="courses-carousel-btn" aria-label="Next">
              &#8250;
            </button>
          </div>
        </section>

        <section className="courses-categories">
          <h2 className="courses-categories-title">
            Choice favourite course from top category
          </h2>
          <div className="categories-grid">
            {categories.map((category) => (
              <article className="category-card" key={category.id}>
                <div
                  className="category-icon-wrapper"
                  style={{ backgroundColor: category.color }}
                >
                  <span className="category-icon">{category.icon}</span>
                </div>
                <h3 className="category-name">{category.name}</h3>
                <p className="category-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmodadipiscing elit, sed do eiusmod
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="courses-recommended">
          <div className="courses-recommended-header">
            <h2 className="courses-recommended-title">
              Get choice of your course
            </h2>
            <button className="courses-see-all">See all</button>
          </div>

          <div className="recommended-grid">
            {courses.map((course) => (
              <article className="recommended-card" key={course.id}>
                <div className="recommended-image">
                  <img src={course.image} alt={course.title} />
                </div>

                <div className="recommended-content">
                  <div className="recommended-meta-row">
                    <span className="recommended-tag">{course.category}</span>
                    <span className="recommended-duration">
                      {course.duration}
                    </span>
                  </div>

                  <h3 className="recommended-title">{course.title}</h3>
                  <p className="recommended-description">
                    {course.description}
                  </p>

                  <div className="recommended-footer">
                    <div className="recommended-author">
                      <div className="recommended-author-avatar">L</div>
                      <span className="recommended-author-name">
                        {course.instructor}
                      </span>
                    </div>

                    <div className="recommended-price">
                      <span className="old-price">${course.oldPrice}</span>
                      <span className="current-price">${course.price}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="recommended-carousel-controls">
            <button
              className="recommended-carousel-btn"
              aria-label="Previous"
            >
              &#8249;
            </button>
            <button className="recommended-carousel-btn" aria-label="Next">
              &#8250;
            </button>
          </div>
        </section>

        <section className="courses-banner">
          <div className="courses-banner-inner">
            <h2 className="courses-banner-title">
              Online coaching lessons for remote learning.
            </h2>
            <p className="courses-banner-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing
              elit, sed do eiusmod tempor
            </p>
            <button className="courses-banner-btn">Start learning now</button>
          </div>
        </section>

        <section className="courses-recommended">
          <div className="courses-recommended-header">
            <h2 className="courses-recommended-title">
              The course in personal development
            </h2>
            <button className="courses-see-all">See all</button>
          </div>

          <div className="recommended-grid">
            {courses.map((course) => (
              <article className="recommended-card" key={`personal-${course.id}`}>
                <div className="recommended-image">
                  <img src={course.image} alt={course.title} />
                </div>

                <div className="recommended-content">
                  <div className="recommended-meta-row">
                    <span className="recommended-tag">{course.category}</span>
                    <span className="recommended-duration">
                      {course.duration}
                    </span>
                  </div>

                  <h3 className="recommended-title">{course.title}</h3>
                  <p className="recommended-description">
                    {course.description}
                  </p>

                  <div className="recommended-footer">
                    <div className="recommended-author">
                      <div className="recommended-author-avatar">L</div>
                      <span className="recommended-author-name">
                        {course.instructor}
                      </span>
                    </div>

                    <div className="recommended-price">
                      <span className="old-price">${course.oldPrice}</span>
                      <span className="current-price">${course.price}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="courses-recommended">
          <div className="courses-recommended-header">
            <h2 className="courses-recommended-title">Student are viewing</h2>
            <button className="courses-see-all">See all</button>
          </div>

          <div className="recommended-grid">
            {courses.map((course) => (
              <article
                className="recommended-card"
                key={`viewing-${course.id}`}
              >
                <div className="recommended-image">
                  <img src={course.image} alt={course.title} />
                </div>

                <div className="recommended-content">
                  <div className="recommended-meta-row">
                    <span className="recommended-tag">{course.category}</span>
                    <span className="recommended-duration">
                      {course.duration}
                    </span>
                  </div>

                  <h3 className="recommended-title">{course.title}</h3>
                  <p className="recommended-description">
                    {course.description}
                  </p>

                  <div className="recommended-footer">
                    <div className="recommended-author">
                      <div className="recommended-author-avatar">L</div>
                      <span className="recommended-author-name">
                        {course.instructor}
                      </span>
                    </div>

                    <div className="recommended-price">
                      <span className="old-price">${course.oldPrice}</span>
                      <span className="current-price">${course.price}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
          </div>
          
          <Footer/>
    </div>
  );
};

export default Courses;
