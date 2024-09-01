import { getAssignmentItem } from '@/assignments';
import { ExternalLink } from '@/components/ExternalLink';
import { InlineCode } from '@/components/InlineCode';

export const reactTutorialAssignment = getAssignmentItem({
  title: '리액트 튜토리얼',
  schedule: [new Date('2021-09-04'), new Date('2021-09-25')],
  element: (
    <div className="flex h-full flex-col items-center justify-center gap-12">
      <h2 className="text-center">
        벨로퍼트와 함께 하는 모던 리액트 <InlineCode code="1.3~1.16" /> 까지
        튜토리얼 진행하면서 개념 정리하고, 정리한 내용 마크다운 형태로
        #frontend-잡담 채널에 업로드
      </h2>
      <ExternalLink href="https://react.vlpt.us/" />
      <b className="text-base text-slate-500">
        이것도 이제 조금 옛날 자료라 틀린 내용도 좀 있으니 참고해주세요
      </b>
      <b className="text-base text-slate-500">
        만약 이미 리액트를 할 줄 알아서 튜토리얼이 의미없게 느껴진다면 DM 주시면
        확인 후 스킵 가능합니다
      </b>
    </div>
  ),
});
