const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:8080/' : 'https://final-project-backend-q7mqhxeq3q-lz.a.run.app/'
export const API_URL = (slug) => `${BASE_URL}${slug}`