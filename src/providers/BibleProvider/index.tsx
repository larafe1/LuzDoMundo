import { createContext, useState, useCallback, useEffect } from 'react';

import type { AxiosResponse } from 'axios';

import config from '@/config';
import { DEFAULT_BIBLE_VERSION } from '@/constants';
import { api } from '@/services';

import type {
  BibleContextProps,
  BibleProviderProps,
  Book,
  BibleVersion,
  Chapter,
  Verse,
  GetChapterPayload,
  GetRandomVersePayload
} from './types';

export const BibleContext = createContext({} as BibleContextProps);

export const BibleProvider = ({ children }: BibleProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [books, setBooks] = useState([] as Book[]);
  const [bibleVersion, setBibleVersion] = useState(
    DEFAULT_BIBLE_VERSION as BibleVersion
  );
  const [passage, setPassage] = useState({} as Chapter);

  const getBooks = async () => {
    try {
      setIsLoading(true);
      const { data }: AxiosResponse<Book[]> = await api.get('/books');
      setBooks(data);
      localStorage.setItem(config.booksStorageKey, JSON.stringify(data));
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const getChapter = async (payload: GetChapterPayload) => {
    try {
      setIsLoading(true);
      const { bookAbbrev, chapter, verse } = payload;
      const baseUrl = `/${bookAbbrev}/${chapter}`;
      const parsedUrl = verse ? baseUrl + `/${verse}` : baseUrl;

      const { data }: AxiosResponse<any> = await api.get(parsedUrl);
      const fmtData: Chapter = !verse
        ? data
        : {
            book: data.book,
            chapter: {
              number: data.chapter,
              verses: data.number
            },
            verses: [
              {
                number: data.number,
                text: data.text
              }
            ]
          };
      setPassage(fmtData);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const getRandomVerse = async (payload?: GetRandomVersePayload) => {
    try {
      setIsLoading(true);
      let bookAbbreviation = payload?.bookAbbrev;
      if (!bookAbbreviation) {
        const randomBook = Math.floor(Math.random() * books.length);
        bookAbbreviation = books[randomBook]?.abbrev.pt;
      }

      const { data }: AxiosResponse<Verse> = await api.get(
        `/${bookAbbreviation}/random`
      );
      const fmtData: Chapter = {
        book: data.book,
        chapter: {
          number: data.chapter,
          verses: data.number
        },
        verses: [
          {
            number: data.number,
            text: data.text
          }
        ]
      };
      setPassage(fmtData);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const changeBibleVersion = (payload: BibleVersion) => {
    setBibleVersion(payload);
  };

  const loadData = useCallback(async () => {
    const rawBooks = localStorage.getItem(config.booksStorageKey);
    if (!rawBooks) {
      await getBooks();
    } else {
      const parsedBooks = JSON.parse(rawBooks);
      setBooks(parsedBooks);
    }
    api.defaults.baseURL = `${config.baseApiUrl}/verses/${bibleVersion.abbrev}`;
    await getRandomVerse();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bibleVersion]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <BibleContext.Provider
      value={{
        isLoading,
        bibleVersion,
        books,
        passage,
        changeBibleVersion,
        getChapter,
        getRandomVerse
      }}
    >
      {children}
    </BibleContext.Provider>
  );
};
