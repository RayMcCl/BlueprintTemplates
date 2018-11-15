import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import withTests from 'STORYBOOK/withTests';
import JSXAddon from 'storybook-addon-jsx';
import { withDocs } from 'storybook-readme';

import {{pascalCase name}} from '../{{pascalCase name}}';
import Readme from './README.md';

storiesOf('{{pascalCase name}}', module)
    .addDecorator(withTests('{{pascalCase name}}'))
    .addDecorator(withDocs(Readme))
    .addWithJSX('with text', () => (
        <{{pascalCase name}}></{{pascalCase name}}>
    ));  