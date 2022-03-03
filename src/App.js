import './App.css';
import Navbar from './Components/Navbar';
import NextGenDigitalBanking from './Components/NextGenDigitalBanking';
import WhyChooseEasybank from './Components/WhyChooseEasybank';
import LatestArticles from './Components/LatestArticles';
import Footer from './Components/Footer';

function App() {
  let padding = 180;
  let paddingLeftS = "pl-[" + padding + "px]";
  let paddingRightS = "pr-[" + padding + "px]";
  return (
    <div className="h-auto w-full flex flex-col">
      <Navbar paddingLeft={paddingLeftS} paddingRight={paddingRightS} />
      <NextGenDigitalBanking paddingLeft={paddingLeftS} paddingRight={paddingRightS} />
      <WhyChooseEasybank paddingLeft={paddingLeftS} paddingRight={paddingRightS} />
      <LatestArticles paddingLeft={paddingLeftS} paddingRight={paddingRightS} />
      <Footer paddingLeft={paddingLeftS} paddingRight={paddingRightS} />
    </div>
  );
}

export default App;

/*
Navbar
NextGenDigitalBanking
WhyChooseEasybank
Reason
LatestArticles
Article
Footer
*/