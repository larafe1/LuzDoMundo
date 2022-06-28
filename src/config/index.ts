export default {
  baseApiUrl: 'https://www.abibliadigital.com.br/api',
  apiToken: import.meta.env.VITE_API_TOKEN,
  booksStorageKey: '@luzdomundo:books',
  bookmarksStorageKey: '@luzdomundo:bookmarks'
} as const;
