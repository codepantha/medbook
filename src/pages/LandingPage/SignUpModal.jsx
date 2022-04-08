import React, { useState } from 'react';
import Input from '../../components/Input/Input';
import domain from '../../redux/thunk/api';

const SignUpModal = () => {
  const [input, setInput] = useState('');
  const [errors, setErrors] = useState([]);

  const createUser = async () => {
    const response = await fetch(`${domain}/api/v1/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: input,
      }),
    });
    const data = await response.json();
    setErrors([]);
    if (data?.errors?.name?.length) {
      setErrors(data.errors.name);
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    createUser();
  };

  const closeModal = () => {
    const signUpModal = document.getElementById('signup-modal');
    signUpModal.close();
  };
  return (
    <div>
      <dialog id="signup-modal" className="p-10 rounded-md relative max-w-md">
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
        <h2 className="text-center text-3xl mb-6">Sign up</h2>
        <form method="dialog" onSubmit={submitHandler}>
          <Input
            value={input}
            handleChange={handleChange}
            placeholder="Enter a unique name"
            type="text"
            name="name"
            id="name"
          />
          <span className="text-gray-600 text-sm">
            Name should be unique and between 5 to 50 char.
          </span>
          {errors.length > 0 && (
            <ul className="p-2" id="errors-list">
              {errors.map((error, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <li key={index} className="text-red-600">
                  {error}
                </li>
              ))}
            </ul>
          )}
          <button type="submit" className="btn btn-primary py-2 w-full mt-4">
            Sign up
          </button>
        </form>
      </dialog>
    </div>
  );
};

export default SignUpModal;
