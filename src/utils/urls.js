const BASE_URL = 'https://final-project-backend-q7mqhxeq3q-lz.a.run.app/';
export const API_URL = (slug) => `${BASE_URL}/${slug}`

// Change from API_URL to MONGO_DB_URL and also in all components related to the login/register

// added by Ylva
// these three lines are refactored - looks cleaner
export const API_KEY = process.env.REACT_APP_API_KEY
// export const MONGO_URL = process.env.REACT_APP_MONGO_URL

// export const MONGO_DB_URL = (slug) => `${MONGO_URL}/${slug}`
// ending of code and comments added by Ylva

// const API_URL = 'https://final-project-backend-q7mqhxeq3q-lz.a.run.app/';
// export default API_URL;