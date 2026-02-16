import { useState } from "react";
import "./Home.css";
import Nav from "../../components/1-Nav/Nav";
import Footer from "../../components/2-Footer/Footer";
import { BsFillPlayCircleFill } from "react-icons/bs";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import { FaCubesStacked } from "react-icons/fa6";
import { FaRegCalendarDays } from "react-icons/fa6";
import { FaFileZipper } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { TbUsersGroup } from "react-icons/tb";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img7 from "../../assets/img7.png";
import { MdWindow } from "react-icons/md";
import { HiRectangleGroup } from "react-icons/hi2";
import { GrGroup } from "react-icons/gr";
import img8 from "../../assets/img8.webp";
import img9 from "../../assets/img9.png";
import img10 from "../../assets/img10.png";
import img11 from "../../assets/img11.png";
import { CiMail } from "react-icons/ci";
import { AiOutlineFileProtect } from "react-icons/ai";
import { FaEarthAmericas } from "react-icons/fa6";
import { GrCertificate } from "react-icons/gr";
import img12 from "../../assets/img12.png";
import { FaArrowRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import img13 from "../../assets/img13.png";
import img14 from "../../assets/img14.png";
import img15 from "../../assets/img15.png";
import img16 from "../../assets/img16.png";
import Lottie from "lottie-react";
import readingAnimation from "../../assets/animation/Reading.json";

const Home = () => {
  const [numbers, setNumbers] = useState([
    { numbers: "15K+", label: "Students" },
    { numbers: "75%", label: "Total success" },
    { numbers: "35", label: "Main questions" },
    { numbers: "26", label: "Chief experts" },
    { numbers: "16", label: "Years of experience" },
  ]);
  const [features, setFeatures] = useState([
    {
      icon: <FaFileZipper />,
      title: "Online Billing, Invoicing, & Contracts",
      description:
        "Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts",
    },
    {
      icon: <FaCalendarAlt />,
      title: "Easy Scheduling & Attendance Tracking",
      description:
        "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance.",
    },
    {
      icon: <TbUsersGroup />,
      title: "Customer Tracking & Management (CRM)",
      description:
        "Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization.",
    },
  ]);
  const [courses, setCourses] = useState([
    { title: "Ut Sed Eros", bgc: "#FF6F00" },
    { title: "Curabitur Egestas", bgc: "#FF8374" },
    { title: "Quisque Conseq", bgc: "#B45A1B" },
    { title: "Cras Convallis", bgc: "#FFB300" },
    { title: "Vestibulum fauci", bgc: "#C583FF" },
    { title: "Ut Sed Eros", bgc: "#00A8FF" },
    { title: "Vestibulum faucibu", bgc: "#6DB4A7" },
    { title: "Vestibulum faucibu", bgc: "#308598" },
  ]);
  const [news, setNews] = useState([
    {
      imgSrc: img14,
      head: "Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand",
      dis: "Class Technologies Inc., the company that created Class,...",
    },
    {
      imgSrc: img15,
      head: "Zoom’s earliest investors are betting millions on a better Zoom for schools",
      dis: "Zoom was never created to be a consumer product. Nonetheless, the...",
    },
    {
      imgSrc: img16,
      head: "Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms",
      dis: "This year, investors have reaped big financial returns from betting on Zoom...",
    },
  ]);

  return (
    <div className="homeContainer">
      <Nav bgColor="#49BBBD" />
      <div className="section1">
        <div className="right">
          <h3>
            <span style={{ color: "#F48C06" }}>Studying</span> online is now
            much easier
          </h3>
          <p>
            LearNova is an interesting platform that will teach you in more an
            interactive way
          </p>
          <div className="joiningContainer">
            <button className="Join">Join for free</button>
            <BsFillPlayCircleFill className="playIcon" />
            <span style={{ color: "#0000009c" }}>Watch how it works</span>
          </div>
        </div>
        <div className="left">
          <div className="imgContainer">
            <img src={img1} alt="img1" className="img1" />
          </div>
          <div className="card1 specail">
            <div className="txtContainer">
              <div className="txt">
                <CiMail className="iconCard1" />
                <div className="content">
                  <h4>Congratulations</h4>
                  <p>Your admission completed</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card2">
            <FaCubesStacked />
          </div>
          <div className="card3">
            <div>
              <FaRegCalendarDays className="icon" />
            </div>
            <div className="txt">
              <h4>250k</h4>
              <p>Assisted Student</p>
            </div>
          </div>
          <div className="card4">
            <Lottie animationData={readingAnimation} loop={true} />

          </div>

        </div>
      </div>
      <div className="section2">
        <h2>Our Success</h2>
        <p>
          Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae
          sollicitudin at nec nam et pharetra gravida. Adipiscing a quis
          ultrices eu ornare tristique vel nisl orci.
        </p>
        <div className="nomsContainer">
          {numbers.map((item, index) => (
            <div key={index} className="nomCard">
              <h4>{item.numbers}</h4>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="section3">
        <h2>
          All-In-One <span style={{ color: "#49BBBD" }}>Cloud Software.</span>
        </h2>
        <p>
          LearNova is one powerful online software suite that combines all the
          tools needed to run a successful school or office.
        </p>
        <div className="featuresContainer">
          {features.map((item, index) => (
            <div key={index} className="featureCard">
              <div className="iconContainer">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="section4">
        <h2>
          What is <span style={{ color: "#49BBBD" }}>LearNova?</span>
        </h2>
        <p>
          <span style={{ fontWeight: "900" }}>LearNova</span> is a platform that
          allows educators to create online classes whereby they can store the
          course materials online; manage assignments, quizzes and exams;
          monitor due dates; grade results and provide students with feedback
          all in one place.
        </p>
        <div className="imgsContainer">
          <div className="img">
            <h5>FOR INSTRUCTORS</h5>
            <button>Start a class today</button>
            <img src={img3} alt="img3" />
          </div>
          <div className="img">
            <h5>FOR STUDENTS</h5>
            <button>Enter access code</button>
            <img src={img4} alt="img4" />
          </div>
        </div>
      </div>
      <div className="section5">
        <div className="left">
          <h2>
            Everything you can do in a physical classroom,{" "}
            <span style={{ color: "#49BBBD" }}>you can do with LearNova</span>
          </h2>
          <p>
            LearNova school management software helps traditional and online
            schools manage scheduling, attendance, payments and virtual
            classrooms all in one secure cloud-based system ....
          </p>
          <span className="learnMore">learn more </span>
        </div>
        <div className="right">
          <img src={img5} alt="img1" />
        </div>
      </div>
      <div className="section6">
        <h2>
          Our <span style={{ color: "#49BBBD" }}>Features</span>
        </h2>
        <p>
          This very extraordinary feature, can make learning activities more
          efficient
        </p>
        <div className="featuresContainer">
          <div className="feature">
            <div className="left">
              <img src={img7} alt="img7" />
            </div>
            <div className="right">
              <h3>
                A <span style={{ color: "#49BBBD" }}>user interface</span>{" "}
                designed for the classroom
              </h3>
              <div className="featuresContainer">
                <div>
                  <span>
                    <MdWindow />
                  </span>
                  Teachers don’t get lost in the grid view and have a dedicated
                  Podium space.
                </div>
                <div>
                  <span>
                    <HiRectangleGroup />
                  </span>
                  TA’s and presenters can be moved to the front of the class.
                </div>
                <div>
                  <span>
                    <GrGroup />
                  </span>
                  Teachers can easily see all students and class data at one
                  time.
                </div>
              </div>
            </div>
          </div>
          <div className="feature">
            <div className="right">
              <h3>
                <span style={{ color: "#49BBBD" }}> Tools For</span> Teachers
                And Learners
              </h3>
              <div className="featuresContainer">
                <div>
                  Class has a dynamic set of teaching tools built to be deployed
                  and used during class. Teachers can handout assignments in
                  real-time for students to complete and submit.
                </div>
              </div>
            </div>
            <div className="left">
              <img src={img8} alt="img8" />
            </div>
          </div>
          <div className="feature">
            <div className="left">
              <img src={img9} alt="img9" />
            </div>
            <div className="right">
              <h3>
                Assessments,<span style={{ color: "#49BBBD" }}> Quizzes</span>,
                Tests
              </h3>
              <div className="featuresContainer">
                <div>
                  Easily launch live assignments, quizzes, and tests. Student
                  results are automatically entered in the online gradebook.
                </div>
              </div>
            </div>
          </div>
          <div className="feature">
            <div className="right">
              <h3>
                <span style={{ color: "#49BBBD" }}>Class Management</span> Tools
                for Educators
              </h3>
              <div className="featuresContainer">
                <div>
                  Class provides tools to help run and manage the class such as
                  Class Roster, Attendance, and more. With the Gradebook,
                  teachers can review and grade tests and quizzes in real-time.
                </div>
              </div>
            </div>
            <div className="left">
              <img src={img10} alt="img10" />
            </div>
          </div>
          <div className="feature">
            <div className="left">
              <img src={img11} alt="img11" />
            </div>
            <div className="right">
              <h3>
                One-on-One <span style={{ color: "#49BBBD" }}>Discussions</span>
              </h3>
              <div className="featuresContainer">
                <div>
                  Teachers and teacher assistants can talk with students
                  privately without leaving the Zoom environment.
                </div>
              </div>
            </div>
          </div>
          <button className="seeMore">See more features</button>
        </div>
      </div>
      <div className="section7">
        <h2>Explore Course</h2>
        <p>Ut sed eros finibus, placerat orci id, dapibus.</p>
        <div className="icon">
          <div>
            <AiOutlineFileProtect />
          </div>
          <p>Lorem Ipsum</p>
        </div>
        <div className="courses">
          {courses.map((course, index) => (
            <div className="courseCard" key={index}>
              <div
                className="courseInner"
                style={{ backgroundColor: course.bgc }}
              >
                <h3>{course.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="icon" style={{ marginTop: "3rem" }}>
          <div>
            <FaEarthAmericas style={{ marginRight: "0.1rem" }} />
          </div>
          <p>Quisque a Consequat</p>
        </div>
        <div className="courses">
          {courses.map((course, index) => (
            <div className="courseCard" key={index}>
              <div
                className="courseInner"
                style={{ backgroundColor: course.bgc }}
              >
                <h3>{course.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="icon" style={{ marginTop: "3rem" }}>
          <div>
            <GrCertificate />
          </div>
          <p>Aenean Facilisis</p>
        </div>
        <div className="courses">
          {courses.map((course, index) => (
            <div className="courseCard" key={index}>
              <div
                className="courseInner"
                style={{ backgroundColor: course.bgc }}
              >
                <h3>{course.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="section8">
        <div className="left">
          <p>
            <span style={{ letterSpacing: "-3px", marginRight: "10px" }}>
              ----------------------------------------------
            </span>
            TESTIMONIAL
          </p>

          <h2>What They Say?</h2>

          <div className="content">
            <p>
              TOTC has got more than 100k positive ratings from our users around
              the world.
            </p>
            <p>
              Some of the students and teachers were greatly helped by the
              Skilline.
            </p>
            <p>Are you too? Please give your assessment</p>

            <button className="btn-testimonial">
              <span>Write your assessment</span>
              <span className="icon">
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>

        <div className="right">
          <img src={img12} alt="img" />
          <div className="testimonial-card">
            <p className="quote">
              "Thank you so much for your help. It's exactly what I've been
              looking for. You won't regret it. It really saves me time and
              effort. TOTC is exactly what our business has been lacking."
            </p>

            <div className="card-footer">
              <h4>Gloria Rose</h4>

              <div className="rating">
                <div className="stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <span>12 reviews at Yelp</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section9">
        <h2>Lastest News and Resources</h2>
        <p>See the developments that have occurred to TOTC in the world</p>
        <div className="main">
          <div className="left">
            <div className="imgContainer">
              <img src={img13} alt="logo" />
            </div>
            <button className="news">NEWS</button>
            <div className="dis">
              Class adds $30 million to its balance sheet for a Zoom-friendly
              edtech solution
            </div>
            <p>
              Class, launched less than a year ago by Blackboard co-founder
              Michael Chasen, integrates exclusively...
            </p>
            <button className="read">Read more</button>
          </div>
          <div className="right">
            {news.map((n, index) => {
              return (
                <div key={index} className="new">
                  <img src={n.imgSrc} alt="logo" />
                  <div className="content">
                    <div className="dis">{n.head}</div>
                    <p>{n.dis}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
