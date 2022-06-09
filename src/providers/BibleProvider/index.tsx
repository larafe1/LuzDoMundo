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
  Passage,
  Chapter,
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
  const [chapter, setChapter] = useState({} as Passage);

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

      const { data }: AxiosResponse<Passage> = await api.get(parsedUrl);
      setChapter(data);
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

      const { data }: AxiosResponse<Passage> = await api.get(
        `/${bookAbbreviation}/random`
      );
      if (!isChapter(data)) {
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
        setChapter(fmtData);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const changeBibleVersion = (payload: BibleVersion) => {
    setBibleVersion(payload);
  };

  const isChapter = (passage: Passage): passage is Chapter =>
    typeof passage !== 'number';

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
        chapter,
        changeBibleVersion,
        getChapter,
        getRandomVerse
      }}
    >
      {children}
    </BibleContext.Provider>
  );
};
