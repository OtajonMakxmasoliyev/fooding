import Card from "./components/card";
import Logo from "./images/logo.svg"
import "./style.css"
import Logistics from "./images/Logistics.svg"
import Haulage from "./images/Haulage.svg"
import Consultation from "./images/Consultation.svg"
import Meet from "./images/meet.png"
import Korxona from "./images/korxona.png"

function App() {
  const info = [
    {
      title: "Logistics",
      img: Logistics,
      info: "We are known for our ability to handle every last detail of our customers’ supply chain needs. Dawndeal takes care of all your logistics",
    }, {
      title: "Haulage",
      img: Haulage,
      info: `We offer direct full-load or part-load haulage to any location and from any location in Nigeria`
    }, {
      title: "Consultation",
      img: Consultation,
      info: "We build resourceful partnerships agile enough to move with you, whether you’re an international corporation or a small startup"
    }

  ]

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="navLink">

            <ul>
              <li><a href="#">home</a></li>
              <li><a href="#">about</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Product</a></li>
            </ul>
            <button>Contact us</button>
          </div>
        </nav>
        <div className="service">
          <h1>Our <span>Service</span></h1>

        </div>
      </header>
      <main>

        <div className="cards">
          {
            info.map((data, index) => (

              <Card image={data.img} title={data.title} info={data.info} />
            ))
          }

          <Card imageMain={Meet} />
        </div>
        <div className="cardDeliver card">
          <div className="icon">
            <img src={require("./images/deliver.svg").default} className />
          </div>
          <p className="title">Exportation</p>
          <p className="info">Our Strategy is offering best-fit- sourcing and export solution by closely working with the market we serve.</p>
          <p className="info">Our Strategy is offering best-fit- sourcing and export solution by closely working with the market we serve. Although we’re based in the Nigeria, We export to Africans in the United Kingdom and in America, Europe and Asia. Our specific overseas market, or would like to discuss our packaging</p>
        </div>
        <div className="search">
          <div className="card top">
            <div className="icon">
              <img src={require("./images/lupa.svg").default} alt="" />
            </div>
            <p className="title">
              Product Sourcing
            </p>
            <p className="info">
              We help in sourcing for products and also help you with deliver to anywhere in the world with the help of our effective and efficient logictic and cross-country export means.
            </p>
          </div>
          <img src={Korxona} alt="" className="korxona" />
          <div className="cardBig card">
            <div className="icon">
              <img src={require("./images/mol.svg").default} alt="" />
            </div>
            <p className="title">
              Cattle Rearing
            </p>
            <p className="info">
              High quality beef meat production has being our mission at Fooding Trading Limited since inception. We are able to select local beef breeds with high breeding potential, inseminated with exotic bull sperm to produce high quality progenies.


            </p>
            <p className="info">
              Our aim and objective is to improve the cattle production of our local cattle breeds through enhanced reproduction performance and breeding practices with increased production capacity.
            </p>
          </div>
        </div>
        <div className="Manufacturing card">
          <div className="icon">
            <img src={require("./images/manufacture.svg").default} alt="" />
          </div>
          <p className="title">Manufacturing</p>
          <p className="info">High quality beef meat production has being our mission at Fooding Trading Limited since inception. We are able to select local beef breeds with high breeding potential, inseminated with exotic bull sperm to produce high quality progenies.
          </p>
          <p className="info">Our aim and objective is to improve the cattle production of our local cattle breeds through enhanced reproduction performance and breeding practices with increased production capacityHigh quality beef meat production has being our mission at Fooding Trading Limited since inception.</p>

          <p className="info"> We are able to select local beef breeds with high breeding potential, inseminated with exotic bull sperm to produce high quality progenies.Our aim and objective is to improve the cattle production of our local cattle breeds through enhanced reproduction performance and breeding practices with increased production capacity</p>
        </div>
        <div className="freeImages">
          <img src={require("./images/beach.png")} alt="" />
          <img src={require("./images/quti.png")} alt="" />
        </div>
        <div className="Packaging card">
          <div className="icon">
            <img src={require("./images/sen.svg").default} alt="" />
          </div>
          <p className="title">
            Packaging
          </p>
          <p className="info">
            Packaging: We not only do the services mentioned, we offer an exceptional range of packaging too. Like Bag in Box, Pouch, Pot, Sachet, Printed & Customized Bag — all of which ensure your products arrive in conserved and preserved, good condition.We can provide tried-and tested off-the-peg packaging, or work with you to develop made-to-measure solutions for specific markets and products.
          </p>
        </div>
      </main>
      <footer>
        <div className="Footerlogo">
          <img src={require("./images/logo.svg").default} alt="" />

          <span>&copy;2022foodingtradingltd</span>
        </div>
        <address>
          <span>1, Awoniyi Elemo Street, Ajao Estate,
            off Murtala Muhammed Int. Airport,
            Lagos State.</span>
          <span>09156218239, 08035024464</span>
        </address>
        <div className="links">
          <a href="mailto:info@foodingtrading.com">info@foodingtrading.com</a>
          <div className="linkSocial">
            <div className="icons">
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
          <span>officialfoodingtrading</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
