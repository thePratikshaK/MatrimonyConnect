import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Signup.css';

export default function Signup() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) newErrors.email = 'Invalid email';
    if (!form.password) newErrors.password = 'Password is required';
    if (!form.gender) newErrors.gender = 'Gender is required';
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    setSubmitted(true);
    if (Object.keys(validationErrors).length === 0) {
      // Submit logic here
      navigate('/dashboard');
    }
  };

  return (
    <div className="signup-bg">
      <form className="signup-card" onSubmit={handleSubmit} autoComplete="off">
        <h2>Register</h2>
        <div className="signup-field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className="signup-error">{errors.name}</span>}
        </div>
        <div className="signup-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="signup-error">{errors.email}</span>}
        </div>
        <div className="signup-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className={errors.password ? 'error' : ''}
          />
          {errors.password && <span className="signup-error">{errors.password}</span>}
        </div>
        <div className="signup-field gender-field">
          <label>Gender</label>
          <div className="gender-options">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={form.gender === 'male'}
                onChange={handleChange}
              />{' '}
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={form.gender === 'female'}
                onChange={handleChange}
              />{' '}
              Female
            </label>
          </div>
          {errors.gender && <span className="signup-error">{errors.gender}</span>}
        </div>
        <button className="signup-btn" type="submit">Register</button>
        {submitted && Object.keys(errors).length === 0 && (
          <div className="signup-success">Registration successful!</div>
        )}
      </form>
    </div>
  );
}
