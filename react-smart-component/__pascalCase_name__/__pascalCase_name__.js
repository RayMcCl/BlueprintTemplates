import React, { Component } from 'react';
import { types, defaults } from './{{pascalCase name}}.props.js';

/* --- Resources --- */
import './{{pascalCase name}}.scss';

class {{pascalCase name}} extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div>

            </div>
        )
    }
}

{{pascalCase name}}.propTypes = types;
{{pascalCase name}}.defaultProps = defaults;

export default {{pascalCase name}};