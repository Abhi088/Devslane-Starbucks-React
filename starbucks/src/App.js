import Nav from './Components/Nav';
import Header from './Components/Header';
import Hero from './Components/Hero';
import GettingStarted from './Components/GettingStarted';
import Favourites from './Components/Favourites';
import EndlessExtras from './Components/EndlessExtras';
import EarnStars from './Components/EarnStars';
import StarCode from './Components/StarCode';
import RulesAndInfo from './Components/RulesAndInfo';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Hero />
      <GettingStarted />
      <Favourites />
      <EndlessExtras />
      <EarnStars />
      <StarCode />
      <RulesAndInfo />
      <hr className="my-12" />
      <Footer />
    </div>
  );
}

export default App;
