export const LECTURE_INDEXES = [0] as const;

export type Lecture = {
  lectureIndex: (typeof LECTURE_INDEXES)[number];
};
