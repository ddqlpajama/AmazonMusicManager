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

## Why it is being abandoned

The decision to abandon the project was made after encountering a critical roadblock. Despite thorough documentation, it became evident that Amazon does not extend API access to individual contributors. An attempt to interact with the Amazon Music API resulted in a 403 Resource Not Found Error. Upon investigation, it was discovered that Amazon required explicit consent for the Amazon Developer Account to access the Amazon Music API.

## What's Next

As I set my sights on the future, a new goal has emerged: Web Crawling and Text Extraction. However, I've come to recognize that the path forward cannot follow the same route as this abandoned web application.

Crawling blogs for information implies a different technological landscape. The dynamic nature of blogs makes it improbable for them to be static web pages. The intricacies of blog crawling might require a more robust approach than what a web application can provide. This realization leads me to contemplate an alternative direction: a Desktop Application.

By shifting towards a Desktop Application, I can harness the capabilities of tools like Chromium, which can better handle the complexities of web crawling and text extraction. This pivot in approach allows me to explore more advanced techniques and overcome the challenges associated with dynamic content extraction.

With extracted content that provides album image I plan to investigate the AI possibility.

1. Text Extraction from Album Image to get search term for Music API.
2. Image Classification to see if album image from API matches what's in the blog.

While the journey ahead is undoubtedly a new and uncharted one, the lessons learned from this project will undoubtedly guide and illuminate the path forward. As I delve into the realm of Desktop Applications, I aim to bridge the gap between blog content and curated playlists, creating a harmonious and comprehensive music curation experience.
