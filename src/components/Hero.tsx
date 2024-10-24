import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-heading">
            Middle, helping you
            <span className="hero-highlight">home</span>
          </h1>
          <p className="hero-subheading">
            Slash the mortgage admin with Middle. Deliver everything your broker
            needs in minutes.
          </p>
          <p>Don't have a Middle invite?</p>
        </div>
        <div className="">
          <Image
            src="/middle-hero.webp"
            width={400}
            height={400}
            alt="Hero image"
            priority={true}
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}
