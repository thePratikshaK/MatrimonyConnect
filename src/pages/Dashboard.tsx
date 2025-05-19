import './Dashboard.css';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const user = {
  name: 'Alexandra Smith',
  status: 'Active Member',
  avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
};

const matches = [
  {
    name: 'John Doe',
    title: 'Engineer, 28',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Emily Johnson',
    title: 'Doctor, 30',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    name: 'Michael Lee',
    title: 'Architect, 32',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
  }
];

export default function Dashboard() {
  return (
    <div className="dashboard-root">
      <Header />
      <main className="dashboard-main">
        <section className="dashboard-profile-card">
          <Link to="/profile/1">
            <img src={user.avatar} alt={user.name} className="profile-avatar" style={{ cursor: 'pointer' }} />
          </Link>
          <div>
            <div className="profile-name">{user.name}</div>
            <div className="profile-status">{user.status}</div>
          </div>
        </section>
        <aside className="dashboard-quicksearch-card">
          <div className="quicksearch-title">Quick Search</div>
          <button className="quicksearch-btn">Search by Age</button>
          <button className="quicksearch-btn">Search by Location</button>
          <button className="quicksearch-btn">Advanced Filters</button>
        </aside>
        <section className="dashboard-matches-card">
          <div className="matches-header">
            <div className="matches-title">Your Matches</div>
            <Link to="/profiles" className="view-all-profiles-btn">View All Profiles</Link>
          </div>
          <div className="matches-list">
            {matches.map((m, i) => (
              <div className="match-card" key={i}>
                <img src={m.avatar} alt={m.name} className="match-avatar" />
                <div className="match-name">{m.name}</div>
                <div className="match-title">{m.title}</div>
              </div>
            ))}
          </div>
        </section>
        <aside className="dashboard-links-card">
          <div className="links-title">Links</div>
          <a href="#" className="dashboard-link">View Full Profile</a>
          <a href="#" className="dashboard-link">Settings</a>
        </aside>
      </main>
    </div>
  );
} 