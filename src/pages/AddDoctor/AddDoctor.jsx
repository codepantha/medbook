import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input/Input';

const defaultInput = {
  name: '',
  specialty: '',
  dob: '',
  bio: '',
  experience: '',
  profilePic: '',
  consultation: '',
};

const AddDoctor = () => {
  const [inputs, setInputs] = useState(defaultInput);
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const {
    name, specialty, bio, dob, experience, profilePic, consultation,
  } = inputs;

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const resetFields = () => {
    setInputs(defaultInput);
  };

  const processErrorResponse = (errorRes) => {
    const errors = [];
    let newError = '';
    Object.entries(errorRes.error).forEach((error) => {
      newError = `${error[0]} ${error[1][0]}`;
      errors.push(newError);
    });
    return errors;
  };

  const setSuccessOrErrorStates = (res, data) => {
    if (res.status === 201) {
      setSuccess('Doctor created successfully!');
      setErrors([]);
      resetFields();
      setTimeout(() => navigate('/'), 1000);
    } else {
      setErrors(processErrorResponse(data));
      setSuccess(null);
    }
  };

  const addADoctor = async () => {
    try {
      const res = await fetch('http://127.0.0.1:3000/api/v1/doctors', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          bio,
          experience,
          specialty,
          profile_pic: profilePic,
          date_of_birth: dob,
          consultation_fee: consultation,
        }),
      });

      const data = await res.json();
      setSuccessOrErrorStates(res, data);
    } catch (error) {
      setErrors(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addADoctor();
  };

  return (
    <section className="w-full flex justify-center items-center min-h-screen md:h-full bg-slate-200 dark:bg-slate-700">
      <div className="w-5/6 md:w-2/5 h-full md:h-3/4 md:overflow-scroll py-4 px-6 bg-white border-2 border-t-darkContrast shadow-lg">
        <form
          onSubmit={handleSubmit}
          method="post"
          className="w-full flex flex-col justify-center items-center"
        >
          <h2 className="uppercase text-gray-600 text-2xl font-bold mb-2">
            Add a Doctor
          </h2>

          {errors.length
            ? errors.map((error) => (
              <p key={uuidv4()} className="text-sm text-red-800 font-medium">
                {error}
              </p>
            ))
            : ''}

          {success && (
            <p className="text-sm text-green-800 font-medium">{success}</p>
          )}

          <div className="w-full mb-4">
            <span className="label">Name</span>
            <Input
              type="text"
              name="name"
              placeholder="Dr. Burke"
              value={name}
              handleChange={handleChange}
            />
          </div>
          <div className="w-full mb-4">
            <span className="label">Specialty</span>
            <Input
              type="text"
              name="specialty"
              placeholder="Cardio-thoracic surgery"
              value={specialty}
              handleChange={handleChange}
            />
          </div>
          <div className="w-full mb-4">
            <span className="label">Date of birth</span>
            <Input
              type="date"
              name="dob"
              placeholder="1890-04-08"
              value={dob}
              handleChange={handleChange}
            />
          </div>
          <div className="w-full mb-4">
            <span className="label">Bio</span>
            <Input
              type="text"
              name="bio"
              placeholder="tell us a bit about you"
              value={bio}
              handleChange={handleChange}
            />
          </div>
          <div className="w-full mb-4">
            <span className="label">Years of experience</span>
            <Input
              type="number"
              name="experience"
              placeholder="1"
              value={experience}
              handleChange={handleChange}
            />
          </div>
          <div className="w-full mb-4">
            <span className="label">Profile picture</span>
            <Input
              type="text"
              name="profilePic"
              placeholder="https://link-to-your-dp.jpg"
              value={profilePic}
              handleChange={handleChange}
            />
          </div>
          <div className="w-full mb-4">
            <span className="label">Consultation fee</span>
            <Input
              type="text"
              name="consultation"
              placeholder="$100"
              value={consultation}
              handleChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="self-start py-4 px-4 bg-primary text-sm uppercase rounded-md shadow-md text-primaryContrast"
          >
            Add doctor
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddDoctor;
