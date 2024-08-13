import { PropsWithChildren } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Page, PageDetail } from '../../../entities/page';
import { PAGE_PATH } from '../../page';
import { replacePathParams } from '../../utils/replacePathParams';

export const Link = <P extends Page>({
  page,
  replace,
  children,
}: PropsWithChildren<{
  page: Extract<PageDetail, { page: P }>;
  replace?: boolean;
}>) => {
  return (
    <RouterLink
      to={replacePathParams(PAGE_PATH[page.page], page.params)}
      replace={replace}
    >
      {children}
    </RouterLink>
  );
};
