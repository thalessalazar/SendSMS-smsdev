const axios = require('axios');

const apiAxios = axios.create({
    baseURL: 'https://api.smsmarket.com.br/webservice-rest/'
})

const auth64 = "";
//enviando sms

apiAxios.get('send-single', {
    params: {
        user: '',
        password: '',
        type: 0,
        number: ,
        content: 'Teste de envio de sms com smsmarket'
    }
}).then(response => {
    console.log(response);
})
