import chance from 'chance';

const generateUser = function* ()
{
    yield {
        key: chance().guid(),
        name: chance().name(),
        email: chance().email()
    };
};

export default {
    'GET /api/users': {
        result: [
            ...Array.from({length: 10}, () => generateUser().next().value),
            {
                key: 'user-skitsanos',
                name: 'Evgenios Skitsanos',
                email: chance().email()
            }
        ],
        total: 100
    }
};