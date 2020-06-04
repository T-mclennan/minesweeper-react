import React from 'react';
// import Button from '@material-ui/core/Button';
import { Button } from 'reactstrap';
import VirusLogo from '../assets/icons/viruses-solid.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithubAlt,
  faGithubSquare,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
// import {} from '@fortawesome/free-solid-svg-icons';
import { faListAlt } from '@fortawesome/free-regular-svg-icons';
import '../stylesheets/Landing.css';

const Landing = () => {
  return (
    <div className='mainContainer' style={Styling}>
      <div style={TitleContainer}>
        <img
          src={VirusLogo}
          className='icon'
          style={{ width: '3rem', margin: '1rem' }}
          alt='Virus Logo'
        />
        {/* <h2 style={Title}>Corona Sweeper</h2> */}
        {/* <h1>CoronaSweeper</h1> */}
        <h2>Covid Sweeper</h2>
        {/* <h3 data-text='Character'>Covid Sweeper</h3> */}
      </div>
      <div style={FormContainer}>
        <div style={Form}>
          <Button style={ButtonStyle}>
            <h4>Score Board</h4>
          </Button>
          <Button style={ButtonStyle}>
            <h4>Play Now!</h4>
          </Button>
          <Button style={ButtonStyle}>
            <h4>Play Now!</h4>
          </Button>
        </div>
      </div>
      <div style={FooterContainer} className='footer'>
        <div style={Footer} className='content'>
          <a href={'https://www.github.com/T-mclennan'}>
            <FontAwesomeIcon
              icon={faListAlt}
              style={Icon}
              className='icon far fa-2x fa-in'
            />
          </a>
          <a href={'https://www.github.com/T-mclennan'}>
            <FontAwesomeIcon
              icon={faGithubAlt}
              style={Icon}
              className='icon far fa-2x fa-in'
            />
          </a>
          <a href={'https://www.github.com/T-mclennan'}>
            <FontAwesomeIcon
              icon={faGithubSquare}
              style={Icon}
              className='icon far fa-2x fa-in'
            />
          </a>
        </div>
      </div>
    </div>
  );
};

const Styling = {
  backgroundImage:
    'linear-gradient(to bottom, #0e1a49 0%, #red 30%,#002fa7 100%)',
  // backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignContent: 'center',
  height: '100%',
};

const TitleContainer = {
  // flex: 1,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  paddingRight: '3rem',
};

const Title = {
  // color: 'white',
  // fontSize: '3rem',
};

const FormContainer = {
  // flex: 3,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'center',
};

const Form = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'center',
  width: '30rem',
  height: '20rem',
  backgroundColor: 'hsl(204, 100%, 60%) 53%',
  border: '1px double #ffd79c',
  borderRadius: '1rem',
  padding: '2rem',
  margin: 'auto',
};

const ButtonStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#ffd79c',
  fontSize: '1rem',
  height: '3.2rem',
  width: '15rem',
  fontWeight: 'bold',
  backgroundColor: '#0e1a49',
  border: '1px solid #ffd79c',
  borderRadius: '1rem',
  margin: 'auto',
  // '&:hover': {
  //   backgroundColor: 'white !important',
  // },
};

const FooterContainer = {
  // flex: 1,
  display: 'flex',
  justifyContent: 'center',
  height: '5rem',
  width: '100%',
};

const Footer = {
  display: 'flex',
  width: '24rem',
  justifyContent: 'center',
  color: '#0e1a49',
};

const Icon = {
  margin: '0 2rem',
  // color: '#0e1a49',
};

// font awesome assets:

{
  /* <i class="fas fa-viruses"></i> */
}
{
  /* <i class="fas fa-virus-slash"></i> */
}

export default Landing;
