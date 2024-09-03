import { ReactNode, useCallback, useEffect } from 'react';
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

  useEffect(() => {
    const keydownHandler = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') onChangePage(page + 1);
      else if (event.key === 'ArrowLeft') onChangePage(page - 1);
    };

    window.addEventListener('keydown', keydownHandler);
    return () => {
      window.removeEventListener('keydown', keydownHandler);
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
                  onChangePage(itemPage);
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

  const pageParams = searchParams.get(key);

  const page = (() => {
    const calculatedPage =
      pageParams !== null && `${parseInt(pageParams)}` === pageParams
        ? parseInt(pageParams)
        : 1;

    if (calculatedPage < minPage) return minPage;
    if (calculatedPage > maxPage) return maxPage;
    return calculatedPage;
  })();

  const onChangePage = useCallback(
    (newPage: number) => {
      if (newPage < 1 || newPage > maxPage) return;
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set(key, newPage.toString());
      setSearchParams(newSearchParams, { replace: true });
    },
    [searchParams, setSearchParams, maxPage],
  );

  return { page, onChangePage };
};
