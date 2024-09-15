import { useReducer } from 'react';

import { Button } from '@/designsystem/ui/button';

export const Answer = ({ answer }: { answer: string }) => {
  const [isShow, show] = useReducer(() => true, false);

  return (
    <Button onClick={show} variant="outline">
      {isShow ? answer : '정답 보기'}
    </Button>
  );
};
