import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { generateScore } from '../../actions/checkWin';

export const HighScoreModal = (props) => {
  const { buttonLabel, className, toggle, modal } = props;

  // for (let width = 10; width < 20; width += 3) {
  //   for (let height = 10; height < 20; height += 3) {
  //     for (let mineCount = 0.1; mineCount < 0.4; mineCount += 0.05) {
  //     const mines = width * height * 0.2;
  //     for (let time = 40000; time < 60000; time += 3000) {
  //       console.log(
  //         `width: ${width} height: ${height} mines: ${mines} time: ${
  //           time / 1000
  //         } score: ${generateScore(time, width, height, mines)}`
  //       );
  //       }
  //     }
  //   }
  // }
  const width = 10;
  const height = 10;
  const mineCoff = 0.15;
  const mines = width * height * mineCoff;
  // const time = 450000 * mineCoff;
  const time = 360000;
  const score2 = generateScore(30000, 10, 10, 10);
  const score3 = generateScore(120000, 15, 18, 70);
  const score = generateScore(time, 17, 30, 155);
  // const score2 = generateScore(200000, 15, 18, 60);

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={toggle}>
            Do Something
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default HighScoreModal;
