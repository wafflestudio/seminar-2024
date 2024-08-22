import { contents } from 'virtual:lecture-contents';

import { implLectureUsecase } from '@/usecases/LectureUsecase';

export const implViteVirtualModuleLectureContentRepository = (): Parameters<
  typeof implLectureUsecase
>[0]['lectureContentRepository'] => {
  return {
    loadLectureMarkdowns: ({ lectureIndex }) => {
      const found = contents.find(
        (c) => c.folder === `lecture${lectureIndex}`,
      )?.markdowns;

      if (found === undefined) throw new Error('Lecture not found');

      return Promise.resolve(found);
    },
  };
};
