import { useReducer } from "react";

import { Button } from "@/designsystem/ui/button";
import { cn } from "@/utils/designsystem";

export const ExampleIframe = ({
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
