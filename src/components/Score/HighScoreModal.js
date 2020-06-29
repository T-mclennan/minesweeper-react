import React, { useState } from 'react';
import history from '../../history';
import LoaderButton from './LoaderButton';
import { addScore } from '../../actions/scoring';
import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

export const HighScoreModal = ({ score, toggle, modal }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState('');

  const submitScore = async (event) => {
    event.preventDefaults();
    setIsLoading(true);
    console.log(username, score);
    try {
      await addScore(username, score);
      history.push('/scores');
      toggle();
    } catch (e) {
      console.log(e);
      setIsLoading(false);
      history.push('/scores');
    }
  };

  const onChangeHandler = (e) => {
    console.log(e.target);
    setUsername(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <Modal
        isOpen={modal}
        toggle={toggle}
        style={modalStyle}
        size='lg'
        backdrop={'static'}
      >
        <ModalHeader style={modalHeader}>
          <h2>High Score!!</h2>
        </ModalHeader>
        <ModalBody style={modalBody}>
          <Form style={formStyle} onSubmit={submitScore}>
            <FormGroup style={{ margin: 'auto' }}>
              <Label for='username'>Please enter a username:</Label>
              <Input
                type='text'
                name='username'
                id='username'
                placeholder='myName1234'
                maxLength='12'
                style={inputStyle}
                onChange={(e) => onChangeHandler(e)}
              />
            </FormGroup>
            <LoaderButton
              loading={isLoading}
              style={buttonStyle}
              color='primary'
              // onClick={toggle}
            >
              Submit Score!
            </LoaderButton>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

const modalStyle = {
  width: '36rem',
};

const buttonStyle = {
  width: '28rem',
  height: '3.5rem',
  margin: '1rem auto',
  borderRadius: '0.5rem',
};

const modalBody = {
  display: 'flex',
  justifyContent: 'flex-start',
};

const modalHeader = {
  display: 'flex',
  justifyContent: 'center',
  padding: '0 2rem',
};

const formStyle = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignContent: 'center',
};

const inputStyle = {
  width: '28rem',
  height: '2.5rem',
  borderRadius: '0.5rem',
};

export default HighScoreModal;
