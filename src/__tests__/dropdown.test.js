import '@testing-library/jest-dom';
import DropDown from '../components/dropdown/DropDown';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

test("Should display dropdown menu on hover", () => {
    render( <BrowserRouter>
    <DropDown heading='mockHeading' values={['mockdata1', 'mockdata2', 'mockdata3']} />
    </BrowserRouter> );
    const heading = screen.getByText('mockHeading');
    fireEvent.mouseEnter(heading);
    const dropdownItems = screen.getAllByTestId('dropdown');
    expect(dropdownItems.length).toBe(3);
})