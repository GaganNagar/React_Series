import "./App.css";

function Footer() {
  const year = new Date().getFullYear(); // JSX expression

  return (
    <footer className="footer">
      <p>© {year} Gagan Nagar. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
