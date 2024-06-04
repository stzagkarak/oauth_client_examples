//CHANGE ME
const REGISTRATION_CLIENT_URI= "http://localhost:8080/realms/myrealm/clients-registrations/openid-connect/bbca896a-d227-4bee-9498-686a2c0e373b"
const REGISTRATION_ACCESS_TOKEN= "eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJhOGUxOWI2MC0zM2YxLTRhODctOGEyOC1mYzE4NzgyMDMyOGMifQ.eyJleHAiOjAsImlhdCI6MTcxNzUwMDU0NCwianRpIjoiYmM3ZWRmYmMtZmRhOS00NzkzLTk4NDctMzA5OWY0MDU2ZDcyIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlYWxtcy9teXJlYWxtIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlYWxtcy9teXJlYWxtIiwidHlwIjoiUmVnaXN0cmF0aW9uQWNjZXNzVG9rZW4iLCJyZWdpc3RyYXRpb25fYXV0aCI6ImF1dGhlbnRpY2F0ZWQifQ.0Kfl23ISk8aCsL23oIu_VlLYmjJzuekQvtleorBerL8"

const run = async () => {

    await fetch(REGISTRATION_CLIENT_URI, {
        method: 'PUT',
        headers: {
          'Authorization': 'Bearer ' + REGISTRATION_ACCESS_TOKEN,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            client_name: "new-name",
            /* redirect_uris: ["https://localhost:8181/login/success2"] */
        })
    }).then(async (res) => {
        console.log(res.status)
        const content = await res.json();
        console.log(content)
    }).catch((er) => {
        console.log(er)
    })

}

run();