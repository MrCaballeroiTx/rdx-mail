
import { START_APP, READ_MAILS, FETCHING_MAILS } from '../types';
import data from '../../data';

export const fireMeUp = (dispatch) => ({ type: START_APP });

export function fetchingMails() {
    return {
        type: FETCHING_MAILS
    };
};

export const getMails = (emailType = "inbox", search = "") => {
    return {
        type: READ_MAILS,
        payload: data.filter(mail => (mail.type === emailType.toLowerCase()) && (mail.subject.toLowerCase().indexOf(search) >= 0))
    };
};


// export const getMails = emailType => dispatch => {
//     dispatch(fetchingMails())
//     setTimeout(() => {
//         return {
//             type: READ_MAILS,
//             payload: data.filter(email => email.type === emailType)
//         };
//     }, 3000);
// }
