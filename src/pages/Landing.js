import React from 'react';
import '../stylesheets/Landing.css';

const Landing = () => {
  return (
    <div style={Styling}>
      <div style={TitleContainer}>
        {/* <h2 style={Title}>Corona Sweeper</h2> */}
        {/* <h1>CoronaSweeper</h1> */}
        <h2>Covid Sweeper</h2>
        {/* <h3 data-text='Character'>Covid Sweeper</h3> */}
      </div>
      <div style={FormContainer}>
        <div style={Form}></div>
      </div>
    </div>
  );
};

const Styling = {
  backgroundImage: 'linear-gradient(to top, darkblue 0%, black 100%)',
  // backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignContent: 'center',
  height: '100%',
};

const TitleContainer = {
  flex: 1,
};

const Title = {
  // color: 'white',
  // fontSize: '3rem',
};

const FormContainer = {
  flex: 6,
  display: 'flex',
  justifyContent: 'space-around',
  alignContent: 'center',
};

const Form = {
  width: '30rem',
  height: '25rem',
  border: '1px solid white',
  borderRadius: '1rem',
};

export default Landing;
