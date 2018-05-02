import React from 'react';
import {{pascalCase name}} from '../{{pascalCase name}}';
import { defaults } from '../{{pascalCase name}}.props';

const tests = {
    empty: <{{pascalCase name}} />,
    text: <{{pascalCase name}}>Hello World</{{pascalCase name}}>,
    icons: <{{pascalCase name}}>:3</{{pascalCase name}}>
};

test('Default Props', () => {
    expect(tests.empty.props).toEqual(defaults);
});

test('Empty {{pascalCase name}} exists', () => {
    expect(tests.empty).toBeDefined();
})

test('{{pascalCase name}} has text', () => {
    expect(tests.text.props.children).toEqual('Hello World')
})