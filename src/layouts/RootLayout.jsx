import NavbarComponent from './../components/NavBar/Navbar';
import { Outlet } from 'react-router-dom';
function RootLayout({ children }) {
  return (
    <>
      <NavbarComponent />
      <Outlet/>
    </>
  );
}

export default RootLayout;