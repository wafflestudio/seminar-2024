import { getAssignmentItem } from '@/assignments';
import { ExternalLink } from '@/components/ExternalLink';
import { InlineCode } from '@/components/InlineCode';

export const makeGame1Assignment = getAssignmentItem({
  title: '게임 만들기 (1)',
  schedule: [new Date('2024-09-25'), new Date('2024-10-09')],
  element: (
    <div>
      <h1>게임 만들기</h1>
      <ul>
        <li>
          지뢰찾기, 2048, 네모로직 중 하나를 선택해서 구현한다 (예시:{' '}
          <ExternalLink href="https://play2048.co/" label="2048" />
        </li>
        <li>
          개인 레포에서 <InlineCode code="yarn create vite" /> 로 새 프로젝트를
          만들고, 개인 레포에 푸시한다
        </li>
      </ul>
    </div>
  ),
});
