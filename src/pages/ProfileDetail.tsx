import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProfileDetail.css';

interface ProfileDetail {
  id: string;
  name: string;
  dob: string;
  weight: string;
  height: string;
  education: string;
  religion: string;
  bloodGroup: string;
  complexion: string;
  workPlace: string;
  salary: string;
  fatherName: string;
  motherName: string;
  brothers: string;
  sisters: string;
  expectations: string;
  presentAddress: string;
  permanentAddress: string;
  photo?: string;
}

const ProfileDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<ProfileDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Replace with actual API call
    const mockProfile: ProfileDetail = {
      id: '1',
      name: 'Dr. Swapnil Sahebrao Ware',
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
      photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    };

    setProfile(mockProfile);
    setLoading(false);
  }, [id]);

  if (loading) {
    return <div>Loading profile...</div>;
  }

  if (!profile) {
    return <div>Profile not found</div>;
  }

  return (
    <div className="profileDetailRoot">
      <div className="profileDetailCard">
        <button className="profileEditBtn" title="Edit Profile" onClick={() => navigate('/profile/edit')}>
          <span role="img" aria-label="edit">✏️</span> Edit
        </button>
        <div className="profileHeader">
          <img src={profile.photo} alt={profile.name} className="profileAvatar" />
          <div>
            <div className="profileName">{profile.name}</div>
            <div className="profileStatus">Active Member</div>
          </div>
        </div>
        <div className="profileSection">
          <div className="sectionTitle">Personal Information</div>
          <div className="profileRow"><span className="profileLabel">Date of Birth:</span><span className="profileValue">{profile.dob}</span></div>
          <div className="profileRow"><span className="profileLabel">Weight:</span><span className="profileValue">{profile.weight}</span></div>
          <div className="profileRow"><span className="profileLabel">Height:</span><span className="profileValue">{profile.height}</span></div>
          <div className="profileRow"><span className="profileLabel">Education:</span><span className="profileValue">{profile.education}</span></div>
          <div className="profileRow"><span className="profileLabel">Religion:</span><span className="profileValue">{profile.religion}</span></div>
          <div className="profileRow"><span className="profileLabel">Blood Group:</span><span className="profileValue">{profile.bloodGroup}</span></div>
          <div className="profileRow"><span className="profileLabel">Complexion:</span><span className="profileValue">{profile.complexion}</span></div>
        </div>
        <div className="profileSection">
          <div className="sectionTitle">Professional Information</div>
          <div className="profileRow"><span className="profileLabel">Place of Work:</span><span className="profileValue">{profile.workPlace}</span></div>
          <div className="profileRow"><span className="profileLabel">Salary:</span><span className="profileValue">{profile.salary}</span></div>
        </div>
        <div className="profileSection">
          <div className="sectionTitle">Family Details</div>
          <div className="profileRow"><span className="profileLabel">Father's Name:</span><span className="profileValue">{profile.fatherName}</span></div>
          <div className="profileRow"><span className="profileLabel">Mother's Name:</span><span className="profileValue">{profile.motherName}</span></div>
          <div className="profileRow"><span className="profileLabel">Brothers:</span><span className="profileValue">{profile.brothers}</span></div>
          <div className="profileRow"><span className="profileLabel">Sisters:</span><span className="profileValue">{profile.sisters}</span></div>
        </div>
        <div className="profileSection">
          <div className="sectionTitle">Expectations</div>
          <div className="sectionContent">{profile.expectations}</div>
        </div>
        <div className="profileSection">
          <div className="sectionTitle">Address</div>
          <div className="profileRow"><span className="profileLabel">Present Address:</span><span className="profileValue">{profile.presentAddress}</span></div>
          <div className="profileRow"><span className="profileLabel">Permanent Address:</span><span className="profileValue">{profile.permanentAddress}</span></div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetailPage; 