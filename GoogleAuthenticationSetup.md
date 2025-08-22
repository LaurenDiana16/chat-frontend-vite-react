## Google authentication and session management implemented
1. Authenticate users via a Google popup window
2. Obtain and decode the ID token (JWT) that contains user profile information
3. Store the token securely on the client sessionStorage
4. Use the decoded payload to access user info
5. Optionally log out the user and clear sessionStorage

## Google authentication setup
### Get client ID
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Navigate to OAuth Consent Screen, fill out required forms and configure:
* User type: External
4. Go to Credentials -> Create Credentials -> OAuth 2.0 Client ID
* Web Application
* Add http://localhost:5173 to Authorized JavaScript Origins
* Add http://localhost:5173 to Authorized redirect URIs
5. Copy your client ID

### Create a .env file in your project root and add client ID

```bash
VITE_GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
```

### Install required packages

```bash
npm install @react-oauth/google jwt-decode
```
