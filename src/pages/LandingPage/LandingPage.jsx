import SignUpModal from './SignUpModal';
import SignInModal from './SignInModal';

const LandingPage = () => {
  const handleSignUpModel = () => {
    const signUpModal = document.getElementById('signup-modal');
    const errorsList = document.getElementById('errors-list');
    if (errorsList) errorsList.remove();
    signUpModal.showModal();
  };

  const handleSignInModel = () => {
    const signUpModal = document.getElementById('signin-modal');
    const errorsList = document.getElementById('errors-list');
    if (errorsList) errorsList.remove();
    signUpModal.showModal();
  };

  return (
    <div className="h-screen landing-page bg-no-repeat bg-center grid place-content-center">
      <div>
        <h2 className="text-center text-9xl mb-7 text-white">MedBook</h2>
        <div className="flex gap-4">
          <button
            type="button"
            className="btn btn-primary flex-1 text-2xl font-semibold"
            onClick={handleSignInModel}
          >
            sign in
          </button>
          <button
            type="button"
            className="btn btn-primary flex-1 text-2xl font-semibold"
            onClick={handleSignUpModel}
          >
            sign up
          </button>
        </div>
      </div>
      <SignInModal />
      <SignUpModal />
    </div>
  );
};

export default LandingPage;
