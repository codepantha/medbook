import {
  Routes, Route, useLocation, useNavigate,
} from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Doctors from './pages/Doctors/Doctors';
import Book from './pages/Book/Book';
import Appointments from './pages/Appointments/Appointments';
import AddDoctor from './pages/AddDoctor/AddDoctor';
import SideBar from './components/sidebar/Sidebar';
import HamburgerIcon from './components/HamburgerIcon/HamburgerIcon';
import DetailPage from './components/DetailPage/DetailPage';
import LandingPage from './pages/LandingPage/LandingPage';

function App() {
  const [menuOpened, setMenuOpened] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.users.currentUser);

  useEffect(() => {
    if (menuOpened && window.innerWidth < 768) {
      document.getElementsByTagName('body')[0].classList.add('overflow-hidden');
    } else {
      document.getElementsByTagName('body')[0].classList.remove('overflow-hidden');
    }
    if (!currentUser?.name) navigate('/landing-page');
  }, [menuOpened]);

  // initial theme state from local storage
  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (localTheme) {
      document.getElementsByTagName('html')[0].classList.add(localTheme);
    }
  }, []);

  const handleMenu = () => {
    if (window.innerWidth < 768) setMenuOpened((prev) => !prev);
  };
  return (
    <>
      <header>
        <nav>
          <HamburgerIcon handleMenu={handleMenu} menuOpened={menuOpened} />
        </nav>
      </header>
      <main className="grid grid-cols-12 h-screen">
        <SideBar menuOpened={menuOpened} setMenuOpened={handleMenu} />
        <section className="col-span-12 dark-theme-bg theme-transition md:col-span-10 h-screen">
          <Routes>
            {!currentUser?.name && <Route path="/landing-page" element={<LandingPage />} />}
            <Route path="/" element={<Doctors />} />
            <Route path="/doctor-details/:id" element={<DetailPage data={location.state} />} />
            <Route path="/book-appointment" element={<Book />} />
            <Route path="/my-appointments" element={<Appointments />} />
            <Route path="/add-doctor" element={<AddDoctor />} />
          </Routes>
        </section>
      </main>
    </>
  );
}

export default App;
