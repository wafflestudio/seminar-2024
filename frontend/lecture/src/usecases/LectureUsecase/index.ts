import { Lecture } from '@/entities/lecture';

export type LectureUsecase = {
  showLecture: (lectureIndex: Lecture['lectureIndex']) => Promise<{
    sections: { markdown: string }[];
  }>;
};

export const implLectureUsecase = ({
  lectureContentRepository: lectureContentRepository,
}: {
  lectureContentRepository: {
    loadLectureMarkdowns: (_: {
      lectureIndex: Lecture['lectureIndex'];
    }) => Promise<string[]>;
  };
}): LectureUsecase => {
  return {
    showLecture: async (lectureIndex) => {
      const markdowns = await lectureContentRepository.loadLectureMarkdowns({
        lectureIndex,
      });
      return {
        sections: markdowns.map((markdown) => ({ markdown })),
      };
    },
  };
};
