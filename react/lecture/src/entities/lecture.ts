export const LECTURE_INDEXES = [0, 1, 2, 3, 4] as const;

export type Lecture = {
  lectureIndex: (typeof LECTURE_INDEXES)[number];
};
