//CHANGE ME
const REGISTRATION_CLIENT_URI= "http://localhost:8080/realms/myrealm/clients-registrations/openid-connect/72185c22-1c38-4ec1-8568-a591506d5f83"
const REGISTRATION_ACCESS_TOKEN= "eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJhOGUxOWI2MC0zM2YxLTRhODctOGEyOC1mYzE4NzgyMDMyOGMifQ.eyJleHAiOjAsImlhdCI6MTcxNzUwMDI5MCwianRpIjoiZmYzZmQ5YmUtM2JjOS00NGFhLWE5MTMtNGMyNjU4OTJmMzM1IiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlYWxtcy9teXJlYWxtIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlYWxtcy9teXJlYWxtIiwidHlwIjoiUmVnaXN0cmF0aW9uQWNjZXNzVG9rZW4iLCJyZWdpc3RyYXRpb25fYXV0aCI6ImF1dGhlbnRpY2F0ZWQifQ.vAoC5KKNcvzP0F51NZ57r9NancifzrN1OobSf7-FcrE"

const run = async () => {
    await fetch(REGISTRATION_CLIENT_URI, {
        method: 'DELETE',
        headers: {
          'Authorization': 'Bearer ' + REGISTRATION_ACCESS_TOKEN,
        },
    }).then((res) => {
        console.log(res.status)
    })
}

run();