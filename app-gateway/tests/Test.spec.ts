import {expect} from 'chai';
import 'dotenv/config';
import 'mocha';
import request from 'supertest';


describe('GET /authenticator', () => {
    it('200 Ok', async () => {
        const {status, body} = await request(process.env.BASE_URL_TEST)
            .get('/authenticator')
        expect(status).eq(200, 'Status code 200');
        expect(body[0]).to.have.property('date_time');
        expect(body[0].date_time).not.eq('', 'date_time not empty');
    });
});

describe('POST /authenticator', () => {
    it('201 Created', async () => {
        const {status, body} = await request(process.env.BASE_URL_TEST)
            .post('/authenticator')
            .send({username: 'hemicharlythiago@gmail.com', password: 'password123456'});

        expect(status).eq(201, 'Status code 201');

        expect(body).to.have.property('access_token');
        expect(body.access_token).not.eq('', 'access_token not empty');

        expect(body).to.have.property('expired_in');
        expect(body.expired_in).not.eq('', 'expired_in not empty');
    });

    it('400 Bad Request: without username and password', async () => {
        const {status, body} = await request(process.env.BASE_URL_TEST)
            .post('/authenticator')
            .send();

        console.log(body);

        expect(status).eq(400, 'Status code 400');
        expect(body).to.have.property('status');
        expect(body.status).not.eq('', 'status not empty');

        expect(body).to.have.property('invalidParams');
        expect(body.invalidParams).not.eq('', 'invalidParams not empty');

        for (let i: number = 0; i <= body.invalidParams; i++) {
            expect(body.invalidParams[i]).to.have.property('code');
            expect(body.invalidParams[i].code).not.eq('', 'invalidParams[' + i + '].code not empty');

            expect(body.invalidParams[i]).to.have.property('message');
            expect(body.invalidParams[i].message).not.eq('', 'invalidParams[' + i + '].message not empty');
        }
    });

    it('400 Bad Request: without username', async () => {
        const {status, body} = await request(process.env.BASE_URL_TEST)
            .post('/authenticator')
            .send({username: '', password: '123456'});
        expect(status).eq(400, 'Status code 400');
        expect(body.invalidParams[0].message).eq('username is required', 'invalidParams[0].message password is required');
    });

    it('400 Bad Request: without password', async () => {
        const {status, body} = await request(process.env.BASE_URL_TEST)
            .post('/authenticator')
            .send({username: 'hemicharlythiago@gmail.com', password: ''});
        expect(status).eq(400, 'Status code 400');
        expect(body.invalidParams[0].message).eq('password is required', 'invalidParams[0].message password is required');
    });

});
