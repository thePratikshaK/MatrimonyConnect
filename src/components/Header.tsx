import { Link } from 'react-router-dom';
import './Header.css';

interface HeaderProps {
  showProfileLink?: boolean;
}

export default function Header({ showProfileLink = true }: HeaderProps) {
  return (
    <header className="app-header">
      <div className="header-logo">
        <span role="img" aria-label="heart">💜</span> MatrimonyConnect
      </div>
      <nav className="header-nav">
        <Link to="/">Home</Link>
        {/* <Link to="/profiles">Browse Profiles</Link> */}
        <Link to="/settings">Settings</Link>
        {showProfileLink && (
          <Link to="/profile/1" className="profile-link">
            <span className="header-avatar-icon">
              <span role="img" aria-label="user">👤</span>
            </span>
          </Link>
        )}
      </nav>
    </header>
  );
} 