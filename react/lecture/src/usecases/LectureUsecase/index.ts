export type LectureUsecase = {
  showLecture: (lectureIndex: number) => { markdown: string };
};

export const implLectureUsecase = (): LectureUsecase => {
  return {
    showLecture: (lectureIndex) => {
      return {
        markdown: `- Lecture ${lectureIndex}`,
      };
    },
  };
};
