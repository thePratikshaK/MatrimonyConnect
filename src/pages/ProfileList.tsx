import { useState } from 'react';
import './ProfileList.css';

const mockProfiles = [
  {
    name: 'Alice Johnson',
    age: 29,
    location: 'New York',
    bio: 'Enthusiastic traveler and foodie.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Michael Smith',
    age: 34,
    location: 'Los Angeles',
    bio: 'Avid reader and tech enthusiast.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Emily Davis',
    age: 27,
    location: 'Chicago',
    bio: 'Passionate about music and arts.',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
];

export default function ProfileList() {
  const [sort, setSort] = useState('relevance');
  return (
    <div className="profileListRoot">
      <aside className="profileListSidebar">
        <div className="profileListFilters">
          <div className="filterTitle">Filters</div>
          <div className="filterGroup">
            <label>Age Range</label>
            <input type="range" min={18} max={50} defaultValue={30} className="filterSlider" />
          </div>
          <div className="filterGroup">
            <label>Location</label>
            <div className="filterCheckboxes">
              <label><input type="checkbox" /> New York</label>
              <label><input type="checkbox" /> Los Angeles</label>
              <label><input type="checkbox" /> Chicago</label>
            </div>
          </div>
          <div className="filterGroup">
            <label>Education</label>
            <div className="filterCheckboxes">
              <label><input type="checkbox" /> Bachelor's</label>
              <label><input type="checkbox" /> Master's</label>
              <label><input type="checkbox" /> PhD</label>
            </div>
          </div>
        </div>
      </aside>
      <main className="profileListMain">
        <div className="profileListTopBar">
          <div className="profileListResultsTitle">Search Results</div>
          <select className="profileListSort" value={sort} onChange={e => setSort(e.target.value)}>
            <option value="relevance">Sort by Relevance</option>
            <option value="age">Sort by Age</option>
            <option value="name">Sort by Name</option>
          </select>
        </div>
        <div className="profileListGrid">
          {mockProfiles.map((profile, i) => (
            <div className="profileListCard" key={i}>
              <img src={profile.avatar} alt={profile.name} className="profileListAvatar" />
              <div className="profileListName">{profile.name}, {profile.age}</div>
              <div className="profileListLocation">Location: {profile.location}</div>
              <div className="profileListBio">Bio: {profile.bio}</div>
              <button className="profileListBtn">View Profile</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
} 