import ProtectedRoute from "./ProtectedRoute";
import AdminOrders from "./AdminOrders";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPage from "./AdminPage";
import OrderPage from "./OrderPage";
import OrderForm from "./OrderForm";
import "./App.css";

function Website() {
  return (
    <>

      {/* NAVBAR */}

      <nav>

        <a href="#home" className="nav-brand">

          <img
            src="/Vee_Pickles_Logo.jpeg"
            alt="Vee Pickles Logo"
            className="nav-logo-img"
          />

          <div>

            <span className="nav-brand-name">
              Vee Pickles
            </span>

            <span className="nav-brand-sub">
              Homemade Taste, Authentic Flavors
            </span>

          </div>

        </a>

        <ul className="nav-links">

          <li>
            <a href="#home" className="active">
              Home
            </a>
          </li>

          <li>
            <a href="#about">
              About Us
            </a>
          </li>

          <li>
            <a href="#products">
              Products
            </a>
          </li>

          <li>
            <a href="#contact">
              Contact
            </a>
          </li>

        </ul>

        
  <a href="/order" className="order-btn">
  🛒 Order Online 
</a>

      </nav>


      {/* HERO SECTION */}

      <section className="hero" id="home">

        <div className="hero-left">

          <p className="hero-small">
            Authentic Homemade
          </p>

          <p className="hero-small">
            Non-Veg Pickles
          </p>

          <img
            src="/Vee_Pickles_Logo.jpeg"
            alt="Vee Pickles"
            className="hero-logo"
          />

          <div className="hero-divider">

            <div className="hero-divider-line"></div>

            <span className="hero-divider-heart">
              ♥
            </span>

            <div className="hero-divider-line"></div>

          </div>

          <p className="hero-tags">
            Traditional Recipe | Premium Quality | 100% Homemade
          </p>

         <a href="/order" className="order-btn">
  🛒 Order Online
</a>


        </div>

        <div className="hero-right">

          <p>" Vee Pickles " brings you the authentic taste of homemade tradition with every jar. Prepared using fresh ingredients, natural spices, and time-tested recipes, our pickles deliver rich, spicy, and tangy flavors that perfectly complement your meals. We focus on quality, hygiene, and freshness, ensuring every product is made with care and without artificial preservatives. From mango and lemon to garlic and gongura, each variety reflects the essence of traditional Indian taste. At Vee Pickles, we are committed to giving you food that feels like home, making every bite memorable, delicious, and full of love.
          </p>

        </div>

      </section>


      {/* ABOUT SECTION */}

      <section className="about" id="about">

        <div className="sec-head">
          <h2>About Us</h2>
        </div>

        <div className="sec-divider">

          <div className="sec-divider-line"></div>

          <span className="sec-divider-heart">
            ♥
          </span>

          <div className="sec-divider-line"></div>

        </div>

        <div className="about-inner">

          <div className="about-icon-wrap">

            <div className="mortar-icon">
              🫙
            </div>

          </div>

          <div className="about-text">

            <p>
              At Vee Pickles, we bring you the taste of tradition with our homemade pickles crafted using the finest ingredients and authentic Andhra recipes.
            </p>

            <div className="about-badges">

              <div className="about-badge">

                <div className="badge-icon">
                  🌿
                </div>

                <div className="badge-title">
                  100% Natural
                </div>

                <div className="badge-sub">
                  No Preservatives
                </div>

              </div>

              <div className="about-badge">

                <div className="badge-icon">
                  🏺
                </div>

                <div className="badge-title">
                  Traditional Recipe
                </div>

                <div className="badge-sub">
                  Homemade Taste
                </div>

              </div>

              <div className="about-badge">

                <div className="badge-icon">
                  ⭐
                </div>

                <div className="badge-title">
                  Premium Quality
                </div>

                <div className="badge-sub">
                  Hygienically Prepared
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* PRODUCTS SECTION */}

      <section className="products" id="products">

        <div className="sec-head">
          <h2>Our Products</h2>
        </div>

        <div className="sec-divider">

          <div className="sec-divider-line"></div>

          <span className="sec-divider-heart">
            ♥
          </span>

          <div className="sec-divider-line"></div>

        </div>

        <div className="products-grid">


          {/* PRODUCT 1 */}

          <div className="product-card">

            <img
              src="/Chiken Pickles.jpg"
              alt="Chicken Pickle"
            />

            <span className="product-badge">
              Bestseller
            </span>

            <div className="product-info">
               
              <h3>
                Chicken Pickle
              </h3>

              <p>
                Classic spicy chicken pickle made with authentic Indian spices.
              </p>

              <a href="/order" className="order-btn">
  🛒 Order Online for just Rs.750 per KG
</a>

            </div>

          </div>


          {/* PRODUCT 2 */}

          <div className="product-card">

            <img
              src="Mutton Pickles.jpg"
              alt="Mutton Pickle"
            />

            <div className="product-info">

              <h3>
                Mutton Pickle
              </h3>

              <p>
                Tangy and robust mutton pickle perfect with every meal.
              </p>

              <a href="/order" className="order-btn">
  🛒 Order Online for just Rs.950 per KG
</a>

            </div>

          </div>


          {/* PRODUCT 3 */}

          <div className="product-card">

            <img
              src="Chiken Gongura Pickles.jpg"
              alt="Chicken Gongura Pickle"
            />

            <span className="product-badge">
              Special
            </span>

            <div className="product-info">

              <h3>
                Chicken Gongura Pickle
              </h3>

              <p>
                Tangy gongura leaves with tender chicken and Andhra spices.
              </p>

             <a href="/order" className="order-btn">
  🛒 Order Online for just Rs.850 per KG
</a>

              

            </div>

          </div>


          {/* PRODUCT 4 */}

          <div className="product-card">

            <img
              src="Mutton Gongura Pickles.jpg"
              alt="Mutton Gongura Pickle"
            />

            <span className="product-badge">
              Special
            </span>

            <div className="product-info">

              <h3>
                Mutton Gongura Pickle
              </h3>

              <p>
                Homemade mutton pickle prepared with rich Andhra gongura flavors.
              </p>

              <a href="/order" className="order-btn">
  🛒 Order Online for just Rs.1150 per KG
</a>


            </div>

          </div>

        </div>

      </section>
          <OrderForm />

      {/* CONTACT SECTION */}

      <section className="contact" id="contact">

        <div className="sec-head">
          <h2>Contact Us</h2>
        </div>

        <div className="sec-divider">

          <div className="sec-divider-line"></div>

          <span className="sec-divider-heart">
            ♥
          </span>

          <div className="sec-divider-line"></div>

        </div>

        <div className="contact-grid">

          <div className="contact-card">

            <div className="contact-icon-circle">
              📞
            </div>

            <div className="contact-details">

              <h4>
                Call Us
              </h4>

              <p>
                9949452911
              </p>

            </div>

          </div>


          <div className="contact-card">

            <div className="contact-icon-circle">
              📍
            </div>

            <div className="contact-details">

              <h4>
                Location
              </h4>

              <p>
                Anantapur, Andhra Pradesh
              </p>

            </div>

          </div>


          <div className="contact-card">

            <div className="contact-icon-circle">
              💬
            </div>

            <div className="contact-details">

              <h4>
                WhatsApp
              </h4>

              <p>
                9949452911
              </p>

            </div>

          </div>

        </div>

      </section>

        

      {/* FOOTER */}

      <footer>

        <p>
          © 2026 <span>Vee Pickles</span> · All Rights Reserved
        </p>

      </footer>

    </>
  );
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
  <Route path="/" element={<Website />} />

  <Route path="/admin" element={<AdminPage />} />

  <Route
    path="/dashboard"
    element={
      <ProtectedRoute>
        <AdminOrders />
      </ProtectedRoute>
    }
  />

  <Route path="/order" element={<OrderPage />} />
</Routes>
    </BrowserRouter>
  );
}


export default App;