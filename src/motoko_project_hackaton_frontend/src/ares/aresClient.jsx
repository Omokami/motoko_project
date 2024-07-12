import { Client, InternetIdentity } from '@bundly/ares-core';

const client = Client.create({
    restCanisters: {
        motoko_project_hackaton_backend: {
            // baseUrl: process.env.REACT_APP_API_REST_URL
            baseUrl: 'http://bd3sg-teaaa-aaaaa-qaaba-cai.localhost:4943'
        }
    },
    providers: [
        new InternetIdentity({
            // providerUrl: process.env.REACT_APP_INTERNET_IDENTITY_URL
            providerUrl: 'http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:4943'
        })
    ]
});

export default client;
