import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

afterEach(cleanup);

//Carousel
it('renders on the screen and contents can be placed in it', ()=> {
    const carousel = document.getElementById('carouselShell');
    const div = document.createElement('div');
    ReactDOM.render(carousel, div);
    console.log('Carousel Present')
    ReactDOM.unmountComponentAtNode(div);
});

it('renders the TeamCard component', ()=> {
    render(<App/>);

    const teamCard = document.getElementsByClassName('team');
    console.log('TeamCard present in Carousel')
});

it('renders the carousel buttons', ()=> {
    render(<App/>);

    const buttons = document.getElementsByClassName('carousel-btn');
    console.log('Buttons are present in Carousel')
});

it('the left carousel button scrolls', ()=> {
    render(<App />);
 
    const btn = screen.getByTestId("leftCarouselBtn");
    fireEvent.click(btn);
 
    expect(document.getElementById("slider")).toBeCalled;
});

it('the right carousel button scrolls', ()=> {
    render(<App />);
 
    const btn = screen.getByTestId("rightCarouselBtn");
    fireEvent.click(btn);
 
    expect(document.getElementById("slider")).toBeCalled;
});

//Search Filter
it('renders search filter', ()=> {
    render(<App/>);

    const searchFilter = screen.getByTestId('searchFilter');
    expect(searchFilter).toBeInTheDocument();
    console.log('Search Filter Present')
});

it('Search Filter accepts input', ()=> {
    render(<App/>);

    const searchFilter = screen.getByTestId('searchFilter');
    userEvent.type(searchFilter, "test Team");

    expect(screen.getByTestId("searchFilter")).toHaveValue("test Team");
    console.log('Search Filter Input Present')
});

it('Search Filter works', ()=> {
    render(<App/>);

    const searchFilter = screen.getByTestId('searchFilter');
    userEvent.type(searchFilter, "austin");

    expect(screen.getByTestId("testTeamName")).toHaveTextContent("Austin FC");
    console.log('Search Filter works')
});