import "./Footer.css";

function Footer({ storeName, email, description }) {
  return (
    <footer className="footer">
      <div>
        <h2>{storeName}</h2>
        <p>{description}</p>
      </div>

      <div>
        <h3>Contact Us</h3>
        <p>{email}</p>
      </div>

      <p className="copyright">
        © 2026 {storeName}. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;