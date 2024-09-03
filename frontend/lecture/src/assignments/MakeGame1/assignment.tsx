import { getAssignmentItem } from '@/assignments';

export const makeGame1Assignment = getAssignmentItem({
  title: '2048 클론코딩 (1)',
  due: new Date('2024-09-24 23:59:59'),
  element: (
    <div>
      <h1>게임 만들기</h1>
      <ul>
        <li>2048을 클론코딩합니다.</li>
      </ul>
    </div>
  ),
});
