import styles from "./SerchBar.module.css";
import { DrawerExample, DrawerExample1 } from "../Small/loginSignDrawer";
import SearchLoc from "../Small/SearchBox";
import { FaTwitterSquare } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import { SlLocationPin, SlSocialInstagram } from "react-icons/sl";
import { IoLogoYoutube } from "react-icons/io";
// import { TfiLinkedin } from "react-icons/tf";
import { BsPinterest, BsSearch } from "react-icons/bs";
import { SliderImages, SliderImages1 } from "../Small/slider1";
import { Outlet, Link } from "react-router-dom";
import { Box, Button, Flex,Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import Slider1 from "./Slider1";
import Slider2 from "./Slider2";
import { getLocalData } from "../Utils/LocalStorage";
import Footer from "./Footer";

const HomePage = () => {

  return (
    <>
      <div className={styles.main}>
        <div className={styles.topLogoSection}>
          <img
            style={{ marginTop: "-10px", cursor: "pointer" }}
            src="https://user-images.githubusercontent.com/105915325/201094672-f7cd637a-98b8-4f0e-b0f4-78b4890e4976.png"
            alt="Web-Site Logo"
          />
          <div className={styles.register}>
            <div>Blog</div>
            <Link to={"/adminpage"}><Button  colorScheme="trasparent"  mt="-8px">{getLocalData("email") ? "Admin panel" : null}</Button></Link>
            {/* <DrawerExample /> */}
            <DrawerExample1 />
          </div>
        </div>
        <div className={styles.searchBox}>
          <p style={{ fontSize: "14px" }}>Home / India</p>
          <b className={styles.bigText}>
            Home services, on demand.
          </b>
          <div style={{ marginTop: "20px" }}>
            <SearchLoc />
            {/* <Flex justifyContent={"center"} gap={"10px"}>
              <InputGroup w={"15%"}>
                <InputLeftAddon children={<SlLocationPin color="black"/>} />
                <Input  bg={"white"} type='tel' placeholder='Current location' />
              </InputGroup>
              <InputGroup w={"30%"}>
                <InputLeftAddon children={<Box><BsSearch color="black"/></Box>} />
                <Input bg={"white"} type='tel' placeholder='Search for Society/Apartment' />
              </InputGroup>
            </Flex> */}
          </div>
          <p
            style={{
              margin: "7px 0px 0px 10px",
              textDecorationLine: "underline",
            }}
          >
            Women's Therapies, Salon for Men, Men's Therapies etc.
          </p>
        </div>
      </div>

      {/* Personal services options */}
      <div className={styles.personalServ}>
        <Link to={"/womensalon"}>
          <div>
            <img
              src="https://camo.githubusercontent.com/8d2f9c9a0894bd019a356f7c435f25c7d52e6f9eb4e79bfa3450fda1126e1e8b/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f757262616e636c61702f696d6167652f75706c6f61642f715f6175746f2c665f6175746f2c666c5f70726f67726573736976653a73746565702c775f36342f745f686967685f7265735f74656d706c6174652f696d616765732f67726f7774682f686f6d652d73637265656e2f313630393735373633353233352d3161313339652e706e67"
              alt="salon for women"
            />
            <p>Salon For Women</p>
          </div>
        </Link>
        <Link to={"/mensalon"}>
          <div>
            <img
              src="https://camo.githubusercontent.com/a8054387e7be3144c087c950da5edf5fa4bdd470333de19e25824cf1b08017af/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f757262616e636c61702f696d6167652f75706c6f61642f715f6175746f2c665f6175746f2c666c5f70726f67726573736976653a73746565702c775f36342f745f686967685f7265735f74656d706c6174652f696d616765732f67726f7774682f686f6d652d73637265656e2f313630393735373632393738302d3262323138372e706e67"
              alt="Salon for men"
            />
            <p>Salon For Men</p>
          </div>
        </Link>
        <Link>
          <div>
            <img
              src="https://camo.githubusercontent.com/1261860be55d1e98a7bf09fc76469bbd97fd8f1fb9c8f2a2d14971d9262beef0/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f757262616e636c61702f696d6167652f75706c6f61642f715f6175746f2c665f6175746f2c666c5f70726f67726573736976653a73746565702c775f36342f745f686967685f7265735f74656d706c6174652f63617465676f726965732f63617465676f72795f76322f63617465676f72795f31333132666236302e706e67"
              alt="women's therapies"
            />
            <p>Women's Therapies</p>
          </div>
        </Link>
        <Link>
          <div>
            <img
              src="https://camo.githubusercontent.com/bf4dae6391c1bfa7d0889a40d6e9186fcccb4cfdf391c9f319435eb4b9169465/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f757262616e636c61702f696d6167652f75706c6f61642f715f6175746f2c665f6175746f2c666c5f70726f67726573736976653a73746565702c775f36342f745f686967685f7265735f74656d706c6174652f696d616765732f737570706c792f637573746f6d65722d6170702d737570706c792f313633353333313630363839342d3762363333662e706e67"
              alt="Hair,skin,nails"
            />
            <p>Hair, Skin & Nails</p>
          </div>
        </Link>
        <Link>
          <div>
            <img
              src="https://camo.githubusercontent.com/4c053c986d6ccc860c942e875c2be9ff8f3ffd91ec67b2805db572ecf2662868/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f757262616e636c61702f696d6167652f75706c6f61642f715f6175746f2c665f6175746f2c666c5f70726f67726573736976653a73746565702c775f36342f745f686967685f7265735f74656d706c6174652f696d616765732f67726f7774682f686f6d652d73637265656e2f313630393735373733313235302d6261333330382e706e67"
              alt="men's therapies"
            />
            <p>Men's Therapies</p>
          </div>
        </Link>
      </div>

      {/* Home sevrvices options */}
      <b className={styles.betHomePre}>
        Home Services
      </b>
      <div className={styles.homeServ}>
        <Link to={"/electrician"}>
          <div>
            <img
              src="https://camo.githubusercontent.com/e6869b7c0a59a2fb769daeaea048a49efe14aaa15334d61c8f54ef235254eeed/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f757262616e636c61702f696d6167652f75706c6f61642f715f6175746f2c665f6175746f2c666c5f70726f67726573736976653a73746565702c775f36342f745f686967685f7265735f74656d706c6174652f63617465676f726965732f63617465676f72795f76322f63617465676f72795f37326431383935302e706e67"
              alt="electrician"
            />
            <p>Electrician</p>
          </div>
        </Link>
        <Link to={"/plumber"}>
          <div>
            <img
              src="https://camo.githubusercontent.com/f0355b9be6dac41299e44ca258aaa471b1de075ddc82d83773c8fcbfc861d5e6/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f757262616e636c61702f696d6167652f75706c6f61642f715f6175746f2c665f6175746f2c666c5f70726f67726573736976653a73746565702c775f36342f745f686967685f7265735f74656d706c6174652f63617465676f726965732f63617465676f72795f76322f63617465676f72795f36666261643337302e706e67"
              alt="Plumber"
            />
            <p>Plumber</p>
          </div>
        </Link>
        <Link>
          <div>
            <img
              src="https://camo.githubusercontent.com/7a834d6d15a1d60da95e83574bee417d519118cd86b076afc32c3dc64e90e17a/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f757262616e636c61702f696d6167652f75706c6f61642f715f6175746f2c665f6175746f2c666c5f70726f67726573736976653a73746565702c775f36342f745f686967685f7265735f74656d706c6174652f696d616765732f67726f7774682f686f6d652d73637265656e2f313633313637393531353230362d6136393338392e706e67"
              alt="Home paint"
            />
            <p>Home Painting</p>
          </div>
        </Link>
        <Link>
          <div>
            <img
              src="https://camo.githubusercontent.com/df116cda9e7f290dda56e57f2d2e9238fcf7162b4331582c39574570a74b1f58/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f757262616e636c61702f696d6167652f75706c6f61642f715f6175746f2c665f6175746f2c666c5f70726f67726573736976653a73746565702c775f36342f745f686967685f7265735f74656d706c6174652f63617465676f726965732f63617465676f72795f76322f63617465676f72795f36623166353235302e706e67"
              alt="clean & pest"
            />
            <p>Cleaning & Pest</p>
          </div>
        </Link>
        <Link>
          <div>
            <img
              src="https://camo.githubusercontent.com/1270641dc31d58150f341f5e8880e99d86fb82919ea028c7d3325359d2629f4a/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f757262616e636c61702f696d6167652f75706c6f61642f715f6175746f2c665f6175746f2c666c5f70726f67726573736976653a73746565702c775f36342f745f686967685f7265735f74656d706c6174652f696d616765732f67726f7774682f686f6d652d73637265656e2f313634313231333838363538382d3930613930332e706e67"
              alt="disinfection"
            />
            <p>Disinfection</p>
          </div>
        </Link>
      </div>
      <div style={{ height: "17px", backgroundColor: "#f2f4f6" }}></div>
      {/* Book now */}
      {/* slider-1 */}
      <div
        style={{ margin:"20px",marginBottom: "60px"}}
      >
        <Slider1/>
      </div>
      <div style={{ height: "17px", backgroundColor: "#f2f4f6" }}></div>
      {/* new category lauches */}
      <p
         className={styles.betHomePre}
      >
        New Category launches
      </p>
      <div className={styles.NewCatLaunch}>
        <div>
          <img
            src="https://camo.githubusercontent.com/3cc61b6e0709859bc525125d5c6b528970f5218a7805e3cf31e2fbcd0df8175f/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f757262616e636c61702f696d6167652f75706c6f61642f715f6175746f2c665f6175746f2c666c5f70726f67726573736976653a73746565702c775f3533322f745f686967685f7265735f63617465676f72792f696d616765732f67726f7774682f6c756d696e6f736974792f313634363134303537363836352d3032616261312e6a706567"
            alt="expert counc"
          />
          <p>Expert Councelling</p>
          <p>Advance Skin Treatment</p>
        </div>
        <div>
          <img
            src="https://camo.githubusercontent.com/b4c2e3987ace8cbe1c154a8b390915469b22770e0ca63bd992f14160828bbe31/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f757262616e636c61702f696d6167652f75706c6f61642f715f6175746f2c665f6175746f2c666c5f70726f67726573736976653a73746565702c775f3533322f745f686967685f7265735f63617465676f72792f63617465676f726965732f62696770696374757265732f63617270656e7465722e6a7067"
            alt=""
          />
          <p>Furniture Making, Upholstery, Polish</p>
          <p></p>
        </div>
        <div>
          <img
            src="https://camo.githubusercontent.com/35abc4bfb9a440123a154b835f4cec0352151c0054b2814d1b06b4f62185a5cf/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f757262616e636c61702f696d6167652f75706c6f61642f715f6175746f2c665f6175746f2c666c5f70726f67726573736976653a73746565702c775f3533322f745f686967685f7265735f63617465676f72792f696d616765732f67726f7774682f686f6d652d73637265656e2f313633353832393935343337332d6430353539302e6a706567"
            alt=""
          />
          <p>Air Purifier</p>
          <p>Flat Rs.100 off</p>
        </div>
        <div>
          <img
            src="https://camo.githubusercontent.com/56c6fd4f625e1b665188c410e810e5b669fef644353bc9ef505feb05df80854e/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f757262616e636c61702f696d6167652f75706c6f61642f715f6175746f2c665f6175746f2c666c5f70726f67726573736976653a73746565702c775f3533322f745f686967685f7265735f63617465676f72792f696d616765732f737570706c792f637573746f6d65722d6170702d737570706c792f313634333132303133363339352d3830353233652e6a706567"
            alt=""
          />
          <p>RO Water Purifier</p>
          <p></p>
        </div>
      </div>
      <div style={{ height: "17px", backgroundColor: "#f2f4f6" }} ></div>
      {/* Appliances */}
      <p
       className={styles.betHomePre}
      >
        Appliances
      </p>
      <p
        style={{
          fontSize: "16px",
          fontFamily: "sans-serif",
          marginTop: "10px",
          color: "#757575",
        }}
      >
        Service, Repair, Installation & Uninstallation
      </p>
      <div className={styles.appliances}>
        <div>
          <img
            src="https://camo.githubusercontent.com/1f996b9c007a21bcd5fc3659f31f3392bf9be61c1ce7be62f34e8234c871e868/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f757262616e636c61702f696d6167652f75706c6f61642f715f6175746f2c665f6175746f2c666c5f70726f67726573736976653a73746565702c775f3533322f745f686967685f7265735f63617465676f72792f63617465676f726965732f63617465676f72795f76322f63617465676f72795f63303636373032302e706e67"
            alt="Geyser"
          />
          <p>Geyser</p>
          <p>Starts at Rs.249</p>
        </div>
        <div>
          <img
            src="https://camo.githubusercontent.com/28eea2a6f482e15393c4f22d14ca02b8858a0acb40c1b0f6fe948ec4ed6df2d9/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f757262616e636c61702f696d6167652f75706c6f61642f715f6175746f2c665f6175746f2c666c5f70726f67726573736976653a73746565702c775f3533322f745f686967685f7265735f63617465676f72792f63617465676f726965732f63617465676f72795f76322f63617465676f72795f62626238633639302e706e67"
            alt="Water purifier service"
          />
          <p>Water Purifier Service</p>
          <p>Up to 45% off</p>
        </div>
        <div>
          <img
            src="https://camo.githubusercontent.com/35abc4bfb9a440123a154b835f4cec0352151c0054b2814d1b06b4f62185a5cf/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f757262616e636c61702f696d6167652f75706c6f61642f715f6175746f2c665f6175746f2c666c5f70726f67726573736976653a73746565702c775f3533322f745f686967685f7265735f63617465676f72792f696d616765732f67726f7774682f686f6d652d73637265656e2f313633353832393935343337332d6430353539302e6a706567"
            alt="Air purifier"
          />
          <p>Air Purifier</p>
          <p>Flat Rs.100 off</p>
        </div>
      </div>
      <div style={{ height: "17px", backgroundColor: "#f2f4f6" }}></div>
      {/* Cleaning and pest control */}
      {/* slider-2 */}
      <p
        className={styles.betHomePre}
      >
        Cleaning & Pest Control
      </p>
      <div
        style={{margin:"20px",marginBottom: "60px" }}
      >
        <Slider2/>
      </div>
      <div style={{ height: "17px", backgroundColor: "#f2f4f6" }}></div>
      {/* Home Repairs */}
      <p
   className={styles.betHomePre}
      >
        Home Repairs
      </p>
      <div className={styles.NewCatLaunch}>
        <div>
          <img
            src="https://camo.githubusercontent.com/b4c2e3987ace8cbe1c154a8b390915469b22770e0ca63bd992f14160828bbe31/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f757262616e636c61702f696d6167652f75706c6f61642f715f6175746f2c665f6175746f2c666c5f70726f67726573736976653a73746565702c775f3533322f745f686967685f7265735f63617465676f72792f63617465676f726965732f62696770696374757265732f63617270656e7465722e6a7067"
            alt=""
          />
          <p>Furniture Making, Upholstery, Polish</p>
        </div>
        <div>
          <img
            src="https://camo.githubusercontent.com/cd3794e8cb7c7e5a99350d20ecdee6ac1ad6d69480ec97c53d41cd63e6ea68f2/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f757262616e636c61702f696d6167652f75706c6f61642f715f6175746f2c665f6175746f2c666c5f70726f67726573736976653a73746565702c775f3533322f745f686967685f7265735f63617465676f72792f63617465676f726965732f686f6d655f73637265656e2f63617270656e7465722e6a7067"
            alt=""
          />
          <p>Carpenters</p>
        </div>
        <div>
          <img
            src="https://camo.githubusercontent.com/1b7b2c022f74761fcc89862f65885dd52558e978c0d353c47887642707758040/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f757262616e636c61702f696d6167652f75706c6f61642f715f6175746f2c665f6175746f2c666c5f70726f67726573736976653a73746565702c775f3533322f745f686967685f7265735f63617465676f72792f63617465676f726965732f63617465676f72795f76322f63617465676f72795f61393162373364302e6a706567"
            alt=""
          />
          <p>Electricians</p>
        </div>
        <div>
          <img
            src="https://camo.githubusercontent.com/19f9cb5de436b9600039ab5e444c88e369bf2fb38e5e90b0d9bbfb874ec3ed6d/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f757262616e636c61702f696d6167652f75706c6f61642f715f6175746f2c665f6175746f2c666c5f70726f67726573736976653a73746565702c775f3533322f745f686967685f7265735f63617465676f72792f63617465676f726965732f686f6d655f73637265656e2f706c756d6265722e6a7067"
            alt=""
          />
          <p>Plumbers</p>
        </div>
      </div>
      <div style={{ height: "17px", backgroundColor: "#f2f4f6" }}></div>
      {/* policy screenshot */}
      <div style={{ width: "100%", cursor: "pointer" }}>
        <img
          style={{ width: "!00%" }}
          src="https://user-images.githubusercontent.com/105915325/201074558-65131c4e-0e61-4b89-a0e8-8d55bcf36842.png"
          alt="Policy box"
        />
      </div>
        <Footer/>
    </>
  );
};

export default HomePage;