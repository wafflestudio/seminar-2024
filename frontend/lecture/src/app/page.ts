import { ReactNode } from 'react';

import { Page, PageParams } from '@/entities/page';

export type PageComponent<P extends Page> = (props: {
  params: PageParams<P>;
}) => ReactNode;

export const PAGE_PATH = {
  [Page.HOME]: '/',
  [Page.LECTURE]: '/lectures/:lectureIndex',
} as const satisfies Record<Page, string>;
