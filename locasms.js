const axios = require('axios');
const queryString = require('query-string');

// http://209.133.205.2/painel/api.ashx?action=sendsms&lgn=LOGIN&pwd=SENHA
//&msg=Feliz%20Natal&numbers=3199999999
const apiAxios = axios.create({
    baseURL: 'http://209.133.205.2/painel/api.ashx'
})

const user = "";
const password = ";"

//enviando sms
apiAxios.get('', {
    params: {
        action: 'sendsms',
        lgn: '',
        pwd: '',
        msg: 'Eae vagabunda',
        numbers: ''
    }
}).then(response => {
    console.log(response);
})