import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EditProfile.css';

const initialProfile = {
  name: 'Dr. Swapnil Sahebrao Ware',
  dob: '07/10/1989',
  weight: '68 kg',
  height: "5'6\"",
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
};

export default function EditProfile() {
  const [profile, setProfile] = useState(initialProfile);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would save the profile (API call)
    navigate(`/profile/1`);
  };

  const handleGoBack = () => {
    navigate(`/profile/1`);
  };

  return (
    <div className="editProfileRoot">
      <form className="editProfileCard" onSubmit={handleSubmit} autoComplete="off">
        <h2>Edit Profile</h2>
        <div className="editProfileGrid">
          <div className="editProfileField">
            <label>Name</label>
            <input name="name" value={profile.name} onChange={handleChange} />
          </div>
          <div className="editProfileField">
            <label>Date of Birth</label>
            <input name="dob" value={profile.dob} onChange={handleChange} />
          </div>
          <div className="editProfileField">
            <label>Weight</label>
            <input name="weight" value={profile.weight} onChange={handleChange} />
          </div>
          <div className="editProfileField">
            <label>Height</label>
            <input name="height" value={profile.height} onChange={handleChange} />
          </div>
          <div className="editProfileField">
            <label>Education</label>
            <input name="education" value={profile.education} onChange={handleChange} />
          </div>
          <div className="editProfileField">
            <label>Religion</label>
            <input name="religion" value={profile.religion} onChange={handleChange} />
          </div>
          <div className="editProfileField">
            <label>Blood Group</label>
            <input name="bloodGroup" value={profile.bloodGroup} onChange={handleChange} />
          </div>
          <div className="editProfileField">
            <label>Complexion</label>
            <input name="complexion" value={profile.complexion} onChange={handleChange} />
          </div>
          <div className="editProfileField">
            <label>Place of Work</label>
            <input name="workPlace" value={profile.workPlace} onChange={handleChange} />
          </div>
          <div className="editProfileField">
            <label>Salary</label>
            <input name="salary" value={profile.salary} onChange={handleChange} />
          </div>
          <div className="editProfileField">
            <label>Father's Name</label>
            <input name="fatherName" value={profile.fatherName} onChange={handleChange} />
          </div>
          <div className="editProfileField">
            <label>Mother's Name</label>
            <input name="motherName" value={profile.motherName} onChange={handleChange} />
          </div>
          <div className="editProfileField">
            <label>Brothers</label>
            <input name="brothers" value={profile.brothers} onChange={handleChange} />
          </div>
          <div className="editProfileField">
            <label>Sisters</label>
            <input name="sisters" value={profile.sisters} onChange={handleChange} />
          </div>
          <div className="editProfileField editProfileFieldFull">
            <label>Expectations</label>
            <textarea name="expectations" value={profile.expectations} onChange={handleChange} />
          </div>
          <div className="editProfileField editProfileFieldFull">
            <label>Present Address</label>
            <textarea name="presentAddress" value={profile.presentAddress} onChange={handleChange} />
          </div>
          <div className="editProfileField editProfileFieldFull">
            <label>Permanent Address</label>
            <textarea name="permanentAddress" value={profile.permanentAddress} onChange={handleChange} />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
          <button type="button" className="editProfileBackBtn" onClick={handleGoBack}>Go Back</button>
          <button className="editProfileBtn" type="submit">Save</button>
        </div>
      </form>
    </div>
  );
} 