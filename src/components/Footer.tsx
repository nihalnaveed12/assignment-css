import Link from "next/link";

export default function Footer() {
  const footer1 = [
    {
      name: "Company",
      href: "/",
    },
    {
      name: "Contact",
      href: "/contact",
    },
    {
      name: "Security",
      href: "/",
    },
  ];
  const footer2 = [
    {
      name: "Who we help",
      href: "/",
    },
    {
      name: "Customers",
      href: "/contact",
    },
    {
      name: "Brokers",
      href: "/",
    },
    {
      name: "Lenders",
      href: "/lenders",
    },
  ];
  return (
    <footer className="footer">
  <div className="footer-container">
    <div className="footer-content">
      <div className="footer-logo-section">
        <h1 className="footer-logo">Middle</h1>
        <p>Join the revolution and see how easy Middle makes home loans.</p>
      </div>

      <div className="footer-links-column">
        {footer1.map((footer) => (
          <Link 
            href={footer.href} 
            key={footer.name} 
            className="footer-link"
          >
            {footer.name}
          </Link>
        ))}
      </div>

      <div className="footer-links-column">
        {footer2.map((footer) => (
          <Link 
            href={footer.href} 
            key={footer.name} 
            className="footer-link"
          >
            {footer.name}
          </Link>
        ))}
      </div>

      <div className="social-section">
        <p className="social-title">Follow us</p>
        <Link 
          href="https://linkedin.com/nihalnaveed" 
          className="footer-link"
        >
          Linkedin
        </Link>
      </div>
    </div>
  </div>
</footer>
  );
}
