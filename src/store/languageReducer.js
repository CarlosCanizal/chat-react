const initialState = {
    "languages":['en','es']
}

let defaultLang = initialState.languages[0];
let lang = localStorage.getItem('language')?localStorage.getItem('language'):defaultLang;
const labels = require('../langs/'+lang+'.json')

initialState['labels'] = labels;

const reducer = (state=initialState, action)=>{
    if (action.type === 'CHANGE_LANGUAGE'){
        let lang = action.language && state.languages.includes(action.language)?action.language:defaultLang;
        const labels = require('../langs/'+lang+'.json')
        return {
            ...state,
            labels: labels
        }
    }
    return state
}

export default reducer