import './Landing.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const featuredMembers = [
  { name: 'Emily, 29', location: 'New York, USA', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'James, 31', location: 'Los Angeles, USA', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Sophia, 28', location: 'Chicago, USA', img: 'https://randomuser.me/api/portraits/women/65.jpg' },
];

export default function Landing() {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [loginData, setLoginData] = useState({ mobile: '', password: '' });
  const [loginError, setLoginError] = useState('');

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
    setLoginError('');
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation
    if (!loginData.mobile.trim() || !loginData.password.trim()) {
      setLoginError('Mobile number and password are required.');
      return;
    }
    // Simulate login success
    setShowLogin(false);
    navigate('/dashboard');
  };

  return (
    <div className="landing-root">
      <header className="landing-header">
        <div className="webTitle">
          <span role="img" aria-label="heart">💜</span> MatrimonyConnect
        </div>
        <nav>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
          <span className="login-label" onClick={() => setShowLogin(true)}><a>Login</a></span>
        </nav>
      </header>
      <section className="hero-section">
        <img className="hero-bg" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80" alt="Happy people" />
        <div className="hero-content">
          <h1>Find Your Perfect Match with MatrimonyConnect</h1>
          <p>Join now and start your journey towards a happy relationship!</p>
          <button className="hero-btn" onClick={() => navigate('/signup')}>Sign Up</button>
        </div>
      </section>
      <section className="features-section">
        <div className="featured-members">
          <h3>Featured Members</h3>
          <div className="members-list">
            {featuredMembers.map((m, i) => (
              <div className="member-card" key={i}>
                <img src={m.img} alt={m.name} />
                <div className="member-info">
                  <div className="member-name">{m.name}</div>
                  <div className="member-location">{m.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="why-choose-us">
          <h3>Why Choose Us</h3>
          <ul>
            <li>Large Member Base</li>
            <li>Secure and Private</li>
            <li>Personalized Matches</li>
          </ul>
        </div>
      </section>
      {/* About Us Section */}
      <section className="about-section" id="about">
        <div className="about-card">
          <h3>About Us</h3>
          <p>
            MatrimonyConnect is dedicated to helping you find your perfect life partner. Our platform offers a secure, user-friendly, and personalized matchmaking experience. With a large member base, advanced search filters, and a commitment to privacy, we make your journey to finding love safe and enjoyable.
          </p>
        </div>
      </section>
      {/* Matrimony Services Section */}
      <section className="services-section" id="services">
        <div className="services-card">
          <h3>Matrimony Services</h3>
          <ul className="services-list">
            <li>Personalized Matchmaking</li>
            <li>Verified Member Profiles</li>
            <li>Advanced Search Filters</li>
            <li>Confidential & Secure Messaging</li>
            <li>Dedicated Customer Support</li>
          </ul>
        </div>
      </section>
      {/* Contact Details Section */}
      <section className="contact-section" id="contact">
        <div className="contact-card">
          <h3>Contact Details</h3>
          <div className="contact-info">
            <div><strong>Address:</strong> 123 Matrimony Lane, City, Country</div>
            <div><strong>Phone:</strong> +1 234 567 8901</div>
            <div><strong>Email:</strong> support@matrimonyconnect.com</div>
          </div>
        </div>
      </section>
      {showLogin && (
        <div className="login-modal-bg">
          <div className="login-modal-card">
            <button className="login-modal-close" onClick={() => setShowLogin(false)}>&times;</button>
            <h2>Login</h2>
            <form onSubmit={handleLoginSubmit} className="login-modal-form">
              <label>Mobile Number</label>
              <input
                type="text"
                name="mobile"
                value={loginData.mobile}
                onChange={handleLoginChange}
                placeholder="Enter mobile number"
                maxLength={15}
              />
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
                placeholder="Enter password"
              />
              {loginError && <div className="login-modal-error">{loginError}</div>}
              <button className="login-modal-btn" type="submit">Login</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
} 