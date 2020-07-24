import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom/extend-expect';
import App from '../../App';

describe('Footer', () => {
  test('"How it works" footer link points to the correct page', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    //Checking navigation links go where they should:

    //Check Header:
    expect(
      screen.getByRole('heading', { name: /covid sweeper/i })
    ).toBeInTheDocument();

    const githubLink = screen.getByRole('link', { name: /github/i });
    const settingsLink = screen.getByLabelText(/settings/i);

    //Click settings link:
    userEvent.click(settingsLink);
    expect(
      screen.getByRole('heading', { name: /settings/i })
    ).toBeInTheDocument();

    //Click main menu button:
    const returnButton = screen.getByRole('button', { name: /main menu/i });
    userEvent.click(returnButton);
    expect(
      screen.getByRole('heading', { name: /covid sweeper/i })
    ).toBeInTheDocument();

    //Click scoreboard link:
    const scoreboardLink = screen.getByLabelText(/scoreboard/i);
    userEvent.click(scoreboardLink);
    expect(
      screen.getByRole('heading', { name: /top players:/i })
    ).toBeInTheDocument();
  });
});
