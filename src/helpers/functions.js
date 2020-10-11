
import moment from 'moment';

export const capitalize = value => {
    if (!value || typeof value !== 'string') { return ''; }

   return value.split(' ').map( w =>  w.substring(0,1).toUpperCase()+ w.substring(1)).join(' ');
} 


export const formatDate = (date, dateFormat = 'YYYY/MM/DD') => {
    if (!date || typeof date !== 'string') { return ''; }

    return moment(date).format(dateFormat);
}