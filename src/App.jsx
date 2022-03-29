import { Routes, Route } from 'react-router-dom';
import './App.css';
import Doctors from './pages/Doctors/Doctors';
import Book from './pages/Book/Book';
import Appointments from './pages/Appointments/Appointments';
import AddDoctor from './pages/AddDoctor/AddDoctor';
import SideBar from './components/sidebar/Sidebar';

function App() {
  return (
    <main className="grid grid-cols-12 h-screen">
      <SideBar />
      <div
        div
        className="col-span-10 min-h-full dark:bg-gray-500 dark:text-primaryContrast theme-transition"
      >
        <Routes>
          <Route path="/" element={<Doctors />} />
          <Route path="/book-appointment" element={<Book />} />
          <Route path="/my-appointments" element={<Appointments />} />
          <Route path="/add-doctor" element={<AddDoctor />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
