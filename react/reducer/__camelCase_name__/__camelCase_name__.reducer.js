import {
    SET_{{upperCase name}}_STATE
} from './{{camelCase name}}.actions';

export default (state, action) => {
    let newState = {};

    switch (action.type) {
        case SET_{{upperCase name}}_STATE: {
            newState = Object.assign({}, state, action.payload);
            break;
        }
        default: {
            newState = state;
        }
    }

    return newState;
};
