import './App.css';
import Code from './components/Code';
import Download from './components/Download';
import Feedbackcopy from './components/Feedbackcopy';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import Generate from './components/Generate';
import Header from './components/Header';
import Integration from './components/Integration';
import Mission from './components/Mission';
import NotabBackground from './components/NotabBackground';
import Order from './components/Order';
import Presentation from './components/Presentation';
import Scanner from './components/Scanner';
import Offer from './components/Offer';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Presentation />
        <Offer />
        <Mission />
        <Scanner />
        <Integration />
        <Code />
        <Generate />
        <Order />
        <NotabBackground />
        <Feedbackcopy />
        <Download />
      </main>
      <Footer />
    </div>
  );
}

export default App;
