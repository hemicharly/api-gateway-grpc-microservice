import {expect} from 'chai';
import 'dotenv/config';
import 'mocha';
import request from 'supertest';


describe('GET /authenticator', () => {
    it('Result success', async () => {
        const {status, body} = await request(process.env.BASE_URL_TEST)
            .get('/authenticator')
        expect(status).eq(200, 'Status code 200');
        expect(body[0]).to.have.property('date_time');
        expect(body[0].date_time).not.eq('', 'date_time not empty');
    });

});
