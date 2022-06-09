import type { ReactNode } from 'react';

export type BibleProviderProps = {
  children: ReactNode;
};

export type BibleContextProps = {
  isLoading: boolean;
  bibleVersion: BibleVersion;
  books: Book[];
  chapter: Passage;
  changeBibleVersion: (payload: BibleVersion) => void;
  getChapter: (payload: GetChapterPayload) => Promise<void>;
  getRandomVerse: (payload?: GetRandomVersePayload) => Promise<void>;
};

type BookAbbreviation = {
  pt: string;
  en: string;
};

type TestamentAbbreviation = 'VT' | 'NT';

export type Book = {
  abbrev: BookAbbreviation;
  author: string;
  chapters: number;
  group: string;
  name: string;
  testament: TestamentAbbreviation;
};

export type BibleVersion = {
  abbrev: string;
  name: string;
};

type PartialBook = Omit<Book, 'testament'> &
  Omit<Book, 'chapters'> & {
    version: BibleVersion['abbrev'];
  };

type ChapterDetails = {
  number: number;
  verses: number;
};

type ChapterVerse = {
  number: number;
  text: string;
};

export type Chapter = {
  book: PartialBook;
  chapter: ChapterDetails;
  verses: ChapterVerse[];
};

type Verse = {
  book: PartialBook;
  chapter: number;
  number: number;
  text: string;
};

export type Passage = Chapter | Verse;

export type GetChapterPayload = {
  bookAbbrev: BookAbbreviation['pt'];
  chapter: number;
  verse?: number;
};

export type GetRandomVersePayload = {
  bookAbbrev?: BookAbbreviation['pt'];
};
