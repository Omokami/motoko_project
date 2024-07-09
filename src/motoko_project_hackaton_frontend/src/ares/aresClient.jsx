import { Client, InternetIdentity } from '@bundly/ares-core';

const client = Client.create({
    restCanisters: {
        motoko_project_hackaton_backend: {
            // baseUrl: process.env.REACT_APP_API_REST_URL
            baseUrl: 'http://b77ix-eeaaa-aaaaa-qaada-cai.localhost:4943'
        }
    },
    providers: [
        new InternetIdentity({
            // providerUrl: process.env.REACT_APP_INTERNET_IDENTITY_URL
            providerUrl: 'http://bw4dl-smaaa-aaaaa-qaacq-cai.localhost:4943'
        })
    ]
});

export default client;
