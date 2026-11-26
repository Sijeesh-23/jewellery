
import React from "react";

const whatsappNumber = "919447879288";

const diamondCategories = [
  {
    title: "Diamond Rings",
    subtitle: "Brilliance for your special moments",
    products: [
      ["Classic Diamond Ring", "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800"],
      ["Solitaire Diamond Ring", "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800"],
      ["Designer Diamond Ring", "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800"],
      ["Elegant Diamond Ring", "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800"],
      ["Modern Diamond Ring", "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800"],
    ],
  },
  {
    title: "Diamond Earrings",
    subtitle: "Sparkle with timeless elegance",
    products: [
      ["Classic Diamond Studs", "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800"],
      ["Elegant Diamond Earrings", "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800"],
      ["Designer Diamond Drops", "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800"],
      ["Traditional Diamond Earrings", "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800"],
      ["Modern Diamond Earrings", "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800"],
    ],
  },
  {
    title: "Diamond Necklaces",
    subtitle: "Exceptional designs for unforgettable occasions",
    products: [
      ["Classic Diamond Necklace", "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800"],
      ["Designer Diamond Necklace", "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800"],
      ["Elegant Diamond Necklace", "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800"],
      ["Luxury Diamond Necklace", "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800"],
      ["Traditional Diamond Necklace", "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800"],
    ],
  },
  {
    title: "Diamond Pendants",
    subtitle: "Small details, extraordinary beauty",
    products: [
      ["Classic Diamond Pendant", "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800"],
      ["Heart Diamond Pendant", "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800"],
      ["Solitaire Diamond Pendant", "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800"],
      ["Designer Diamond Pendant", "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800"],
      ["Elegant Diamond Pendant", "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800"],
    ],
  },
  {
    title: "Bridal Diamond Jewellery",
    subtitle: "Make your wedding moments unforgettable",
    products: [
      ["Bridal Diamond Set", "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800"],
      ["Luxury Bridal Necklace", "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800"],
      ["Bridal Diamond Earrings", "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800"],
      ["Wedding Diamond Ring", "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800"],
      ["Elegant Bridal Set", "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800"],
    ],
  },
];

function Diamond() {
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

      <section className="collection-hero diamond-hero">
        <p>EXCEPTIONAL BRILLIANCE</p>
        <h1>Diamond Collection</h1>
        <span>Let your elegance shine.</span>
      </section>

      {diamondCategories.map((category) => (
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

export default Diamond;
