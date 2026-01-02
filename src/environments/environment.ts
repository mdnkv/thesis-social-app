export const environment = {
    production: true,
    serverUrl: import.meta.env['NG_APP_API_URL'],
    keycloak: {
        server: import.meta.env['NG_APP_KEYCLOAK_URL'],
        clientId: import.meta.env['NG_APP_KEYCLOAK_CLIENT_ID'],
        realm: import.meta.env['NG_APP_KEYCLOAK_REALM']
    }
};
