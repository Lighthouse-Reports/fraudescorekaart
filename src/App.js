import { Link, NavLink, Outlet } from "react-router-dom";
import { Button } from "./Form";
import "./App.css";
import logo from "./logo-brand.svg";

export const App = () => {
  return (
    <div className='App'>
      <div className='navbar'>
        <nav>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Home
          </NavLink>
          <NavLink
            to='/scorekaart'
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Scorekaart
          </NavLink>
          {/* <NavLink
            to='/about'
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            About
          </NavLink> */}
        </nav>
        {/* <Link to='#'>NL</Link> */}
      </div>
      <Outlet />
      <div className='footer'>
        <img src={logo} href="https://lighthousereports.nl" alt='Lighthouse Reports logo' />
        <div>
          <p>
            Een project van{" "}
            <a
              href='https://lighthousereports.nl'
              target='_blank'
              rel='noreferrer'
            >
              Lighthouse Reports
            </a>
            ,{" "}
            <a href='https://www.vpro.nl/argos/media/luister/argos-radio/onderwerpen/2022/bijstandsbingo.html#' target='_blank' rel='noreferrer'>
              Argos
            </a>{" "}
            en{" "}
            <a href='https://www.nrc.nl/nieuws/2022/06/24/ondanks-waarschuwing-gingen-gemeenten-door-met-omstreden-fraudedetectiemethode-a4134635' target='_blank' rel='noreferrer'>
              NRC
            </a>
            .
          </p>
          <p>© Lighthouse Reports 2022</p>
        </div>
      </div>
    </div>
  );
};

export const Home = () => {
  return (
    <div className='Home'>
      <div className='hero'>
        <h1>
          Hoe Nederlandse gemeenten frauderisicoscores berekenden van mensen met
          een bijstandsuitkering – en sommige gemeenten dit nog steeds doen
        </h1>
        <div className='hero-caption'>
          <p>
            Lighthouse Reports heeft inzage gekregen in de fraudescorekaart; een
            spreadsheet en simpel algoritme gebruikt om mensen met een
            bijstandsuitkering te profileren op frauderisico.
          </p>
          <p>
            Om te laten zien hoe deze kaart werkt hebben we deze interactieve
            reconstructie ontwikkeld.
          </p>
        </div>
      </div>
      <div className='cta-buttons'>
        <Link to='/scorekaart'>
          <Button>Bereken je score</Button>
        </Link>
        <a href='https://www.vpro.nl/argos.html' target='_blank' rel='noreferrer'>
          <Button secondary>Lees meer bij VPRO Argos</Button>
        </a>
        <a href='https://nrc.nl' target='_blank' rel='noreferrer'>
          <Button secondary>Lees meer bij NRC</Button>
        </a>
      </div>
    </div>
  );
};

export const About = () => {
  return <div></div>;
};

export default App;
