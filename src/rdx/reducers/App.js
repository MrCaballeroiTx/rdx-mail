
import { START_APP, READ_MAILS } from 'rdx/types';

const APP_INITIAL_STATE = {
    started: false,
    mails: [],
    inboxMails: [],
    draftMails: [],
    trashMails: []
};

export default function (state, action) {
    switch (action.type) {
        case START_APP:
            let cloned = Object.assign({}, state);
            cloned.started = true;
            return cloned;
        case READ_MAILS:
            return {
                ...state,
                mails: action.payload
            }
        default:
            break;
    }
    return APP_INITIAL_STATE;
}