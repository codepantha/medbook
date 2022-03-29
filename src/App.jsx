import { Routes, Route } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import Doctors from './pages/Doctors/Doctors';
import Book from './pages/Book/Book';
import Appointments from './pages/Appointments/Appointments';
import AddDoctor from './pages/AddDoctor/AddDoctor';
import SideBar from './components/sidebar/Sidebar';
import HamburgerIcon from './components/HamburgerIcon/HamburgerIcon';

function App() {
  const [menuOpened, setMenuOpened] = useState(false);

  const handleMenu = () => {
    setMenuOpened((prev) => !prev);
  };
  return (
    <>
      <header>
        <nav>
          <HamburgerIcon handleMenu={handleMenu} menuOpened={menuOpened} />
        </nav>
      </header>
      <main className="grid grid-cols-12 h-screen">
        <SideBar menuOpened={menuOpened} />
        <section className="col-span-12 min-h-full pt-20 dark-theme-bg theme-transition md:col-span-10 md:mt-0">
          <Routes>
            <Route path="/" element={<Doctors />} />
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
