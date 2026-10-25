
import { useState, useEffect } from "react";
import "./App.css";

const perfumes = [
  {
    name: "AMBRE ROYALE",
    subtitle: "THE GOLDEN CHAPTER",
    notes: "Golden Amber · Madagascar Vanilla · Warm Woods",
    description:
      "A golden warmth against the skin. Deep amber meets delicate vanilla for a scent that feels timeless, intimate and unforgettable.",
    image:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1000&q=85",
    price: "$145",
    number: "01",
  },
  {
    name: "ROSE ÉTERNELLE",
    subtitle: "THE ROMANTIC CHAPTER",
    notes: "Velvet Rose · Soft Peony · White Musk",
    description:
      "Inspired by a rose preserved between the pages of a love letter. Delicate, romantic and quietly captivating.",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1000&q=85",
    price: "$165",
    number: "02",
  },
  {
    name: "NOIR ABSOLU",
    subtitle: "THE MIDNIGHT CHAPTER",
    notes: "Black Orchid · Smoked Woods · Dark Musk",
    description:
      "A mysterious composition for the hours after sunset. Deep, sensual and made to leave a lasting impression.",
    image:
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1000&q=85",
    price: "$185",
    number: "03",
  },
];

const storyScenes = [
  {
    title: "Every fragrance begins with a feeling.",
    text: "Sunsets, delicate flowers, and memories we never want to lose.",
  },
  {
    title: "What if memories had a scent?",
    text: "Rose gardens, warm vanilla, and the magic of a rainy evening.",
  },
  {
    title: "An idea became a vision.",
    text: "Every fragrance tells a story. Every bottle holds a feeling.",
  },
  {
    title: "Introducing MAISON V.",
    text: "Born from imagination. Created to make every moment unforgettable.",
  },
];

