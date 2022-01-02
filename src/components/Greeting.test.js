import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component',() => {
    test('renders Hello World as a text',() => {
       render(<Greeting/>) 
       const hellowWorldText = screen.queryByText('Hello world!');
       expect(hellowWorldText).toBeInTheDocument();
    })

    test('gogoheaven',() => {
       render(<Greeting/>) 
       const hellowWorldText = screen.getByText('gogoheaven');
       expect(hellowWorldText).toBeInTheDocument();
    })
    
    test('renders "good to see you" if the button was NOT clicked',() => {
        render(<Greeting></Greeting>);
        const goodToSeeYouText = screen.getByText('Its good to see you', {exact:false});
        expect(goodToSeeYouText).toBeInTheDocument();
    })

    test('renders "changed!" if button was clicked',() => {
        render(<Greeting></Greeting>);
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        const outputElement = screen.getByText('changed!');
        expect(outputElement).toBeInTheDocument();
    })

    test('does not render "good to see you" if button was clicked',() => {
        render(<Greeting></Greeting>);
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        const outputElement = screen.queryByText('Its good to see you',{exact:false});
        expect(outputElement).toBeNull();
    })

    test('test',() => {
        return undefined;
    });

})