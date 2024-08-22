import { LECTURE_INDEXES } from '@/entities/lecture';
import { Page, PageDetail } from '@/entities/page';

export type SidebarUsecase = {
  showSidebar: () => {
    homeLink: PageDetail;
    links: { title: string; link: PageDetail }[];
  };
};

export const implSidebarUsecase = (): SidebarUsecase => {
  return {
    showSidebar: () => {
      return {
        homeLink: { page: Page.HOME, params: {} },
        links: LECTURE_INDEXES.map((lectureIndex) => {
          return {
            title: `Lecture ${lectureIndex}`,
            link: { page: Page.LECTURE, params: { lectureIndex } },
          };
        }),
      };
    },
  };
};
