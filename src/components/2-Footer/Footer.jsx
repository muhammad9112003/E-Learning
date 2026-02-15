import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logoFoot">
        <div className="imgContainer">
          <img src="/logo.png" alt="logo" />
        </div>

        <div className="break"></div>

        <div className="txt">Virtual Class for Zoom</div>
      </div>

      <div className="searchNews">
        <h2>Subscribe to get our Newsletter</h2>

        <div className="input">
          <input type="email" placeholder="Your Email" />
          <button className="subscribe">Subscribe</button>
        </div>
      </div>
      <div className="privacy">
        <div className="first">
          <div>Careers</div>
          <div className="break"></div>
          <div>Privacy Policy</div>
          <div className="break"></div>
          <div>Terms & Conditions</div>
        </div>
        <div>© 2026 Muhammad Ayman. </div>
      </div>
    </footer>
  );
};

export default Footer;
