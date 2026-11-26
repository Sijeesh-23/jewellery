
import "./App.css";

const whatsappNumber = "919447879288";

const collections = [
  {
    name: "Gold Jewellery",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800"
  },
  {
    name: "Silver Jewellery",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800"
  },
  {
    name: "Diamond Jewellery",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800"
  },
  {
    name: "Fashion Jewellery",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800"
  },
  {
    name: "Bridal Collection",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800"
  }
];

const featuredProducts = [
  {
    name: "Royal Gold Necklace",
    category: "Gold Collection",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800"
  },
  {
    name: "Elegant Diamond Ring",
    category: "Diamond Collection",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800"
  },
  {
    name: "Traditional Gold Earrings",
    category: "Gold Collection",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800"
  },
  {
    name: "Bridal Jewellery Set",
    category: "Bridal Collection",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800"
  }
];


function App() {
  return (
    <div className="website">

  <div className="splash-screen">
    <div className="splash-brand">
      <h1>BINDU</h1>
      <span>J E W E L L E R Y</span>
      <div className="gold-line"></div>
    </div>
  </div>

  <div className="announcement">
        Discover elegance with BINDU JEWELLERY
      </div>

      <header className="navbar">
        <a href="#" className="logo">
          BINDU
          <span>JEWELLERY</span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#collections">Collections</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="nav-contact" href="#contact">
          Enquire Now
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">TIMELESS BEAUTY · ETERNAL ELEGANCE</p>

            <h1>
              Jewellery that
              <br />
              tells your story.
            </h1>

            <p className="hero-description">
              Discover beautiful gold, silver, diamond and
              fashion jewellery for every special moment.
            </p>

            <a href="#collections" className="primary-button">
              EXPLORE COLLECTIONS
            </a>
          </div>
        </section>

        
<section className="collections section" id="collections">
  <div className="section-heading">
    <p className="eyebrow">DISCOVER THE ART OF BEAUTY</p>
    <h2>Our Exquisite Collections</h2>
    <p>Elegance crafted for every moment of your life.</p>
  </div>

  <div className="collection-grid">
    {collections.map((item, index) => (
      <a
        href="#contact"
        className="collection-card"
        key={item.name}
      >
        <img src={item.image} alt={item.name} />

        <div className="collection-overlay">
          <span className="collection-number">
            0{index + 1}
          </span>
          <h3>{item.name}</h3>
          <span className="explore-link">
            EXPLORE COLLECTION →
          </span>
        </div>
      </a>
    ))}
  </div>
</section>


<section className="featured section" id="featured">
  <div className="section-heading">
    <p className="eyebrow">HANDPICKED FOR YOU</p>
    <h2>Featured Creations</h2>
    <p>Discover the beauty of our special selections.</p>
  </div>

  <div className="featured-grid">
    {featuredProducts.map((product) => (
      <div className="product-card" key={product.name}>
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-details">
          <p>{product.category}</p>
          <h3>{product.name}</h3>
          <a
  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hello BINDU JEWELLERY, I'm interested in the ${product.name}. Please share more details.`
  )}`}
  target="_blank"
  rel="noreferrer"
  className="product-enquiry"
>
  ENQUIRE NOW →
</a>
        </div>
      </div>
    ))}
  </div>
</section>



        
<section className="about section" id="about">
  <div className="about-container">
    <div className="about-image">
      <img
        src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1000"
        alt="Elegant jewellery collection"
      />
    </div>

    <div className="about-content">
      <p className="eyebrow">THE BINDU EXPERIENCE</p>

      <h2>Elegance for Every Occasion.</h2>

      <p>
        Welcome to BINDU JEWELLERY, where you can explore
        beautiful gold, silver, diamond, fashion and bridal
        jewellery for life's special moments.
      </p>

      <p>
        Visit our physical store and discover a collection
        that celebrates beauty, style and elegance.
      </p>

      <div className="store-location">
        <a
  href="https://maps.app.goo.gl/Bcu3Tced7g5M2bnA7"
  target="_blank"
  rel="noreferrer"
  className="product-enquiry"
>
  GET DIRECTIONS →
</a>
      </div>

      <a href="#contact" className="primary-button">
        CONTACT US
      </a>
    </div>
  </div>
</section>


        
<section className="contact section" id="contact">
  <p className="eyebrow">VISIT US OR GET IN TOUCH</p>

  <h2>We'd Love to Welcome You.</h2>

  <p>
    Discover beautiful jewellery at BINDU JEWELLERY.
    Visit our store or contact us for enquiries.
  </p>

  <div className="contact-grid">
    <div className="contact-card">
      <h3>Call Us</h3>
      <p>Speak with us directly</p>
      <a href="tel:+919447879288">+91 94478 79288</a>
    </div>

    <div className="contact-card">
      <h3>WhatsApp</h3>
      <p>Enquire about our collections</p>
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          "Hello BINDU JEWELLERY, I would like to know more about your collections."
        )}`}
        target="_blank"
        rel="noreferrer"
      >
        Chat With Us →
      </a>
    </div>

    <div className="contact-card">
      <h3>Visit Our Store</h3>
      <p>Vandithavalam, Palakkad, Kerala</p>
      <a
        href="https://maps.app.goo.gl/Bcu3Tced7g5M2bnA7"
        target="_blank"
        rel="noreferrer"
      >
        Get Directions →
      </a>
    </div>
  </div>
</section>

      </main>

      
<footer className="site-footer">
  <div className="footer-content">

    <div className="footer-brand">
      <h2>BINDU</h2>
      <span>J E W E L L E R Y</span>
      <p>Timeless Beauty · Eternal Elegance</p>
    </div>

    <div className="footer-links">
      <h3>Explore</h3>
      <a href="#home">Home</a>
      <a href="#collections">Collections</a>
      <a href="#featured">Featured Products</a>
      <a href="#about">About Us</a>
      <a href="#contact">Contact</a>
    </div>

    <div className="footer-contact">
      <h3>Visit Our Store</h3>
      <p>Vandithavalam</p>
      <p>Palakkad, Kerala, India</p>
      <a href="tel:+919447879288">+91 94478 79288</a>
      <a
        href="https://maps.app.goo.gl/Bcu3Tced7g5M2bnA7"
        target="_blank"
        rel="noreferrer"
      >
        Get Directions →
      </a>
    </div>

  </div>

  <div className="footer-bottom">
    <p>
      © {new Date().getFullYear()} BINDU JEWELLERY.
      All rights reserved.
    </p>
    <p>Designed with elegance.</p>
  </div>
</footer>


    </div>
  );
}

export default App;
