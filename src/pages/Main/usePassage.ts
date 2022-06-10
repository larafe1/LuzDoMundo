import { useBible } from '@/hooks';
import { Chapter, GetChapterPayload } from '@/providers/BibleProvider/types';

export const usePassage = () => {
  const { isLoading, getChapter, passage } = useBible();

  const handleGetChapter = async (chapter: Chapter, which: 'prev' | 'next') => {
    const searchObj: GetChapterPayload = {
      bookAbbrev: chapter.book.abbrev.pt,
      chapter:
        which === 'prev'
          ? chapter.chapter.number - 1
          : chapter.chapter.number + 1,
      verse: 1
    };
    await getChapter(searchObj);
  };

  return { isLoading, handleGetChapter, passage };
};
