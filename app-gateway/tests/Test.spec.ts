import {expect} from 'chai';
import 'dotenv/config';
import 'mocha';
import mockKnex from 'mock-knex';
import request from 'supertest';
import app from '../src/App';

const tracker = mockKnex.getTracker();

describe('GET /authenticator', () => {
    before(() => {
        tracker.install();
        tracker.on('query', (query, step) => {
            [
                () => query.response([{id: 1, username: 'admin'}]),
                () => query.response(undefined)
            ][step - 1]();
        });
    });

    after(() => {
        tracker.uninstall();
    });

    it('200 Ok', async () => {
        const {status, body} = await request(app)
            .get('/authenticator')
        expect(status).eq(200, 'Status code 200');

        expect(body).to.have.property('id');
        expect(body.id).eq(1, 'id is equal 1');

        expect(body).to.have.property('username');
        expect(body.username).not.eq('', 'username not empty');
    });

    it('500 Server Internal Error', async () => {
        const {status, body} = await request(app)
            .get('/authenticator')
        expect(status).eq(500, 'Status code 500');
    });

});

describe('POST /authenticator', () => {
    it('201 Created', async () => {
        const {status, body} = await request(app)
            .post('/authenticator')
            .send({username: 'test@gmail.com', password: 'password123456'});

        expect(status).eq(201, 'Status code 201');

        expect(body).to.have.property('access_token');
        expect(body.access_token).not.eq('', 'access_token not empty');

        expect(body).to.have.property('expired_in');
        expect(body.expired_in).not.eq('', 'expired_in not empty');
    });

    it('400 Bad Request: without username and password', async () => {
        const {status, body} = await request(app)
            .post('/authenticator')
            .send();

        expect(status).eq(400, 'Status code 400');
        expect(body).to.have.property('statusCode');
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
        const {status, body} = await request(app)
            .post('/authenticator')
            .send({username: '', password: '123456'});
        expect(status).eq(400, 'Status code 400');
        expect(body.invalidParams[0].message).eq('username is required', 'invalidParams[0].message password is required');
    });

    it('400 Bad Request: without password', async () => {
        const {status, body} = await request(app)
            .post('/authenticator')
            .send({username: 'hemicharlythiago@gmail.com', password: ''});
        expect(status).eq(400, 'Status code 400');
        expect(body.invalidParams[0].message).eq('password is required', 'invalidParams[0].message password is required');
    });

});

describe('POST /authenticator/create', () => {
    it('201 Created', async () => {
        const {status, body} = await request(app)
            .post('/authenticator/create')
            .send({
                    name: 'teste',
                    email: 'teste@gmail.com',
                    password: 'password123456'
                }
            );
        expect(status).eq(201, 'Status code 201');
    });
});
