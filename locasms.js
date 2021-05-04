const axios = require('axios');
const queryString = require('query-string');

// http://209.133.205.2/painel/api.ashx?action=sendsms&lgn=LOGIN&pwd=SENHA
//&msg=Feliz%20Natal&numbers=3199999999
const apiAxios = axios.create({
    baseURL: 'http://209.133.205.2/painel/api.ashx'
})

const user = "5399925-0139";
const password = "355135;"

//enviando sms
apiAxios.get('', {
    params: {
        action: 'sendsms',
        lgn: '53999250139',
        pwd: '355135',
        msg: 'Eae vagabunda',
        numbers: '53999697505'
    }
}).then(response => {
    console.log(response);
})