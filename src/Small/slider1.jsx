import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Slider1.css";

const SliderImages=()=>{
    const settings = {
        dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
      };

    return(
        <>
        {/* <div className="main1"> */}
        <Slider className="slider" {...settings}>
        <div>
          <img
            style={{marginRight:"50px"}}
            src="https://camo.githubusercontent.com/ac224328e1ccbb27fa008cb9f6917e4fa40b6a448d8093c4174405f5b2d953f8/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f757262616e636c61702f696d6167652f75706c6f61642f715f6175746f2c665f6175746f2c666c5f70726f67726573736976653a73746565702c775f3536382f745f686967685f7265735f74656d706c6174652f696d616765732f67726f7774682f686f6d652d73637265656e2f313636373338363439333930302d3164356530392e6a706567"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://camo.githubusercontent.com/fe1f1263caaf91974c625063de9112e3be0d5de18b0f77c7796c5b91c7f91876/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f757262616e636c61702f696d6167652f75706c6f61642f715f6175746f2c665f6175746f2c666c5f70726f67726573736976653a73746565702c775f3536382f745f686967685f7265735f74656d706c6174652f696d616765732f737570706c792f706172746e65722d6170702d737570706c792f313636373437323936343137372d3831323836372e6a706567"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://camo.githubusercontent.com/510d711ce43b03ed592c7a83b2a5d7f977dae373943f2ed8ae41122ff0b24cc3/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f757262616e636c61702f696d6167652f75706c6f61642f715f6175746f2c665f6175746f2c666c5f70726f67726573736976653a73746565702c775f3536382f745f686967685f7265735f74656d706c6174652f696d616765732f67726f7774682f686f6d652d73637265656e2f313636373233333635313037362d6332313066382e6a706567"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://camo.githubusercontent.com/7b792b8ea6b463312d32d7b3607eb3b5f2bc7c6b39ff4e8961637d37ae1a5232/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f757262616e636c61702f696d6167652f75706c6f61642f715f6175746f2c665f6175746f2c666c5f70726f67726573736976653a73746565702c775f3536382f745f686967685f7265735f74656d706c6174652f696d616765732f67726f7774682f6c756d696e6f736974792f313636373539343636343038392d3162323735642e6a706567"
            alt=""
          />
        </div>
        <div>
          <img src="https://camo.githubusercontent.com/d67fa91d116e13fcc6194083a164e13942e4518240b751e48d88e21f3a25048c/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f757262616e636c61702f696d6167652f75706c6f61642f715f6175746f2c665f6175746f2c666c5f70726f67726573736976653a73746565702c775f3536382f745f686967685f7265735f74656d706c6174652f696d616765732f67726f7774682f686f6d652d73637265656e2f313636373233333635303635312d3831386466352e6a706567" alt="" />
        </div>      
        <div>
          <img src="https://camo.githubusercontent.com/175ef214e5ddb32062d42e5fbfbf3a4e114b3c48ff82d3f7b36f3a4eb47d2d10/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f757262616e636c61702f696d6167652f75706c6f61642f715f6175746f2c665f6175746f2c666c5f70726f67726573736976653a73746565702c775f3536382f745f686967685f7265735f74656d706c6174652f696d616765732f67726f7774682f6c756d696e6f736974792f313636373534343830363433302d3230666462622e6a706567" alt="" />
        </div>      
        </Slider>
      {/* </div> */}
        </>
    )
}

const SliderImages1=()=>{
  const settings = {
      dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
    };

  return(
      <>
      {/* <div className="main1"> */}
      <Slider className="slider" {...settings}>
      <div>
          <img
            src="https://camo.githubusercontent.com/b25e1d23c08a8b168636f265af3e7fe9560213ee7590fc118811fc4e8b7e4cac/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f757262616e636c61702f696d6167652f75706c6f61642f715f6175746f2c665f6175746f2c666c5f70726f67726573736976653a73746565702c775f3533322f745f686967685f7265735f63617465676f72792f696d616765732f67726f7774682f686f6d652d73637265656e2f313632353135393838323338372d3935383563372e6a706567"
            alt="expert counc"
          />
          <p>Bathroom & Kitchen Cleaning</p>
        </div>
        <div>
          <img
            src="https://camo.githubusercontent.com/e4afe911514a3c4c128bb586a7b202a413828a35befa98471024e95dee8c49ef/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f757262616e636c61702f696d6167652f75706c6f61642f715f6175746f2c665f6175746f2c666c5f70726f67726573736976653a73746565702c775f3533322f745f686967685f7265735f63617465676f72792f696d616765732f67726f7774682f6c756d696e6f736974792f313633323339363739333432352d3161353431382e6a706567"
            alt=""
          />
          <p>Full Home Cleaning</p>
        </div>
        <div>
          <img
            src="https://camo.githubusercontent.com/1fad6f379a98043ff2737c08f8256386f58c07c724d1be237998c36b66c4e798/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f757262616e636c61702f696d6167652f75706c6f61642f715f6175746f2c665f6175746f2c666c5f70726f67726573736976653a73746565702c775f3533322f745f686967685f7265735f63617465676f72792f696d616765732f67726f7774682f686f6d652d73637265656e2f313633303432303931323630362d3266666661362e6a706567"
            alt=""
          />
          <p>Sofa & Carpet Cleaning</p>
        </div>
        <div>
          <img
            src="https://camo.githubusercontent.com/5769bd86becfd92c3d468bcaf02ea8480a976034792ba32a6503d37055f9aff1/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f757262616e636c61702f696d6167652f75706c6f61642f715f6175746f2c665f6175746f2c666c5f70726f67726573736976653a73746565702c775f3533322f745f686967685f7265735f63617465676f72792f696d616765732f67726f7774682f6c756d696e6f736974792f313633313135393631323036362d3533623231302e6a706567"
            alt=""
          />
          <p>Cockroach, Ant & General Pest Control</p>
        </div>
        <div>
          <img src="https://camo.githubusercontent.com/86bb94498c331433bbf568edc0fdc7762d9ec7b56c317c887b05a3e3101f5937/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f757262616e636c61702f696d6167652f75706c6f61642f715f6175746f2c665f6175746f2c666c5f70726f67726573736976653a73746565702c775f3533322f745f686967685f7265735f63617465676f72792f696d616765732f67726f7774682f6c756d696e6f736974792f313633323439303235373433392d6566323864322e6a706567" alt="" />
          <p>Bed Bugs Control</p>
        </div>      
        <div>
          <img src="https://camo.githubusercontent.com/d59f24249197c810a6127b225d46ff6f61b627da4baa1ed190ed13b4d9600fd0/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f757262616e636c61702f696d6167652f75706c6f61642f715f6175746f2c665f6175746f2c666c5f70726f67726573736976653a73746565702c775f3533322f745f686967685f7265735f63617465676f72792f696d616765732f67726f7774682f6c756d696e6f736974792f313633323437343332363430372d3061616532312e6a706567" alt="" />
          <p>Termite Control</p>
        </div>  
      </Slider>
    {/* </div> */}
      </>
  )
}


export  {SliderImages,SliderImages1};