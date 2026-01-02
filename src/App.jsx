import { useState } from "react";
import { ittarData } from "./data";
import "./index.css";

function App() {
  // --- State ---
  const [items, setItems] = useState(ittarData);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [size, setSize] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const maxPerPage = 9;

  // --- Filtering ---
  function applyFilter(e) {
    e.preventDefault();
    const filtered = ittarData.filter((ittar) => {
      const minOk = minPrice ? ittar.price >= Number(minPrice) : true;
      const maxOk = maxPrice ? ittar.price <= Number(maxPrice) : true;
      const sizeOk = size ? ittar.size === Number(size) : true;
      return minOk && maxOk && sizeOk;
    });
    setItems(filtered);
    setCurrentPage(1); // reset to first page
  }

  // --- Pagination ---
  const totalPages = Math.ceil(items.length / maxPerPage);
  const startIndex = (currentPage - 1) * maxPerPage;
  const endIndex = startIndex + maxPerPage;
  const pageData = items.slice(startIndex, endIndex);

  function goToPage(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <>
      <header>
        <div className="nav">
          <p className="logo">Mustaqeem's Fragrance</p>
        </div>
      </header>

      <main>
        {/* HEADER SECTION */}
        <section class="header">
            <img class="background-banner" src="/images/background-banner-with-no-text.png" alt="banner containing ittar, logo name, and short description."/>
            <div class="image-text-and-title">
                <h1 class="header-title">Mustaqeem's Frangence</h1>
                <p class="header-text">Offering a deep, evolving, and long-lasting scent that is both cultural heritage and liquid luxury.</p>
            </div>
        </section>
        
        {/* FILTER SECTION */}
        <section>
          <div className="filter-list">
            <form onSubmit={applyFilter}>
              <fieldset>
                <legend>Filter by</legend>

                <div className="min-filter-price">
                  <label>Min Price</label>
                  <input
                    type="number"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                  />
                </div>

                <div className="max-filter-price">
                  <label>Max Price</label>
                  <input
                    type="number"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                  />
                </div>

                <div className="filter-ml">
                  <label>ML</label>
                  <select
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                  >
                    <option value=""></option>
                    <option value="6">6</option>
                    <option value="3">3</option>
                  </select>
                </div>

                <button type="submit">Apply</button>
              </fieldset>
            </form>
          </div>

          {/* ITEM LIST */}
          <div className="item-lists">
            {pageData.map((ittar, index) => (
              <div className="item" key={index}>
                <img src={`/images/${ittar.image}`} alt={ittar.name} />
                <p className="ittar-name-p">
                  {ittar.name}
                  <span className="ittar-size-span">{ittar.size}ML</span>
                </p>
                <p className="ittar-price-p">£{ittar.price}</p>
              </div>
            ))}
          </div>

          {/* PAGINATION */}
          <div className="page-list-container">
            {Array.from({ length: totalPages }, (_, i) => (
              <div
                className="page-number-container"
                key={i + 1}
                onClick={() => goToPage(i + 1)}
                style={{
                  backgroundColor: currentPage === i + 1 ? "gold" : "",
                }}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section>
          <div className="contact">
            <p className="contact-text">
              Please contact us for purchasing and for support at the following:
            </p>
            <p className="contact-text">
              <i className="fa-brands fa-whatsapp"></i>07534249940
            </p>
          </div>

          <a
            className="whatsapp-fixed-position-logo"
            href="https://wa.me/+447534249940?text=Hello%20I%20want%20to%20contact%20you"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact on WhatsApp"
          >
            <img
              src="/images/whatsapp-icon-design.png"
              className="whatsapp-icon-design"
              alt="Direct link to whatsapp contact"
            />
          </a>
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
