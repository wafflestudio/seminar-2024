import { getAssignmentItem } from '@/assignments';
import { ExternalLink } from '@/components/ExternalLink';
import { InlineCode } from '@/components/InlineCode';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/designsystem/ui/card';

export const tutorialAssignment = getAssignmentItem({
  title: '튜토리얼',
  due: new Date('2021-09-11 23:59:59'),
  element: (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <Card>
        <CardHeader>
          <CardTitle>JS 튜토리얼</CardTitle>
        </CardHeader>
        <CardContent className="leading-10">
          벨로퍼트와 함께 하는 모던 자바스크립트 <InlineCode code="1.1~2.7" />{' '}
          까지 튜토리얼 진행하면서 개념 정리하고, 정리한 내용 마크다운 형태로
          #frontend-잡담 채널에 업로드
        </CardContent>
        <CardFooter>
          <ExternalLink href="https://learnjs.vlpt.us/" />
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>React 튜토리얼</CardTitle>
        </CardHeader>
        <CardContent className="leading-10">
          벨로퍼트와 함께 하는 모던 리액트 <InlineCode code="1.3~1.16" /> 까지
          튜토리얼 진행하면서 개념 정리하고, 정리한 내용 마크다운 형태로
          #frontend-잡담 채널에 업로드
        </CardContent>
        <CardFooter>
          <ExternalLink href="https://react.vlpt.us/" />
        </CardFooter>
      </Card>

      <ExternalLink
        href="https://wafflestudio2-dqe6104.slack.com/archives/C07J7K23QUB/p1725371897132499"
        label="제출 예시 보기"
      />

      <b className="text-base text-slate-500">
        조금 옛날 자료라 틀린 내용도 좀 있으니 참고해주세요
      </b>
      <b className="text-base text-slate-500">
        만약 이미 JS / 리액트를 할 줄 알아서 튜토리얼이 의미없게 느껴진다면 DM
        주시면 확인 후 각각 스킵 가능합니다
      </b>
    </div>
  ),
});
