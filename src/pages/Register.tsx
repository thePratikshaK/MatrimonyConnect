import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface RegisterFormData {
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
  email: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [formData, setFormData] = useState<RegisterFormData>({
    name: '',
    dob: '',
    weight: '',
    height: '',
    education: '',
    religion: '',
    bloodGroup: '',
    complexion: '',
    workPlace: '',
    salary: '',
    fatherName: '',
    motherName: '',
    brothers: '',
    sisters: '',
    expectations: '',
    presentAddress: '',
    permanentAddress: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    try {
      await register(formData);
      navigate('/');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="register-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Weight (kg):</label>
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Height:</label>
          <input
            type="text"
            name="height"
            value={formData.height}
            onChange={handleChange}
            placeholder="e.g., 5'6"
            required
          />
        </div>

        <div className="form-group">
          <label>Education:</label>
          <input
            type="text"
            name="education"
            value={formData.education}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Religion:</label>
          <input
            type="text"
            name="religion"
            value={formData.religion}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Blood Group:</label>
          <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} required>
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>

        <div className="form-group">
          <label>Complexion:</label>
          <select name="complexion" value={formData.complexion} onChange={handleChange} required>
            <option value="">Select Complexion</option>
            <option value="Fair">Fair</option>
            <option value="Wheatish">Wheatish</option>
            <option value="Dark">Dark</option>
          </select>
        </div>

        <div className="form-group">
          <label>Place of Work:</label>
          <input
            type="text"
            name="workPlace"
            value={formData.workPlace}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Salary:</label>
          <input
            type="text"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Father's Name:</label>
          <input
            type="text"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Mother's Name:</label>
          <input
            type="text"
            name="motherName"
            value={formData.motherName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Brothers:</label>
          <input
            type="text"
            name="brothers"
            value={formData.brothers}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Sisters:</label>
          <input
            type="text"
            name="sisters"
            value={formData.sisters}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Expectations:</label>
          <textarea
            name="expectations"
            value={formData.expectations}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Present Address:</label>
          <textarea
            name="presentAddress"
            value={formData.presentAddress}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Permanent Address:</label>
          <textarea
            name="permanentAddress"
            value={formData.permanentAddress}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register; 