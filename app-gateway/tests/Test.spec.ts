import {expect} from 'chai';
import 'mocha';
import mockKnex from 'mock-knex';
import AuthenticatorService from '../src/api/authenticator/AuthenticatorService';

const tracker = mockKnex.getTracker();

describe('Test mock knex', () => {
    tracker.install();
    before(() => {
        tracker.on('query', (query) => {
            const results = [
                {
                    date_time: new Date(),
                }
            ];
            query.response(results);
        });
    });

    it('Find date_time', async () => {
        const result = await AuthenticatorService.findAll();
        console.log('test: ', result);
        expect(result[0]).to.have.property('date_time');
    });

});
