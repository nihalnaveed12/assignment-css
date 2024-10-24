import Image from "next/image"

export default function Home3() {
    return (
        <section className="section-borrowers">
  <div>
    <h1 className="section-title">What borrowers love about Middle</h1>

    <div className="grid-container">
      <div className="grid-item">
        <Image
          src="/rocket-middle.webp"
          height={150}
          width={150}
          alt="rocket"
          className="images"
        />
        <h2 className="item-title">Put your best foot forward</h2>
        <p className="item-description">
          Middle removes the guesswork by organising and sharing all the
          information your broker needs to recommend the best home loan for your
          situation.
        </p>
      </div>

      <div className="grid-item">
        <Image
          src="/hand-middle.webp"
          height={150}
          width={150}
          alt="rocket"
          className="images"
        />
        <h2 className="item-title">Put your best foot forward</h2>
        <p className="item-description">
          Middle removes the guesswork by organising and sharing all the
          information your broker needs to recommend the best home loan for your
          situation.
        </p>
      </div>

      <div className="grid-item">
        <Image
          src="/security-middle.webp"
          height={150}
          width={150}
          alt="rocket"
          className="images"
        />
        <h2 className="item-title">Put your best foot forward</h2>
        <p className="item-description">
          Middle removes the guesswork by organising and sharing all the
          information your broker needs to recommend the best home loan for your
          situation.
        </p>
      </div>
    </div>
  </div>
</section>

    )
}