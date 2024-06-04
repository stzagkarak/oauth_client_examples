# SPA Angular Express OAuth Client Example

This example shows how an Angular(SPA frontend)-Express(backend) web application can be configured as a "secure" OAuth client.  

## How it Works 

The application follows the [BFF ( Backend for Frontend )](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-browser-based-apps-18) architecture as described in [OAuth 2.0 for Browser-Based Applications](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-browser-based-apps-18#name-backend-for-frontend-bff) to securly manage and store client tokens. 
 

## Run the demo  

Navigate to the `create-dynamic-client` folder. Install dependencies ( `npm i` ).   

- Change the default attributes in the `create-basic-bff-oauth-client.js` to point to a valid oauth provider. ( values such as `redirect_uris` are already configured in the script for local execution of the demo )

- Run the js script ( `node create-dynamic-client.js` ).

    - A valid configuration should output `client_id`, `client_secret`, `registration_access_token` to STDOUT ( among other values ).   

*Note*: The folder also contains other scripts in order to modify your client attributes. Use when nessesary.  

### Run the app locally

#### Backend 

1. Install dependencies locally `npm i`.
2. Modify the `/express-backend/.env` file using the values generated by the client creation script. 
3. Start a dev server locally using `npm run dev`

#### Frontend 

1. Install dependencies locally `npm i`.
2. Modify the `/angular-demo-frontend/src/environments/environment.development.ts` accordingly, if needed.
3. Start a ng dev server with ssl enabled `npx ng serve --ssl`

#### In action 

Navigate to (default) https://localhost:4200/ and click the login button. If you configuration is correct, you should see the login screen of the oauth provider.  

## Run in production 

The repo also contains guidence to transfer this demo in a production enviroment. See the comments inside `docker-compose.yml` for more information. 

*stzagkarak@June2024*