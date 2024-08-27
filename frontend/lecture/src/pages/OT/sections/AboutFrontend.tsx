import { useReducer } from 'react';

import { Description } from '@/components/Description';
import { Button } from '@/designsystem/ui/button';
import { cn } from '@/utils/designsystem';

export const WhatIsFrontend = () => {
  return (
    <div className="flex justify-center">
      <Description
        items={[
          { key: '넓은 의미', value: '사용자와 상호작용하는 부분' },
          { key: '좁은 의미', value: '웹 어플리케이션 개발' },
        ]}
      />
    </div>
  );
};

export const Websites = () => (
  <div>
    <h3 className="text-center text-2xl">우리가 쓰는 웹사이트들</h3>
    <div className="mt-6 grid grid-cols-2 gap-20">
      <ExampleIframe title="무신사" src={'https://musinsa.com'} />
      <ExampleIframe title="와플스튜디오" src={'https://wafflestudio.com'} />
      <ExampleIframe
        title="카카오맵"
        src={'https://map.kakao.com'}
        className="col-span-2"
      />
    </div>
  </div>
);

export const Webviews = () => (
  <div>
    <p className="text-center text-2xl">
      웹뿐만 아니라 앱에도: 토스에 있는 대부분의 화면은 웹으로 되어 있다
    </p>
    <img src="https://pbs.twimg.com/media/FNxV63yUYAAs1MQ?format=jpg&name=medium" />
  </div>
);

const ExampleIframe = ({
  title,
  src,
  className,
}: {
  title: string;
  src: string;
  className?: string;
}) => {
  const [isShow, toggleShow] = useReducer((s: boolean) => !s, false);
  return (
    <div className={cn('flex w-full flex-col gap-4', className)}>
      <Button className="w-full" variant="secondary" onClick={toggleShow}>
        {title}
      </Button>
      {isShow && <iframe className="h-[600px]" src={src} />}
    </div>
  );
};
