import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import logo from '../../assets/logo.jpg';
import darkLogo from '../../assets/logo_ccexpress.png';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import { logoutUser } from '../../redux/actions/action';

const Sidebar = ({ menuOpened, setMenuOpened }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = location;

  const logOut = () => {
    setMenuOpened();
    dispatch(logoutUser());
    localStorage.removeItem('currentUser');
    navigate('/landing-page');
  };

  return (
    <div
      className={`bg-white shadow-lg dark:border-r dark:border-gray-800 dark-theme-bg theme-transition col-span-12  transition duration-200 fixed sidebar w-screen md:w-full md:translate-x-0 z-40 ${
        menuOpened ? 'transform translate-x-0 h-screen ' : 'transform translate-x-full '
      } md:col-span-2 ${
        pathname.includes('landing-page') ? 'md:hidden' : 'md:block'
      } h-screen md:h-full`}
      id="sideMenu"
    >
      <img
        src={logo}
        alt="logo"
        className="w-1/2 mx-auto mt-4 mb-6 bg-transparent rounded-md dark:hidden"
      />
      <img
        src={darkLogo}
        alt="logo"
        className="w-1/2 mx-auto mt-4 mb-6 bg-transparent rounded-md hidden dark:block"
      />

      <nav>
        <ul>
          <li className="nav-item">
            <NavLink
              to="/"
              className="nav-link"
              onClick={() => {
                setMenuOpened();
              }}
            >
              Doctors
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/book-appointment"
              className="nav-link"
              onClick={() => {
                setMenuOpened();
              }}
            >
              Book Appointment
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/my-appointments"
              className="nav-link"
              onClick={() => {
                setMenuOpened();
              }}
            >
              My appointments
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/add-doctor"
              className="nav-link"
              onClick={() => {
                setMenuOpened();
              }}
            >
              Add doctor
            </NavLink>
          </li>
          <li className="nav-item">
            <button type="button" className="nav-link" onClick={logOut}>
              Log Out
            </button>
          </li>
          <li className="nav-item">
            <ThemeToggler />
          </li>
        </ul>
      </nav>
    </div>
  );
};

Sidebar.propTypes = {
  menuOpened: PropTypes.bool.isRequired,
  setMenuOpened: PropTypes.func.isRequired,
};
export default Sidebar;
