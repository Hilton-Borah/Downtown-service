import React from 'react'
import { AiFillFacebook } from 'react-icons/ai';
import { BsPinterest } from 'react-icons/bs';
import { FaTwitterSquare } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';
import { SlSocialInstagram } from 'react-icons/sl';
import styles from "./SerchBar.module.css";
const Footer = () => {
  return (
    <div>
          <footer className={styles.footer}>
        <div style={{ margin: "auto" }}>
          <div>
            <p>About us</p>
            <p>UC Impact</p>
            <p>Term & Conditions</p>
            <p>Privacy Policy</p>
            <p>Interest-Based Advertising</p>
            <p>Anti Discrimination Policy</p>
            <p>Partner Welfare Policy</p>
            <p>Blog</p>
            <p>Reviews</p>
            <p>Near Me</p>
            <p>Careers</p>
            <p>Gift Cards</p>
            <p>Contact Us</p>
            <p>Quick Links</p>
          </div>
        </div>
        <hr style={{ margin: "20px auto" }} />
        <p style={{ display: "flex", color: "white" }}>Serving in</p>
        <div>
          <div className={styles.cnty}>USA</div>
          <div>
            <p>Austin</p>
            <p>Dallas</p>
            <p>New York City</p>
          </div>
          <div className={styles.cnty}>IND</div>
          <div>
            <p>Agra</p>
            <p>Ahmedabad</p>
            <p>Alwar</p>
            <p>Amritsar</p>
            <p>Aurangabad</p>
            <p>Banglore</p>
            <p>Bhopal</p>
            <p>Bhubaneshwar</p>
            <p>Chandigarh Tricity</p>
            <p>Chennai</p>
            <p>Coimbatore</p>
            <p>Dehradun</p>
            <p>Delhi NCR</p>
            <p>Guwahati</p>
            <p>Haidarabad</p>
            <p>Jamshedpur</p>
            <p>Kakinada</p>
            <p>Kochi</p>
            <p>Kolkata</p>
            <p>Kota</p>
            <p>Lucknow</p>
            <p>Madurai</p>
            <p>Meerut</p>
            <p>Mumbai</p>
            <p>Nagpur</p>
            <p>Nashik</p>
            <p>Panipat</p>
            <p>Patna</p>
            <p>Prayagraj</p>
            <p>Pune</p>
            <p>Ranchi</p>
            <p>Surat</p>
            <p>Thirivananthpuram</p>
            <p>Udaipur</p>
            <p>Vadodara</p>
            <p>Varanasi</p>
            <p>Vijaywada</p>
            <p>Visakhapatnam</p>
          </div>
          <div className={styles.cnty}>UAE</div>
          <div>
            <p>Abu Dhabi</p>
            <p>Dubai</p>
            <p>Sarjah</p>
          </div>
          <div className={styles.cnty}>AUS</div>
          <div>
            <p>Melbourne</p>
            <p>Sydney</p>
          </div>
          <div className={styles.cnty}>SGP</div>
          <div>
            <p>Singapore</p>
          </div>
          <div className={styles.cnty}>KSA</div>
          <div>
            <p>Jeddah</p>
            <p>Riyadh</p>
          </div>
        </div>
        <hr style={{ margin: "20px auto" }} />
        <div className={styles.social}>
          <div>
            <img
              style={{ width: "70px", cursor: "pointer" }}
              src="https://user-images.githubusercontent.com/105915325/201094672-f7cd637a-98b8-4f0e-b0f4-78b4890e4976.png"
              alt="site Logo"
            />
          </div>
          <div>
            <p>@2014-22 UrbanClap Technologies India Pvt.Ltd.</p>
          </div>
          <div style={{ fontSize: "20px", cursor: "pointer" }}>
            <FaTwitterSquare />
            <AiFillFacebook />
            <SlSocialInstagram />
            <IoLogoYoutube />
            {/* <TfiLinkedin/> */}
            <BsPinterest />
          </div>
          <div>
            <img
              style={{ width: "170px", height: "60px", cursor: "pointer" }}
              src="https://camo.githubusercontent.com/403ae25ba180c2f8af00f39d9c6699f3d4a5fe7edd735e838e2584691449d681/68747470733a2f2f696d616765732e757262616e636c61702e636f6d2f696d6167652f75706c6f61642f63617465676f726965732f63617465676f72795f76322f63617465676f72795f37663930376562302e706e67"
              alt="google Logo"
            />
          </div>
          <div>
            <img
              style={{ width: "170px", height: "60px", cursor: "pointer" }}
              src="https://camo.githubusercontent.com/53975be01f891f87111e50f4ff0d3aefecdd9484b9996357a4cf589627f1cdb3/68747470733a2f2f696d616765732e757262616e636c61702e636f6d2f696d6167652f75706c6f61642f63617465676f726965732f63617465676f72795f76322f63617465676f72795f37663734316431302e706e67"
              alt="Apple Logo"
            />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
