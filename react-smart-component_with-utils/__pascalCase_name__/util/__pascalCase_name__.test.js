import React from 'react';
import { shallow } from 'enzyme';

import {{pascalCase name}} from '../{{pascalCase name}}';
import { defaults } from '../{{pascalCase name}}.props';

const tests = {
    empty: <{{pascalCase name}} />,
    text: <{{pascalCase name}}>Hello World</{{pascalCase name}}>,
    icons: <{{pascalCase name}}>:3</{{pascalCase name}}>
};

describe('<{{pascalCase name}} />', () => {
    it('renders', () => {
        const renderedComponent = shallow(<{{pascalCase name}} />);
        expect(
            // renderedComponent.find('.button-group').getElement()
        ).toBeDefined();
    });

    it('renders its children', () => {
        const text = 'Hello World';
        const renderedComponent = shallow(
            <{{pascalCase name}}>{ text }</{{pascalCase name}}>
        );
        expect(
            renderedComponent.contains(text)
        ).toEqual(true);
    });
});