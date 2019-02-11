
import { START_APP, READ_MAILS } from '../types';
import data from '../../data';

export const fireMeUp = (dispatch) => ({ type: START_APP });

export const getMails = (emailType) => {
    return {
        type: READ_MAILS,
        payload: data.filter(email => email.type === emailType)
    };
};