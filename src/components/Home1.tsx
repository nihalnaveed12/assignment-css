import Image from "next/image";

export default function Home2() {
  return (
    <section className="section">
  <div>
    <div className="text-center">
      <h1 className="heading">What is Middle for borrowers?</h1>
      <p className="subheading">
        Middle lets you securely share all the details your Broker needs in
        minutes, so they can provide you with the best home loan advice.
      </p>
    </div>
  </div>
  <div className="image-container">
  <div className="image-main">
      <Image
        src="/middle-app.webp"
        width={1000}
        height={1000}
        alt="middle"
        priority={true}
        className="image"
      />
    </div>

    <div className="image-overlay image-overlay-1">
      <Image
        src="/mobile-middle.webp"
        width={1000}
        height={100}
        alt="mobile"
        className="image"
      />
    </div>

    <div className="image-overlay image-overlay-2">
      <Image
        src="/feat.webp"
        width={1000}
        height={100}
        alt="mobile"
        className="image"
      />
    </div>

    <div className="image-overlay image-overlay-3">
      <Image
        src="/feat.webp"
        width={1000}
        height={100}
        alt="mobile"
        className="image"
      />
    </div>

    <div className="image-overlay image-overlay-4">
      <Image
        src="/feat.webp"
        width={1000}
        height={100}
        alt="mobile"
        className="image"
      />
    </div>

    <div className="image-overlay image-overlay-5">
      <Image
        src="/feat.webp"
        width={1000}
        height={100}
        alt="mobile"
        className="image"
      />
    </div>

    <div className="image-overlay image-overlay-6">
      <Image
        src="/feat.webp"
        width={1000}
        height={100}
        alt="mobile"
        className="image"
      />
    </div>

    <div className="image-overlay image-overlay-7">
      <Image
        src="/feat.webp"
        width={1000}
        height={100}
        alt="mobile"
        className="image"
      />
    </div>
  </div>
</section>

  )
}