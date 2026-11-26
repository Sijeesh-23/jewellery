
import React from "react";
import { Link } from "react-router-dom";

const whatsappNumber = "919447879288";

const silverProducts = [
  {
    name: "Elegant Silver Necklace",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800",
  },
  {
    name: "Silver Earrings",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800",
  },
  {
    name: "Silver Ring Collection",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800",
  },
  {
    name: "Traditional Silver Jewellery",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800",
  },
];

function Silver() {
  return (
    <div className="collection-page">
      <header className="collection-header">
        <Link to="/" className="collection-logo">
          BINDU <span>JEWELLERY</span>
        </Link>

        <Link to="/" className="back-home">
          ← BACK TO HOME
        </Link>
      </header>

      <section className="collection-hero silver-hero">
        <p>TIMELESS ELEGANCE</p>
        <h1>Silver Collection</h1>
        <span>Pure beauty in every detail.</span>
      </section>

      <section className="collection-products">
        <div className="section-heading">
          <p className="eyebrow">DISCOVER OUR COLLECTION</p>
          <h2>Our Silver Creations</h2>
          <p>Beautiful silver designs for every occasion.</p>
        </div>

        <div className="collection-product-grid">
          {silverProducts.map((product) => (
            <div className="collection-product-card" key={product.name}>
              <div className="collection-product-image">
                <img src={product.image} alt={product.name} />
              </div>

              <div className="collection-product-details">
                <h3>{product.name}</h3>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    `Hello BINDU JEWELLERY, I'm interested in ${product.name}. Please share more details.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  ENQUIRE ON WHATSAPP →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="collection-page-footer">
        <h2>BINDU JEWELLERY</h2>
        <p>Vandithavalam, Palakkad, Kerala</p>
        <a href="tel:+919447879288">+91 94478 79288</a>
      </footer>
    </div>
  );
}

export default Silver;
