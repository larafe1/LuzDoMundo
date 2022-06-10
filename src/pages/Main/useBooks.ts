import { useBible } from '@/hooks';
import { Book } from '@/providers/BibleProvider/types';

export const useBooks = () => {
  const { books } = useBible();

  const getBookByAbbrev = (bookAbbrev: string): Book | null => {
    const bookExists = books.find((book) => book.abbrev.pt === bookAbbrev);
    if (!bookExists) return null;

    return bookExists;
  };

  return { books, getBookByAbbrev };
};
