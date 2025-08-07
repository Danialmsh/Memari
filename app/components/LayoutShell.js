import Navbar from './Navbar';
import Footer from './Footer';

export default function LayoutShell({ children }) {
  return (
    <>
      <Navbar />
      <main className="container my-4">{children}</main>
      <Footer />
    </>
  );
}
