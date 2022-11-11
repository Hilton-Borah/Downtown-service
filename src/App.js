import './App.css';
import HomePage from './Vik_homepage/HomePage/HomePage';
import DebitModal from './Vik_PaymentPage/ModCompo/debitModal';
import Payment from './Vik_PaymentPage/payment';

function App() {
  return (
    <div className="App">
      {/* <HomePage/> */}
      <Payment/>
      {/* <DebitModal/> */}
    </div>
  );
}

export default App;
