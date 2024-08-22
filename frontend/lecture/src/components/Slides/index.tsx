import { ReactNode } from 'react';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/designsystem/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/designsystem/ui/carousel';
import { Separator } from '@/designsystem/ui/separator';

export const Slides = ({
  slides,
}: {
  slides: { title: string; content: ReactNode }[];
}) => {
  return (
    <Carousel className="mx-24 h-full" opts={{ duration: 15 }}>
      <CarouselContent className="h-full">
        {slides.map((slide, index) => (
          <CarouselItem className="h-full" key={slide.title + index.toString()}>
            <Card className="flex h-full flex-col overflow-y-scroll">
              <CardHeader>
                <CardTitle>{slide.title}</CardTitle>
              </CardHeader>

              <Separator />

              <CardContent className="flex flex-1 items-center justify-center py-8">
                {slide.content}
              </CardContent>

              <Separator />

              <CardFooter className="flex justify-center pb-2 pt-2 text-xs">
                {index + 1}/{slides.length}
              </CardFooter>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
