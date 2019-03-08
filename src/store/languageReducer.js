import * as actionTypes from './actions';
const initialState = {
    "languages":['en','es']
}

let defaultLang = initialState.languages[0];
let lang = localStorage.getItem('language')?localStorage.getItem('language'):defaultLang;
let labels = require('../langs/'+lang+'.json')

initialState['labels'] = labels;

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case actionTypes.CHANGE_LANGUAGE:
            /*Loads new language*/
            let lang = action.language && state.languages.includes(action.language)?action.language:defaultLang;
            labels = require('../langs/'+lang+'.json')
            return {
                ...state,
                labels: labels
            }
        case actionTypes.RESET_SETTINGS:
            /*Loads default language*/
            labels = require('../langs/'+defaultLang+'.json')
            return {
                ...state,
                labels: labels
            }
        default:
            return state
    }
}

export default reducer