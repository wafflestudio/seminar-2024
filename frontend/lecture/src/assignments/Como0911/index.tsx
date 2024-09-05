import { getAssignmentItem } from '@/assignments';
import { InlineCode } from '@/components/InlineCode';

export const como0911Assignment = getAssignmentItem({
  title: '세미나 1 코모',
  due: new Date('2024-09-24 23:59:59'),
  element: (
    <h2 className="flex h-full flex-col items-center justify-center gap-8">
      <div>
        조별 DM방에서 날짜 잡고 코모 진행 후{' '}
        <InlineCode code="#frontend-잡담" /> 채널에 인증샷 업로드
      </div>
    </h2>
  ),
});
