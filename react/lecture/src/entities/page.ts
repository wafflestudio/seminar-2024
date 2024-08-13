import { Lecture } from './lecture';

export enum Page {
  HOME = 'HOME',
  LECTURE = 'LECTURE',
}

export type PageDetail =
  | {
      page: Page.HOME;
      params: Record<string, never>;
    }
  | {
      page: Page.LECTURE;
      params: { lectureIndex: Lecture['lectureIndex'] };
    };

export type PageParams<P extends Page> =
  Extract<PageDetail, { page: P }> extends { params: infer R } ? R : never;
