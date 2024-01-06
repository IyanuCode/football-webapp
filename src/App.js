import './App.css';
import { LandingPage } from './components/LandingPage';
import { Featured } from './components/Featured';
import { AppDownload } from './components/AppDownload';
import { Subscribe } from './components/Subscribe';
import { Footer } from './components/Footer';



function App() {
  return (
    <div>
      <LandingPage/>
      <Featured/>
      <AppDownload/>
      <Subscribe/>
      <Footer/>

    </div>
  );
}

export default App;
