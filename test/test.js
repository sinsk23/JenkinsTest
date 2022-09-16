const request= require('supertest');
const app = require('../app.js');

describe('GET /', () => {
    it('Hello Jenkins!! 요청와야함함!plz!plz.', () =>{
        //navigate to root and check the response is 'Hello Jenkins!'
        request(app).get('/').expect('Hello Jenkins!!')
    })
})