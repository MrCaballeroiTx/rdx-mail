
import { START_APP, READ_MAILS, FETCHING_MAILS } from 'rdx/types';
import { DELETE_MAIL } from '../types';

const APP_INITIAL_STATE = {
    started: false,
    mails: [],
    inboxMails: [],
    draftMails: [],
    trashMails: [],
    isFetching: false
};

export default function (state, action) {
    switch (action.type) {
        case START_APP:
            let cloned = Object.assign({}, state);
            cloned.started = true;
            cloned.isFetching = true;
            return cloned;
        case READ_MAILS:
            return {
                ...state,
                mails: action.payload,
                isFetching: false
            }
        case FETCHING_MAILS:
            return {
                ...state,
                mails: [],
                isFetching: true
            }
        case DELETE_MAIL:
            return {
                ...state.mails.filter((data, i) => i !== action.id),
                mails: [...state.mails.filter((data, i) => i !== action.id)]
            }
        default:
            break;
    }
    return APP_INITIAL_STATE;
}