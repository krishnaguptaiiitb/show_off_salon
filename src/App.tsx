import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';
import { useRoute } from '@/lib/hooks';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Services } from '@/pages/Services';
import { Gallery } from '@/pages/Gallery';
import { Contact } from '@/pages/Contact';

function App() {
  const [path, navigate] = useRoute();

  const renderPage = () => {
    switch (path) {
      case '/about':
        return <About navigate={navigate} />;
      case '/services':
        return <Services navigate={navigate} />;
      case '/gallery':
        return <Gallery navigate={navigate} />;
      case '/contact':
        return <Contact />;
      default:
        return <Home navigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f2e9]">
      <Navbar current={path} navigate={navigate} />
      <ScrollProgress navigate={navigate} />
      <main>{renderPage()}</main>
      <Footer navigate={navigate} />
    </div>
  );
}

export default App;
