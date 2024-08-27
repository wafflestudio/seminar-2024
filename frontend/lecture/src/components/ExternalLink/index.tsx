import { ExternalLinkIcon } from '@radix-ui/react-icons';

import { Button } from '@/designsystem/ui/button';
import { cn } from '@/utils/designsystem';

export const ExternalLink = ({
  href,
  className,
}: {
  href: string;
  className?: string;
}) => {
  const maxLen = 50;
  const size = 20;
  return (
    <Button asChild>
      <a
        className={cn('flex items-center gap-2 underline', className)}
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {href.length > maxLen ? `${href.slice(0, maxLen)}...` : href}
        <ExternalLinkIcon width={size} height={size} />
      </a>
    </Button>
  );
};
