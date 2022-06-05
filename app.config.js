import 'dotenv/config';

export default {
    name: 'EAT_IT',
    version: '1.0.0',
    extra: {
        environment: process.env.ENVIRONMENT === 'prod' ? 'prod' : 'dev'
    },
};