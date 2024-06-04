import { Issuer } from 'openid-client';

//CHANGE ME
const ISSUER_URL= "http://localhost:8080/realms/myrealm/.well-known/openid-configuration"
const INITIAL_ACCESS_TOKEN= "eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJhOGUxOWI2MC0zM2YxLTRhODctOGEyOC1mYzE4NzgyMDMyOGMifQ.eyJleHAiOjE3MjI3NTg0MDgsImlhdCI6MTcxNzQ4ODAwOCwianRpIjoiZjYwY2M5MzMtNjBiMi00NWVjLTk5ZTYtOWY4ZDQ3MTFiNGI2IiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlYWxtcy9teXJlYWxtIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlYWxtcy9teXJlYWxtIiwidHlwIjoiSW5pdGlhbEFjY2Vzc1Rva2VuIn0.0XtZ9zcJEe3MZdSyiZFvzHuGyQ8RSWYVNmSKu-z0RrM"

const run = async () => {

    const issuer = await Issuer.discover(ISSUER_URL);
    console.log('Discovered issuer %s', issuer.issuer);

    const cl = await issuer.Client.register({
        //CHANGE ME
        client_name: "dynamicly_created_client_4",
        token_endpoint_auth_method: "client_secret_basic",
        redirect_uris: ["https://localhost:8181/login/success"],
        post_logout_redirect_uris: ["https://localhost:8181/logout/success"]
    }, {
        //CHANGE ME
        initialAccessToken: INITIAL_ACCESS_TOKEN
    })

    console.log(cl)
}

run();