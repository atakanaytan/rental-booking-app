


export const capitalize = value => {
    if (!value || typeof value !== 'string') { return ''; }

   return value.split(' ').map( w =>  w.substring(0,1).toUpperCase()+ w.substring(1)).join(' ');
} 