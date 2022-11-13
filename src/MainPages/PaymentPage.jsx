import "./PaymentPage.css";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import {DebitModal} from "../Small/DebitModal";
import { getLocalData } from "../Utils/LocalStorage";
import { Link } from "react-router-dom";

const Payment = () => {
  let total = getLocalData("totalPrice")
  return (
    <div
      style={{
        backgroundColor: "#e5e5e5",
        height: "auto",
        fontFamily: "sans-serif",
      }}
    >
      <div className="selectPay">
        <div>
          <FaLongArrowAltLeft fontSize="25px" />
        </div>
        <div>
          <b>Select payment method</b>
          <p>Amount to pay:{`Rs ${total}`}</p>
        </div>
        <Link to={"/"}><div style={{textAlign:"right", marginLeft:"170px",marginTop:"5px", borderBottom:"1px solid blue",cursor:"pointer",color:"Blue"}}>
          Go to Homepage
        </div></Link>
      </div>
      {/* to cover fixed box */}
      <div style={{ width: "40%", height: "76px", color: "#e5e5e5" }}>
        to cover fixed box
      </div>
      {/* payment types */}
      <div className="payType">
        <b>Debit or Credit card</b>
        <DebitModal>
        <div className="imgBox">
          <div>
            <img
              src="https://camo.githubusercontent.com/b734eeb6e34017c2ce6b78994ec5894548a20124669800bb97d37722adf82ecf/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f757262616e636c61702f696d6167652f75706c6f61642f745f686967685f7265735f63617465676f72792c715f6175746f3a6c6f772c665f6175746f2c6470725f312f696d616765732f6d6f6e65742f637573746f6d65722d6170702d6d6f6e65742f313632323031353736393634312d3366633138372e706e67"
              alt="debit card"
            />
            <p>Add a card</p>
          </div>
          <MdKeyboardArrowRight fontSize="20px" />
        </div>
        </DebitModal>
      </div>
      <div className="payType">
        <b>Wallet</b>
        <div className="imgBox">
          <div>
            <img
              src="https://camo.githubusercontent.com/c5cdc072bdce3180bda56773f041580f17876aac1b3ca034035a8edee9933e3b/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f757262616e636c61702f696d6167652f75706c6f61642f745f686967685f7265735f63617465676f72792c715f6175746f3a6c6f772c665f6175746f2c6470725f312f696d616765732f6d6f6e65742f637573746f6d65722d6170702d6d6f6e65742f313632323033353133393931322d6336633764312e706e67"
              alt="paytm"
            />
            <p>Paytm</p>
          </div>
          <MdKeyboardArrowRight fontSize="20px" />
        </div>
      </div>
      <div className="payType">
        <b>UPI</b>
        <div className="imgBox">
          <div>
            <img
              src="https://camo.githubusercontent.com/714fb37b8164ebb3a7fcb0ad1a3582a2e73422707ab0ea0d768a31a67475995b/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f757262616e636c61702f696d6167652f75706c6f61642f745f686967685f7265735f63617465676f72792c715f6175746f3a6c6f772c665f6175746f2c6470725f312f696d616765732f6d6f6e65742f637573746f6d65722d6170702d6d6f6e65742f313632323033353133383735352d6339656139642e706e67"
              alt="UPI"
            />
            <p>Pay via another UPI ID</p>
          </div>
          <MdKeyboardArrowRight fontSize="20px" />
        </div>
      </div>
      <div className="payType">
        <b>Netbanking</b>
        <div className="imgBox">
          <div>
            <img
              src="https://camo.githubusercontent.com/92bc390c14d6fc123b6151653c6dfd8bdfdf7b1b67700d03f47f6a72f73fd2bf/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f757262616e636c61702f696d6167652f75706c6f61642f745f686967685f7265735f63617465676f72792c715f6175746f3a6c6f772c665f6175746f2c6470725f312f696d616765732f6d6f6e65742f637573746f6d65722d6170702d6d6f6e65742f313632323031353736303035362d3133393834302e706e67"
              alt="Netbanking"
            />
            <p>See all banks</p>
          </div>
          <MdKeyboardArrowRight fontSize="20px" />
        </div>
      </div>
      {/* pay after service */}
      <div className="afterServ">
        <b>Pay after service</b>
        <div className="imgBox">
          <div>
            <img
              src="https://camo.githubusercontent.com/da16175ef4d7fc013d576797920640dae65b0338646df904a7dfcd6f504e173e/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f757262616e636c61702f696d6167652f75706c6f61642f745f686967685f7265735f63617465676f72792c715f6175746f3a6c6f772c665f6175746f2c6470725f312f696d616765732f6d6f6e65742f637573746f6d65722d6170702d6d6f6e65742f313632323031353735393637342d3765363763662e706e67"
              alt="pay after serv"
            />
            <div className="desc">
              <p>Pay online after service</p>
              <p style={{color:"green"}}>Rs.10,000 insurance on online payment</p>
            </div>
          </div>
          <MdKeyboardArrowRight fontSize="20px" />
        </div>
        <div className="imgBox">
          <div>
            <img
              src="https://camo.githubusercontent.com/342d0011f027f9788a0f3f8bfcfb972049ea6e16116c8dc45522251c70a12f6e/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f757262616e636c61702f696d6167652f75706c6f61642f745f686967685f7265735f63617465676f72792c715f6175746f3a6c6f772c665f6175746f2c6470725f312f696d616765732f6d6f6e65742f637573746f6d65722d6170702d6d6f6e65742f313632323031353736353635312d3231613461332e706e67"
              alt="pay with cash"
            />
            <div className="desc">
              <p>Pay with cash after service</p>
              <p style={{color:"gray"}}>
                No insurance on cash payment. We recommend you to pay online to
                ensure maximum safety.
              </p>
            </div>
          </div>
          <MdKeyboardArrowRight fontSize="28px" />
        </div>
      </div>
    </div>
  );
};

export default Payment;