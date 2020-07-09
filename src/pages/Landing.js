import React, { useState, useContext } from 'react';
import {
  Button,
  Input,
  Label,
  FormGroup,
  UncontrolledTooltip,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithubAlt,
  faGithubSquare,
} from '@fortawesome/free-brands-svg-icons';
import {
  faViruses,
  faCog,
  faUserCog,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';
import {
  faListAlt,
  // faQuestionCircle,
} from '@fortawesome/free-regular-svg-icons';
import history from '../history';
import { GlobalContext } from '../context/GlobalState';
import '../stylesheets/Landing.css';

const Landing = () => {
  const [difficulty, setDifficulty] = useState('Beginner');
  const [mines, setMines] = useState(10);
  const [width, setWidth] = useState(10);
  const [height, setHeight] = useState(10);
  const { setGameParams } = useContext(GlobalContext);

  const createSelectItems = (min, max) => {
    let items = [];
    for (let i = min; i <= max; i++) {
      items.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return items;
  };

  const changeDifficulty = (e) => {
    setDifficulty(e.target.value);

    switch (e.target.value) {
      case 'Beginner':
        setHeight(10);
        setWidth(10);
        setMines(10);
        break;

      case 'Novice':
        setHeight(12);
        setWidth(12);
        setMines(22);
        break;

      case 'Intermediate':
        setHeight(12);
        setWidth(18);
        setMines(44);
        break;

      case 'Advanced':
        setHeight(15);
        setWidth(18);
        setMines(70);
        break;

      case 'Expert':
        setHeight(17);
        setWidth(30);
        setMines(155);
        break;

      case 'Master':
        setHeight(17);
        setWidth(40);
        setMines(275);
        break;
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setGameParams({ height, width, mines });
    history.push(`/play`);
  };

  return (
    <div className='mainContainer' style={Styling}>
      <div style={TitleContainer}>
        <FontAwesomeIcon
          icon={faViruses}
          className='virus-icon far fa-2x fa-in'
        />

        <h2>Covid Sweeper</h2>
      </div>
      <div style={FormContainer}>
        <form onSubmit={onSubmitHandler} style={Form}>
          <FormGroup style={InputRow}>
            <Label for='difficulty' sm={2} style={LabelStyle}>
              Difficulty:
            </Label>
            <Input
              style={InputStyle}
              type='select'
              name='difficulty'
              id='difficulty'
              onChange={changeDifficulty}
            >
              <option>Beginner</option>
              <option>Novice</option>
              <option>Intermediate</option>
              <option>Advanced</option>
              <option>Expert</option>
              <option>Master</option>
              <option>Custom</option>
            </Input>
          </FormGroup>

          <FormGroup style={InputRow}>
            <Label for='height' sm={2} style={LabelStyle}>
              Height:
            </Label>
            <Input
              style={InputStyle}
              type='select'
              name='setHeight'
              id='height'
              disabled={!(difficulty === 'Custom')}
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
            >
              {createSelectItems(5, 20)}
            </Input>
          </FormGroup>

          <FormGroup style={InputRow}>
            <Label for='width' sm={2} style={LabelStyle}>
              Width:
            </Label>
            <Input
              style={InputStyle}
              type='select'
              name='width'
              id='width'
              value={width}
              disabled={!(difficulty === 'Custom')}
              onChange={(e) => setWidth(Number(e.target.value))}
            >
              {createSelectItems(5, 40)}
            </Input>
          </FormGroup>

          <FormGroup style={InputRow}>
            <Label for='mines' sm={2} style={LabelStyle}>
              Mines:
            </Label>
            <Input
              style={InputStyle}
              type='select'
              name='mines'
              id='mines'
              value={mines}
              disabled={!(difficulty === 'Custom')}
              onChange={(e) => setMines(Number(e.target.value))}
            >
              {createSelectItems(10, width * height * 0.6)}
            </Input>
          </FormGroup>

          <Button style={ButtonStyle}>
            <h4>Play Now!</h4>
          </Button>
        </form>
      </div>
      <div style={FooterContainer} className='footer'>
        <div style={Footer} className='content'>
          <a href={'/scores'} id='scoreboard'>
            <FontAwesomeIcon
              icon={faListAlt}
              // style={Icon}
              className='icon far fa-2x fa-in'
            />
            <UncontrolledTooltip
              style={tooltip}
              placement='bottom'
              target='scoreboard'
            >
              Scoreboard
            </UncontrolledTooltip>
          </a>

          {/* <a href={'/scores'} id='information'>
            <FontAwesomeIcon
              icon={faQuestionCircle}
              className='icon far fa-2x fa-in'
            />
            <UncontrolledTooltip
              style={tooltip}
              placement='bottom'
              target='information'
            >
              Info
            </UncontrolledTooltip>
          </a> */}

          <a href={'/scores'} id='settings'>
            <FontAwesomeIcon
              icon={faUserCog}
              style={{ fontSize: '1.75rem' }}
              className='icon far fa-lg fa-in'
            />
            <UncontrolledTooltip
              style={tooltip}
              placement='bottom'
              target='settings'
            >
              Settings
            </UncontrolledTooltip>
          </a>

          <a href={'https://www.github.com/T-mclennan'} id='github'>
            <FontAwesomeIcon
              icon={faGithubAlt}
              style={{ fontSize: '2.2rem' }}
              className='icon far fa-2x fa-in'
            />
          </a>
          <UncontrolledTooltip
            style={tooltip}
            placement='bottom'
            target='github'
          >
            Github
          </UncontrolledTooltip>
          {/* <i className='far fa-question-circle'></i> */}
        </div>
      </div>
    </div>
  );
};

const Styling = {
  backgroundImage:
    'linear-gradient(to bottom, #0e1a49 0%, #red 30%,#002fa7 100%)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignContent: 'center',
  height: '100%',
};

const TitleContainer = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignContent: 'center',
  paddingRight: '3rem',
};

const FormContainer = {
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
  backgroundColor: 'hsl(204, 100%, 60%) 53%',
  border: '1px double #ffd79c',
  borderRadius: '1rem',
  padding: '2rem',
  margin: 'auto',
};

const InputStyle = {
  textAlignLast: 'center',
  color: '#0e1a49',
  fontSize: '1rem',
  height: '2.5rem',
  width: '15rem',
  border: '1px solid #0e1a49',
  borderRadius: '1rem',
  marginLeft: '2rem',
};

const InputRow = {
  display: 'flex',
  flexDirection: 'row',
  alignContent: 'center',
  width: '36.5rem',
  padding: '0 1rem',
};

const ButtonStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#ffd79c',
  fontSize: '1rem',
  height: '3.2rem',
  width: '22rem',
  fontWeight: 'bold',
  backgroundColor: '#0e1a49',
  border: '1px solid #ffd79c',
  borderRadius: '1rem',
  margin: 'auto',
  marginTop: '0.5rem',
};

const FooterContainer = {
  display: 'flex',
  justifyContent: 'center',
  height: '5rem',
  width: '100%',
};

const LabelStyle = {
  fontSize: '1.3rem',
  paddingTop: '3px',
};

const tooltip = {
  backgroundColor: 'transparent',
  color: '#d41b53',
  fontSize: '1.2rem',
};

const Footer = {
  display: 'flex',
  // width: '24rem',
  width: '20rem',
  justifyContent: 'center',
  color: '#0e1a49',
};

export default Landing;
