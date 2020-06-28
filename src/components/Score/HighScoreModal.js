import React from 'react';
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

export const HighScoreModal = (props) => {
  const { toggle, modal } = props;

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
          <Form style={formStyle}>
            <FormGroup style={{ margin: 'auto' }}>
              <Label for='username'>Please enter a username:</Label>
              <Input
                type='text'
                name='username'
                id='username'
                placeholder='myName1234'
                maxLength='12'
                style={inputStyle}
              />
            </FormGroup>
            <Button style={buttonStyle} color='primary' onClick={toggle}>
              Submit Score!
            </Button>
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
  // padding: '1rem 4rem 1rem 4rem',
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
