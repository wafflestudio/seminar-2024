import { type ReactNode, useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/designsystem/ui/card';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from '@/designsystem/ui/pagination';
import { Separator } from '@/designsystem/ui/separator';

export const Slides = ({
  slides,
}: {
  slides: { title: string; content: ReactNode }[];
}) => {
  const { page: page, onChangePage: onChangePage } = usePage({
    minPage: 1,
    maxPage: slides.length,
  });

  const slide = slides[page - 1];
  const slideTitle = slide?.title;

  useEffect(() => {
    if (slideTitle === undefined) return;
    const originalTitle = document.title;
    document.title = `(${page}) ${slideTitle}`;
    return () => {
      document.title = originalTitle;
    };
  }, [slideTitle, page]);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') onChangePage({ type: 'diff', diff: 1 });
      else if (event.key === 'ArrowLeft')
        onChangePage({ type: 'diff', diff: -1 });
    };

    const event = 'keyup';

    window.addEventListener(event, handler);
    return () => {
      window.removeEventListener(event, handler);
    };
  }, [page, onChangePage]);

  if (slide === undefined) return null;

  return (
    <div className="flex h-full flex-col gap-4">
      <Card key={page} className="flex flex-1 flex-col overflow-y-scroll">
        <CardHeader>
          <CardTitle>{slide.title}</CardTitle>
        </CardHeader>

        <Separator />

        <CardContent className="flex flex-1 items-center justify-center py-8">
          {slide.content}
        </CardContent>
      </Card>
      <Pagination>
        <PaginationContent>
          {Array.from({ length: slides.length }, (_, i) => {
            const itemPage = i + 1;
            return (
              <PaginationItem
                key={itemPage}
                onClick={() => {
                  onChangePage({ type: 'page', page: itemPage });
                }}
              >
                <PaginationLink
                  isActive={itemPage === page}
                  className="cursor-pointer"
                >
                  {itemPage}
                </PaginationLink>
              </PaginationItem>
            );
          })}
        </PaginationContent>
      </Pagination>
    </div>
  );
};

const usePage = ({
  maxPage: maxPage,
  minPage: minPage,
}: {
  maxPage: number;
  minPage: number;
}) => {
  const key = 'page';
  const [searchParams, setSearchParams] = useSearchParams();

  const getPageFromSearchParams = useCallback(
    (sp: URLSearchParams) => {
      const pageParams = sp.get(key);

      const calculatedPage =
        pageParams !== null && `${parseInt(pageParams)}` === pageParams
          ? parseInt(pageParams)
          : 1;

      if (calculatedPage < minPage) return minPage;
      if (calculatedPage > maxPage) return maxPage;
      return calculatedPage;
    },
    [maxPage, minPage],
  );

  const onChangePage = useCallback(
    (args: { type: 'page'; page: number } | { type: 'diff'; diff: 1 | -1 }) => {
      switch (args.type) {
        case 'page': {
          const newPage = args.page;
          if (newPage < minPage || newPage > maxPage) return;
          const newSearchParams = new URLSearchParams(searchParams);
          newSearchParams.set(key, newPage.toString());
          setSearchParams(newSearchParams, { replace: true });
          break;
        }
        case 'diff': {
          setSearchParams(
            (prev) => {
              const page = getPageFromSearchParams(prev);
              const newPage = page + args.diff;
              if (newPage < minPage || newPage > maxPage) return prev;
              const newSearchParams = new URLSearchParams(prev);
              newSearchParams.set(key, newPage.toString());
              return newSearchParams;
            },
            { replace: true },
          );
        }
      }
    },
    [searchParams, setSearchParams, maxPage, minPage, getPageFromSearchParams],
  );

  return { page: getPageFromSearchParams(searchParams), onChangePage };
};
