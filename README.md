# Project Abandoned: Amazon Music Playlist Manager

## Purpose

The idea for this web application stemmed from the frustration of limited playlist modification options within Amazon Music. The discovery of the Amazon Music API sparked the concept of developing a web application to address this issue.

## License

This project is licensed under the GNU General Public License v3.0 (GPL-3.0).

## How to Run the Application

To run the application, follow these steps:

1. Create a `.env` file in the project root directory.

2. In the `.env` file, define the following environment variables:

   ```
   PUBLIC_LWA_CLIENT_ID=<your_public_client_id>
   LWA_CLIENT_SECRET_ID=<your_client_secret_id>
   AMAZON_PROFILE_ID=<your_amazon_profile_id>
   ```

   These values can be retrieved by following directions in [Amazon Developer Console](https://developer.amazon.com/docs/login-with-amazon/web-docs.html).

3. Install the required packages by running the following command in your terminal:

   ```
   npm install
   ```

4. Start the development server and open the app in a new browser tab using the following command:
   ```
   npm run dev -- --open
   ```

## Development Diary

- **Jun 14, 2023:** Initial commit laid the foundation for the SvelteKit application.
- **Jun 25, 2023:** UI design for the front page was completed.
- **Jun 29, 2023:** Implemented Amazon Login Single Sign-On (SSO) as a prerequisite for utilizing the Amazon Music API.
- **Aug 21, 2023:** Undertook a major project refactoring to enhance its visual appeal and user experience.
- **Aug 24, 2023:** Unfortunately, the project was abandoned due to unforeseen challenges.