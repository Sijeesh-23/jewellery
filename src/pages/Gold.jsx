
import React from "react";

const whatsappNumber = "919447879288";

const goldCategories = [
  {
    title: "Gold Chains",
    subtitle: "Elegant chains for every occasion",
    products: [
      ["Classic Gold Chain", "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800"],
      ["Traditional Gold Chain", "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800"],
      ["Designer Gold Chain", "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800"],
      ["Daily Wear Gold Chain", "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800"],
      ["Fancy Gold Chain", "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800"],
    ],
  },
  {
    title: "Gold Rings",
    subtitle: "Beautiful rings for special moments",
    products: [
      ["Classic Gold Ring", "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800"],
      ["Designer Gold Ring", "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800"],
      ["Traditional Gold Ring", "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800"],
      ["Elegant Gold Ring", "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800"],
      ["Modern Gold Ring", "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800"],
    ],
  },
  {
    title: "Gold Earrings",
    subtitle: "Perfect designs to complement your style",
    products: [
      ["Traditional Gold Earrings", "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800"],
      ["Gold Stud Earrings", "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800"],
      ["Designer Gold Earrings", "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800"],
      ["Elegant Gold Drops", "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800"],
      ["Daily Wear Earrings", "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800"],
    ],
  },
  {
    title: "Gold Bangles",
    subtitle: "Traditional beauty with timeless elegance",
    products: [
      ["Classic Gold Bangles", "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800"],
      ["Traditional Gold Bangles", "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800"],
      ["Designer Gold Bangles", "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800"],
      ["Elegant Gold Kada", "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800"],
      ["Modern Gold Bangles", "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800"],
    ],
  },
  {
    title: "Gold Necklaces",
    subtitle: "Make every celebration memorable",
    products: [
      ["Traditional Gold Necklace", "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800"],
      ["Bridal Gold Necklace", "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800"],
      ["Designer Gold Necklace", "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800"],
      ["Elegant Gold Necklace", "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800"],
      ["Temple Gold Necklace", "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800"],
    ],
  },
];

function Gold() {
  return (
    <div className="collection-page">
      <header className="collection-header">
        <a href="#/" className="collection-logo">
          BINDU <span>JEWELLERY</span>
        </a>
        <a href="#/" className="back-home">
          ← BACK TO HOME
        </a>
      </header>

      <section className="collection-hero gold-hero">
        <p>TIMELESS BEAUTY</p>
        <h1>Gold Collection</h1>
        <span>Elegance that lasts forever.</span>
      </section>

      {goldCategories.map((category) => (
        <section className="collection-products" key={category.title}>
          <div className="section-heading">
            <p className="eyebrow">BINDU JEWELLERY</p>
            <h2>{category.title}</h2>
            <p>{category.subtitle}</p>
          </div>

          <div className="collection-product-grid">
            {category.products.map(([name, image]) => (
              <div className="collection-product-card" key={name}>
                <div className="collection-product-image">
                  <img src={image} alt={name} loading="lazy" />
                </div>

                <div className="collection-product-details">
                  <h3>{name}</h3>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      `Hello BINDU JEWELLERY, I'm interested in ${name}. Please share more details.`
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
      ))}

      <footer className="collection-page-footer">
        <h2>BINDU JEWELLERY</h2>
        <p>Vandithavalam, Palakkad, Kerala</p>
        <a href="tel:+919447879288">+91 94478 79288</a>
      </footer>
    </div>
  );
}

export default Gold;
