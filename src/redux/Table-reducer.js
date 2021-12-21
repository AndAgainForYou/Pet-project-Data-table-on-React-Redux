const ADD_TABLE = 'ADD_TABLE';
const UPDATE_TEXT_ONE = 'UPDATE_TEXT_ONE';
const UPDATE_TEXT_TWO = 'UPDATE_TEXT_TWO';
const UPDATE_TEXT_TRE = 'UPDATE_TEXT_TRE';

let initialState = {
    tables: [
        {id: 1, name: 'Dimych', surname: 'Dimych'},
        {id: 2, name: 'Andrew', surname: 'Dimych'},
        {id: 3, name: 'Sveta', surname: 'Dimych'},
        {id: 4, name: 'Sasha', surname: 'Dimych'},
        {id: 5, name: 'Viktor', surname: 'Dimych'},
        {id: 6, name: 'Valera', surname: 'Dimych'}
    ],
    newMessageBodyNameId: '',
    newMessageBodyName: '',
    newMessageBodySurname: ''
};

const tableReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TABLE:
            return {
                ...state,
                tables: [...state.tables, {id: state.newMessageBodyNameId, name: state.newMessageBodyName, surname: state.newMessageBodySurname}]
            };
            case UPDATE_TEXT_TWO:
            return {
                ...state,
                newMessageBodySurname:  action.body
            };
            case UPDATE_TEXT_ONE:
                //let body = state.newMessageBody;
            return {
                ...state,
                newMessageBodyName:  action.body
            };
            case UPDATE_TEXT_TRE:
                return {
                    ...state,
                    newMessageBodyNameId:  action.body
                };
        default:
            return state;
    }
}


export const addTableAC = () =>
    ({type: ADD_TABLE});
export const updateNewMessageBodyAC = (body) => ({type: UPDATE_TEXT_ONE, body});
export const updateNewMessageBodyTwoAC = (body) => ({type: UPDATE_TEXT_TWO, body});
export const updateNewMessageBodyTreAC = (body) => ({type: UPDATE_TEXT_TRE, body});


export default tableReducer;