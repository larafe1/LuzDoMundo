import { useBible } from '@/hooks';
import { Chapter, GetChapterPayload } from '@/providers/BibleProvider/types';

export const usePassage = () => {
  const {
    isLoading,
    getChapter,
    passage,
    bookmarks,
    saveChapterIntoBookmarks
  } = useBible();

  const handleGetChapter = async (payload: Chapter, which: 'prev' | 'next') => {
    const searchObj: GetChapterPayload = {
      bookAbbrev: payload.book.abbrev.pt,
      chapter: payload.chapter.number,
      verse:
        which === 'prev'
          ? payload.verses[0].number - 1
          : payload.verses[0].number + 1
    };
    await getChapter(searchObj);
  };

  const checkIfAlreadyBookmarked = (payload: Chapter) => {
    const chapterURI = `${payload.book.abbrev.pt}/${payload.chapter.number}`;

    return !!bookmarks.find((bookmark) => bookmark === chapterURI);
  };

  const handleSaveChapterIntoBookmarks = (payload: Chapter) => {
    if (!Object.keys(payload).length) return;

    let allBookmarks = [...bookmarks];
    const chapterURI = `${payload.book.abbrev.pt}/${payload.chapter.number}`;
    const alreadyBookmarked = checkIfAlreadyBookmarked(payload);
    if (alreadyBookmarked) {
      allBookmarks = bookmarks.filter((bookmark) => bookmark !== chapterURI);
    } else {
      allBookmarks.push(chapterURI);
    }

    saveChapterIntoBookmarks(allBookmarks);
  };

  return {
    isLoading,
    handleGetChapter,
    passage,
    checkIfAlreadyBookmarked,
    handleSaveChapterIntoBookmarks
  };
};
