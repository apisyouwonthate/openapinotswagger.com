import Navbar from '@components/Navbar';
import SEO from '@components/SEO';
import Footer from '@components/Footer';

export default function Layout({ props, children }) {
  return (
    <>
      <SEO {...props} />
      <div style={{ maxWidth: '65ch', margin: '0 auto' }}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
}