export default function App() {
  const [selected, setSelected] = useState(0);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [showStory, setShowStory] = useState(true);
  const [storyPage, setStoryPage] = useState(0);

  useEffect(() => {
    if (!showStory || storyPage === 3) return;

    const timer = setTimeout(() => {
      setStoryPage((page) => page + 1);
    }, 4000);

    return () => clearTimeout(timer);
  }, [showStory, storyPage]);

  const perfume = perfumes[selected];

  if (showStory) {
    const story = storyScenes[storyPage];

    return (
      <main className="story-screen">
        <p className="story-label">MAISON V. PRESENTS</p>

        <div className="story-flowers">✿ ❀ ✧ ❀ ✿</div>

        <p className="story-chapter">
          CHAPTER 0{storyPage + 1}
        </p>

        <h1>{story.title}</h1>

        <p className="story-text">{story.text}</p>

        {storyPage < 3 ? (
          <button
            className="story-button"
            onClick={() =>
              setStoryPage((page) => Math.min(page + 1, 3))
            }
          >
            CONTINUE →
          </button>
        ) : (
          <button
            className="story-button"
            onClick={() => setShowStory(false)}
          >
            ENTER THE LUXURY COLLECTION →
          </button>
        )}

        <button
          className="story-skip"
          onClick={() => setShowStory(false)}
        >
          SKIP INTRO
        </button>
      </main>
    );
  }

  return (
    <main className="luxury-site">
      <div className="announcement">
        A WORLD OF FEELINGS · DISCOVER THE ART OF FRAGRANCE
      </div>

      <header className="luxury-header">
        <button
          className="menu-link"
          onClick={() => setDetailsOpen(!detailsOpen)}
        >
          {detailsOpen ? "CLOSE" : "EXPLORE"}
        </button>

        <a className="luxury-logo" href="#home">
          MAISON V.
          <span>PARFUMS DE LUXE</span>
        </a>

        <a className="bag-link" href="#collection">
          COLLECTION <span>↗</span>
        </a>
      </header>

      {detailsOpen && (
        <nav className="explore-menu">
          <a
            href="#story"
            onClick={() => setDetailsOpen(false)}
          >
            Our Philosophy
          </a>

          <a
            href="#collection"
            onClick={() => setDetailsOpen(false)}
          >
            The Collection
          </a>

          <a
            href="#contact"
            onClick={() => setDetailsOpen(false)}
          >
            Contact
          </a>
        </nav>
      )}

      <section className="luxury-hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">
            THE ART OF BEING UNFORGETTABLE
          </p>

          <h1>
            A scent.
            <br />
            <em>A feeling.</em>
            <br />
            Forever yours.
          </h1>

          <p className="hero-description">
            Fragrance is more than what you wear.
            It is the memory you leave behind.
          </p>

          <a href="#collection" className="gold-button">
            DISCOVER THE COLLECTION <span>↗</span>
          </a>

          <div className="hero-index">
            <span>EST. IN IMAGINATION</span>
            <span>01 — 03</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-halo" />
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />

          <img
            className="hero-perfume"
            src={perfume.image}
            alt={`${perfume.name} perfume inspiration`}
          />

          <div className="floating-caption">
            <span>MAISON V.</span>
            <span>EAU DE PARFUM</span>
          </div>

          <span className="hero-star star-one">✧</span>
          <span className="hero-star star-two">✦</span>
        </div>
      </section>

      <section className="philosophy" id="story">
        <p className="eyebrow">OUR PHILOSOPHY</p>

        <h2>
          Some things are felt,
          <br />
          <em>never spoken.</em>
        </h2>

        <p>
          MAISON V. is a fictional luxury fragrance concept
          inspired by memories, moods and the quiet beauty of
          everyday moments. Each fragrance is imagined as a
          chapter of its own.
        </p>
      </section>

      <section className="collection-section" id="collection">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THREE DISTINCT WORLDS</p>
            <h2>The Collection</h2>
          </div>

          <p>Choose the chapter that feels like you.</p>
        </div>

        <div className="perfume-grid">
          {perfumes.map((item, index) => (
            <button
              className={`perfume-card ${
                selected === index ? "chosen" : ""
              }`}
              key={item.name}
              onClick={() => {
                setSelected(index);
                setDetailsOpen(false);
              }}
            >
              <div className="card-image-wrap">
                <img src={item.image} alt={item.name} />

                <span className="card-number">
                  {item.number}
                </span>

                <span className="card-view">
                  DISCOVER ↗
                </span>
              </div>

              <div className="card-info">
                <p>{item.subtitle}</p>
                <h3>{item.name}</h3>
                <span>{item.price}</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="perfume-detail" key={perfume.name}>
        <div className="detail-image">
          <img src={perfume.image} alt={perfume.name} />
        </div>

        <div className="detail-copy">
          <p className="eyebrow">
            CHAPTER {perfume.number}
          </p>

          <h2>{perfume.name}</h2>

          <p className="detail-subtitle">
            {perfume.subtitle}
          </p>

          <div className="gold-divider" />

          <p className="detail-description">
            {perfume.description}
          </p>

          <p className="note-label">THE NOTES</p>

          <p className="notes">{perfume.notes}</p>

          <p className="detail-price">{perfume.price}</p>

          <button
            className="gold-button"
            onClick={() => setDetailsOpen(!detailsOpen)}
          >
            {detailsOpen
              ? "CLOSE DETAILS"
              : "EXPLORE THE FRAGRANCE"}
            <span>↗</span>
          </button>

          {detailsOpen && (
            <p className="extra-detail">
              An imagined fragrance from the MAISON V. concept
              collection. Select another chapter above to explore
              a different mood.
            </p>
          )}
        </div>
      </section>

      <footer className="luxury-footer" id="contact">
        <a className="luxury-logo footer-logo" href="#home">
          MAISON V.
          <span>THE ART OF FRAGRANCE</span>
        </a>

        <p>SCENT · MEMORY · EMOTION</p>

        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
