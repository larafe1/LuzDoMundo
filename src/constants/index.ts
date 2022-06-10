export const DEFAULT_ANIMATION_DELAY = 0.3;

export const DEFAULT_BIBLE_VERSION = {
  abbrev: 'nvi',
  name: 'Nova Versão Internacional'
};

export const CHAPTER_FIRST_VERSE = 1;

export const CHAPTER_LAST_VERSE = (chapterLength: number): number =>
  chapterLength;
