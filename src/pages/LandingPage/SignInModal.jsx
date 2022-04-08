import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input/Input';
import domain from '../../redux/thunk/api';
import { loginUserSuccess } from '../../redux/actions/action';

const SignInModal = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const [error, setError] = useState([]);
  const navigate = useNavigate();

  const authenticate = async () => {
    const response = await fetch(`${domain}/api/v1/users/${input}`);
    const data = await response.json();
    setError('');
    if (data?.status === 'Error') {
      setError(data.message);
    } else {
      dispatch(loginUserSuccess(data.data));
      navigate('/');
      localStorage.setItem('currentUser', JSON.stringify(data.data));
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    authenticate();
  };

  const closeModal = () => {
    const signInModal = document.getElementById('signin-modal');
    signInModal.close();
  };
  return (
    <div>
      <dialog id="signin-modal" className="p-10 rounded-md relative max-w-md">
        <button type="button" onClick={closeModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 absolute top-6 right-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-center text-3xl mb-6">Sign In</h2>
        <form method="dialog" onSubmit={submitHandler}>
          <Input
            value={input}
            handleChange={handleChange}
            placeholder="Enter your unique name"
            type="text"
            name="name"
            id="name"
          />
          {error.length > 0 && <span className="text-red-600 text-sm">{error}</span>}
          <button type="submit" className="btn btn-primary py-2 w-full mt-4">
            Sign in
          </button>
        </form>
      </dialog>
    </div>
  );
};

export default SignInModal;
