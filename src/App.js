import './App.css';
import Image from './components/Image';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <div className=" flex sm:flex-row flex-col min-h-screen">
      <Image />
      <div className="sm:flex-col w-full">
        <Body />

        <Footer />
      </div>
    </div>
  );
}

export default App;
