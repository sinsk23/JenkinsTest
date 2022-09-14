const request= require('supertest');
const app = require('../app.js');

describe('GET /', () => {
    it('Hello Jenkins!! 라는 요청이 와야한다고한다.', () =>{
        //navigate to root and check the response is 'Hello Jenkins!'
        request(app).get('/').expect('Hello Jenkins!!')
    })
})