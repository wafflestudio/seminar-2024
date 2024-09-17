import { ExternalLink } from '@/components/ExternalLink';
import { InlineCode } from '@/components/InlineCode';
import { Slides } from '@/components/Slides';
import { StackBadge } from '@/components/StackBadge';
import { getLectureItem } from '@/lectures';

import nextJsUsage from './NextJS-usage.png';

export const ecosystemLecture = getLectureItem({
  title: '프론트엔드 생태계',
  description: '기술 동향 파악하기, 생태계에 참여하기',
  date: new Date('2024-11-20 20:30:00'),
  element: (
    <Slides
      slides={[
        {
          title: '목표',
          content: (
            <div className="flex flex-col gap-4">
              <p>코드에서 한발짝 벗어난 이야기들</p>
              <p>프론트엔드 생태계에 대해 이해한다</p>
              <p>
                생태계가 나아가는 방향을 파악하고, 앞으로 어떤 공부를 어떻게
                할지 생각해볼 수 있게 된다
              </p>
            </div>
          ),
        },
        {
          title: 'React 의 방향성',
          content: (
            <div className="flex flex-col gap-4">
              <p>
                리액트는 최근에 서버 컴포넌트를 상용화시켰고, 이제{' '}
                <InlineCode code="React Compiler" />
                라는 걸 준비하는 중
              </p>
              <p>
                개인적으로는 별로 중요한지 모르겠는데.. 뭔가 프레임워크로서
                특이점에 다다랐다는 느낌
              </p>
              <p>
                직접 운영하던 <StackBadge stack="Create React App" />을 버리고
                프레임워크를 권장하기 시작했음
              </p>
              <ExternalLink
                label="같이 읽어볼 만 한 글"
                href="https://junghan92.medium.com/%EB%B2%88%EC%97%AD-create-react-app-%EA%B6%8C%EC%9E%A5%EC%9D%84-vite%EB%A1%9C-%EB%8C%80%EC%B2%B4-pr-%EB%8C%80%ED%95%9C-dan-abramov%EC%9D%98-%EB%8B%B5%EB%B3%80-3050b5678ac8"
              />
            </div>
          ),
        },
        {
          title: '프레임워크: Next.js',
          content: (
            <div className="flex flex-col gap-4">
              <p>
                <StackBadge stack="Next.js" /> 는 현재 프론트엔드 트렌드를
                이끌어가는 프레임워크
              </p>
              <img src={nextJsUsage} alt="Next.js 사용 현황" />
              <p>
                react 공식문서에서도 <StackBadge stack="Next.js" /> 를 권장하는
                만큼, 앞으로 공부하다 보면 언젠가 분명히 만나게 될 기술
              </p>
              <p>
                <StackBadge stack="Vercel" /> 은 프론트엔드 생태계에 하나의
                왕국을 건설하고 있다 (<StackBadge stack="Next.js" />,{' '}
                <StackBadge stack="Vercel" />, <StackBadge stack="SWR" />,{' '}
                <StackBadge stack="Turbopack" />,{' '}
                <StackBadge stack="Turborepo" />)
              </p>
            </div>
          ),
        },
        {
          title: 'AI (1) copilot',
          content: (
            <div className="flex flex-col gap-4">
              <p>
                <StackBadge stack="GitHub Copilot" /> 은 코딩을 도와주는
                자동완성 도구
              </p>
              <p>재작년쯤부터는 거의 무조건 써야 하는 필수 도구 수준</p>
              <p>코파일럿이 얼마나 잘해주는지 같이 봅시다</p>
            </div>
          ),
        },
        {
          title: 'AI (2) cursor 등 AI 통합 IDE',
          content: (
            <div className="flex flex-col gap-4">
              <p>
                AI 통합 IDE로, IDE에게{' '}
                <i>기존 코드 이거 이거 참고해서 이렇게 해줘</i> 라고 하면 다 해
                준다
              </p>
              <p>얘도 같이 봅시다</p>
            </div>
          ),
        },
        {
          title: 'AI (3) v0',
          content: (
            <div className="flex flex-col gap-4">
              <p>
                <StackBadge stack="v0" /> 는 ui를 만들어주는 AI
              </p>
              <p>얘도 지금 같이 써볼까요?</p>
              <ExternalLink href="https://v0.dev/chat" />
            </div>
          ),
        },
      ]}
    />
  ),
});
