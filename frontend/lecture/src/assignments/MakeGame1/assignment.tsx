import { getAssignmentItem } from '@/assignments';
import { InlineCode } from '@/components/InlineCode';

export const makeGame1Assignment = getAssignmentItem({
  title: '2048 클론코딩',
  due: new Date('2024-09-24 23:59:59'),
  element: (
    <div>
      <h1>게임 만들기</h1>
      <ul>
        <li>2048을 클론코딩합니다.</li>
        <li>
          개인 레포에서 <InlineCode code="yarn create vite" /> 로 새 프로젝트를
          만들고, 개인 레포에 푸시한다
        </li>
      </ul>
    </div>
  ),
});
