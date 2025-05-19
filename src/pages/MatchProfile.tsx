import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './MatchProfile.css';

const mockProfiles = [
  {
    name: 'Alice Johnson',
    age: 29,
    location: 'New York',
    bio: 'Enthusiastic traveler and foodie.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    dob: '07/10/1989',
    weight: '68 kg',
    height: '5\'6"',
    education: 'B.D.S',
    religion: 'Buddhist',
    bloodGroup: 'AB+',
    complexion: 'Wheatish',
    workPlace: 'Own a Polyclinic. Nirvana Dental Clinic, Georai (dist) Beed',
    salary: 'Discussed Later',
    fatherName: 'Sahebrao Ayaji Ware',
    motherName: 'Snehprabha Sahebrao Ware',
    brothers: 'Unmarried',
    sisters: '',
    expectations: 'BAMS, MBBS',
    presentAddress: 'Georai (Dist) Beed',
    permanentAddress: 'Georai (Dist) Beed',
    photos: [
      'https://randomuser.me/api/portraits/women/44.jpg',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=400&h=400',
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=400&h=400',
    ],
  },
  {
    name: 'Michael Smith',
    age: 34,
    location: 'Los Angeles',
    bio: 'Avid reader and tech enthusiast.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    dob: '07/10/1989',
    weight: '68 kg',
    height: '5\'6"',
    education: 'B.D.S',
    religion: 'Buddhist',
    bloodGroup: 'AB+',
    complexion: 'Wheatish',
    workPlace: 'Own a Polyclinic. Nirvana Dental Clinic, Georai (dist) Beed',
    salary: 'Discussed Later',
    fatherName: 'Sahebrao Ayaji Ware',
    motherName: 'Snehprabha Sahebrao Ware',
    brothers: 'Unmarried',
    sisters: '',
    expectations: 'BAMS, MBBS',
    presentAddress: 'Georai (Dist) Beed',
    permanentAddress: 'Georai (Dist) Beed',
    photos: [
      'https://randomuser.me/api/portraits/men/32.jpg',
      'https://images.unsplash.com/photo-1519340333755-c190485c5b4a?auto=format&fit=facearea&w=400&h=400',
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&h=400',
    ],
  },
  {
    name: 'Emily Davis',
    age: 27,
    location: 'Chicago',
    bio: 'Passionate about music and arts.',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    dob: '07/10/1989',
    weight: '68 kg',
    height: '5\'6"',
    education: 'B.D.S',
    religion: 'Buddhist',
    bloodGroup: 'AB+',
    complexion: 'Wheatish',
    workPlace: 'Own a Polyclinic. Nirvana Dental Clinic, Georai (dist) Beed',
    salary: 'Discussed Later',
    fatherName: 'Sahebrao Ayaji Ware',
    motherName: 'Snehprabha Sahebrao Ware',
    brothers: 'Unmarried',
    sisters: '',
    expectations: 'BAMS, MBBS',
    presentAddress: 'Georai (Dist) Beed',
    permanentAddress: 'Georai (Dist) Beed',
    photos: [
      'https://randomuser.me/api/portraits/women/65.jpg',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&h=400',
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=400&h=400',
    ],
  },
];

export default function MatchProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const profile = mockProfiles[Number(id) - 1];

  // Photo modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const [zoom, setZoom] = useState(1);

  if (!profile) {
    return <div className="matchProfileNotFound"><h2>Profile not found</h2></div>;
  }

  const openModal = (idx: number) => {
    setModalIndex(idx);
    setZoom(1);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);
  const nextPhoto = () => setModalIndex((modalIndex + 1) % profile.photos.length);
  const prevPhoto = () => setModalIndex((modalIndex - 1 + profile.photos.length) % profile.photos.length);
  const zoomIn = () => setZoom(z => Math.min(z + 0.2, 2.5));
  const zoomOut = () => setZoom(z => Math.max(z - 0.2, 1));

  return (
    <> 
    <div className="matchProfileRoot">
      <div className="matchProfileCard">
        <button className="matchProfileBackBtn" onClick={() => navigate('/profiles')} title="Back to List">
          &#8592;
        </button>
        <div className="matchProfileAvatarTop">
          <img src={profile.avatar} alt={profile.name} className="matchProfileAvatarSquare" />
        </div>
        <div className="matchProfileRight">
          <h2 className="matchProfileName">{profile.name}, {profile.age}</h2>
          <div className="matchProfileDetail"><b>Date of Birth:</b> {profile.dob}</div>
          <div className="matchProfileDetail"><b>Weight:</b> {profile.weight}</div>
          <div className="matchProfileDetail"><b>Height:</b> {profile.height}</div>
          <div className="matchProfileDetail"><b>Education:</b> {profile.education}</div>
          <div className="matchProfileDetail"><b>Religion:</b> {profile.religion}</div>
          <div className="matchProfileDetail"><b>Blood Group:</b> {profile.bloodGroup}</div>
          <div className="matchProfileDetail"><b>Complexion:</b> {profile.complexion}</div>
          <div className="matchProfileDetail"><b>Place of Work:</b> {profile.workPlace}</div>
          <div className="matchProfileDetail"><b>Salary:</b> {profile.salary}</div>
          <div className="matchProfileDetail"><b>Father's Name:</b> {profile.fatherName}</div>
          <div className="matchProfileDetail"><b>Mother's Name:</b> {profile.motherName}</div>
          <div className="matchProfileDetail"><b>Brothers:</b> {profile.brothers}</div>
          <div className="matchProfileDetail"><b>Sisters:</b> {profile.sisters}</div>
          <div className="matchProfileDetail"><b>Expectations:</b> {profile.expectations}</div>
          <div className="matchProfileDetail"><b>Present Address:</b> {profile.presentAddress}</div>
          <div className="matchProfileDetail"><b>Permanent Address:</b> {profile.permanentAddress}</div>
          <div className="matchProfileDetail"><b>Bio:</b> {profile.bio}</div>
        </div>
       
      </div>
      {/* Modal for large photo view */}
      {modalOpen && (
        <div className="matchProfileModalBg" onClick={closeModal}>
          <div className="matchProfileModal" onClick={e => e.stopPropagation()}>
            <img
              src={profile.photos[modalIndex]}
              alt={`User photo ${modalIndex + 1}`}
              className="matchProfileModalImg"
              style={{ transform: `scale(${zoom})` }}
            />
            <div className="matchProfileModalControls">
              <button onClick={prevPhoto}>&#8592;</button>
              <button onClick={zoomOut}>-</button>
              <button onClick={zoomIn}>+</button>
              <button onClick={nextPhoto}>&#8594;</button>
              <button onClick={closeModal}>&#10005;</button>
            </div>
          </div>
        </div>
      )}
    </div>
    <div className="matchProfileGallery">
    <h3 className="matchProfileGalleryTitle">Photos</h3>
    <div className="matchProfileGalleryGrid">
      {profile.photos.map((photo, idx) => (
        <img
          key={idx}
          src={photo}
          alt={`User photo ${idx + 1}`}
          className="matchProfileGalleryThumb"
          onClick={() => openModal(idx)}
        />
      ))}
    </div>
  </div>
  </>
  );
} 