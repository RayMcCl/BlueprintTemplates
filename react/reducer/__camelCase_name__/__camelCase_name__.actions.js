export const SET_{{upperCase name}}_STATE = 'USER/SetState';

/**
 * Action Creator: Sets the {{camelCase name}} state
 * 
 * @param {Object} val The object to assign the {{camelCase name}} state to
 */
export const set{{pascalCase name}}State = (val) => {
    return {
        type: SET_{{upperCase name}}_STATE,
        payload: val
    };
}