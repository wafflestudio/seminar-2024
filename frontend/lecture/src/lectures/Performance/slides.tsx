import { type FC } from 'react';

import { Callout } from '@/components/Callout';
import { CodeSnippet } from '@/components/CodeSnippet';
import { ExternalLink } from '@/components/ExternalLink';
import { InlineCode } from '@/components/InlineCode';
import { Slides } from '@/components/Slides';
import { StackBadge } from '@/components/StackBadge';
import { Separator } from '@/designsystem/ui/separator';
import { Skeleton } from '@/designsystem/ui/skeleton';

import bundle from './bundle.png';
import csr from './csr.png';
import exitrate from './exitrate.png';
import lighthouse from './lighthouse.png';
import ssr from './ssr.png';

export const PerformanceSlides: FC = () => {
  return (
    <Slides
      slides={[
        {
          title: '이번 챕터 목표',
          content: (
            <div>
              <ul className="flex list-disc flex-col gap-4 pl-8">
                <li>프론트엔드에서 무슨 성능을 개선해야 하는지 이해한다</li>
                <li>lighthouse 사용법을 익힌다</li>
                <li>우리가 쓰는 CSR 방식이 왜 로딩 성능이 나쁜지 이해한다</li>
                <li>SSR이란 게 있더라~ 정도를 인지한다</li>
                <li>Next.js 라는 메타프레임워크의 존재를 인지한다</li>
              </ul>
            </div>
          ),
        },
        {
          title: '성능?',
          content: (
            <div>
              <p>보통 성능이라고 하면 떠올리는 것들</p>
              <ul className="mt-6 list-disc pl-8">
                <li>시간</li>
                <li>공간 (메모리)</li>
                <li>로딩 속도</li>
              </ul>
            </div>
          ),
        },
        {
          title: '시간 복잡도와 렌더링 최적화 (1)',
          content: (
            <div className="flex flex-col gap-4 leading-10">
              <p>시간 복잡도를 줄여서 연산 시간을 줄이자!</p>
              <p>하지만 웹은 대부분의 경우 n이 커봐야 1000입니다</p>
              <img src="https://www.azquotes.com/picture-quotes/quote-fancy-algorithms-are-slow-when-n-is-small-and-n-is-usually-small-rob-pike-76-51-33.jpg" />
              <div>
                <InlineCode code="useMemo" />, <InlineCode code="memo" /> 등
                메모이제이션 기법도 있고 합성을 활용한 렌더링 최적화 기법도
                있는데, 솔직히 4년동안 웹 하면서 최적화가 필요했던 적 딱 한 번
                밖에 없었습니다.
              </div>
              <div>
                리액트는 대부분의 경우 충분한 성능이 나오게 설계되었기에,
                평범하게 짜면 충분히 빠릅니다.
              </div>
              <div>
                어차피 브라우저가 60fps라서 엄청 빨라봤자 유저는 모릅니다.
              </div>
            </div>
          ),
        },
        {
          title: '시간 복잡도와 렌더링 최적화 (2)',
          content: (
            <div className="flex flex-col gap-4 leading-10">
              <p>
                관련해서 &quot;불필요한 리렌더를 줄여야 한다&quot; 와 같은
                주장도 있는데, 딱히 공감하진 않습니다
              </p>
              <p>
                평범하게 정상적으로 짜면 적당한 리렌더가 발생하고 유저는
                불편함을 느끼지 못합니다.
              </p>
              <p>
                불필요한 리렌더를 막으려다 필요한 리렌더를 못하거나, 코드
                유지보수가 어려워지면 그게 진짜 문제입니다
              </p>
              <Callout title="결론">웬만하면 이거 신경쓸 필요 없다!</Callout>
            </div>
          ),
        },
        {
          title: '메모리',
          content: (
            <div className="flex flex-col gap-4 leading-10">
              <p>자바스크립트는 GC가 동작하는 언어</p>
              <p>웹에서 다루는 메모리가 그리 크지 않음</p>
              <p>따라서 메모리 누수가 일어나지 않는 한 별 문제 없음</p>
              <Callout title="메모리 누수란?">
                더 이상 필요하지 않은 메모리를 해제하지 않아서 메모리 사용량이
                계속 증가하는 현상
              </Callout>
              <Separator className="my-5" />
              <CodeSnippet
                language="typescript"
                code={[
                  `// 메모리 누수가 발생할 수 있는 코드`,
                  `const object = URL.createObjectURL(...)`,
                ]}
              />
              <p>
                간혹 이런 코드를 짜야 할 때가 있는데, 얘만 free 잘 해 주면
                됩니다
              </p>
              <Callout title="결론">웬만하면 이거도 신경쓸 필요 없다!</Callout>
            </div>
          ),
        },
        {
          title: '로딩 속도',
          content: (
            <div className="flex flex-col gap-4 leading-10">
              <p>그런데 로딩 속도는 문제가 됩니다</p>
              <p>
                따라서 웹 개발자들은 성능을 개선할 때 로딩 속도를 최적화하는
                데에 많은 노력을 쏟아야 합니다
              </p>
            </div>
          ),
        },
        {
          title: '왜 로딩 속도는 문제가 될까?',
          content: (
            <div>
              <p>
                웹의 특성상 검색해서 들어오는 경우가 많은데, 로딩 속도가
                느릴수록 이탈률이 높아진다
              </p>
              <img className="mx-auto mt-5 w-96" src={exitrate} />
              <Separator className="my-12" />
              <p>
                웹뷰 앱의 경우 최대한 네이티브의 느낌을 줘야 하기 때문에 전환이
                부드럽고 빨라야 한다
              </p>
            </div>
          ),
        },
        {
          title: '로딩 속도 - lighthouse 점수',
          content: (
            <div className="flex flex-col gap-4 leading-10">
              <p>
                로딩 속도뿐 아니라 웹 페이지의 품질을 통합적으로 체크해볼 수
                있는 지표
              </p>
              <img src={lighthouse} />
              <p>라이브로 한번 봅시다</p>
            </div>
          ),
        },
        {
          title: '로딩 속도 - lighthouse 실습',
          content: (
            <div className="flex flex-col gap-4 leading-10">
              <p>
                각 조별로, SNUTT 프로젝트의 lighthouse 점수를 확인하고 캡쳐해서
                조별 채널에 올려주세요 (제한시간 2분)
              </p>
            </div>
          ),
        },
        {
          title: '로딩 속도 개선 (1) 자바스크립트 번들 사이즈',
          content: (
            <div className="flex flex-col gap-5">
              <img src={bundle} />
              <section>
                <h3>1. Code Splitting & Lazy Loading</h3>
                <p className="pl-10">
                  가령 오늘 슬라이드에는 코드 스플리팅이 적용되어 있습니다
                </p>
                <p className="pl-10">개발자 도구에서 바로 확인해봅시다</p>
              </section>
              <section>
                <h3>2. 라이브러리 사용할 때 조심하기</h3>
                <p className="pl-10">
                  1번에 이어서, 아무리 조심해도 라이브러리 하나 깔면 +300KB 이런
                  경우 많습니다
                </p>
                <p className="pl-10">
                  지금까지 본 가장 심한 라이브러리:{' '}
                  <ExternalLink
                    href="https://www.npmjs.com/package/xlsx"
                    label="xlsx"
                  />
                </p>
              </section>
              <section>
                <h3>3. Tree Shaking</h3>
                <p className="pl-10">
                  사용하지 않는 코드를 번들에 포함하지 않기
                </p>
                <p className="pl-10">요즘 번들러들은 다 잘 해 줍니다</p>
              </section>
              <section>
                <h3>4. Minification</h3>
                <p className="pl-10">
                  코드량 자체를 줄이기 (변수명을 한 글자로 줄이는 등)
                </p>
                <p className="pl-10">
                  당연히 번들러가 빌드할 때 자동으로 해 주는 거지
                </p>
                <p className="pl-10">우리가 코드를 못 알아보게 짜면 안됩니다</p>
              </section>
              <section>
                <h3>5. Compression</h3>
                <div className="pl-10">
                  gzip 등으로 코드를 압축해서 번들 크기 줄이기{' '}
                  <ExternalLink href="https://web.dev/articles/codelab-text-compression?hl=ko" />
                </div>
              </section>
            </div>
          ),
        },
        {
          title: '로딩 속도 개선 (2) 이미지 최적화',
          content: (
            <div className="flex flex-col gap-5">
              <p>
                번들 크다고 뭐라 했지만, 많은 이미지는 기본적으로 수백KB 이상
              </p>
              <ExternalLink
                href="https://web.dev/learn/performance/image-performance?hl=ko"
                label="web.dev 문서"
              />
              <ul className="mt-20 flex list-disc flex-col gap-8 pl-12">
                <li>
                  이미지 용량을 줄이고 CDN을 태워서 응답 속도 높이기 (webp 혹은
                  avif 권장, <InlineCode code="picture" /> 태그 참고)
                </li>
                <li>
                  <InlineCode code="srcset" /> 이나 <InlineCode code="sizes" />{' '}
                  속성을 활용하여 뷰포트에 따라 다른 이미지 제공하기
                </li>
                <li>
                  <StackBadge stack="Next.js" />를 쓴다면{' '}
                  <InlineCode code="next/image" /> 사용하기
                </li>
              </ul>
            </div>
          ),
        },
        {
          title: '로딩 속도 개선 (3) 스켈레톤 UI',
          content: (
            <div className="flex flex-col items-center gap-20">
              <article className="flex items-center gap-12 rounded-lg border border-black p-16 shadow-xl">
                <Skeleton className="h-20 w-20 rounded-full" />
                <div className="flex flex-col justify-center gap-4">
                  <div>
                    <h3>이름</h3>
                    <Skeleton className="h-5 w-40" />
                  </div>
                  <div>
                    <h3>나이</h3>
                    <Skeleton className="h-5 w-40" />
                  </div>
                </div>
              </article>
              <div>
                실제로 로딩 속도를 개선해주진 않지만, 사용자 경험을 개선해주는
                역할
              </div>
            </div>
          ),
        },
        {
          title: '로딩 속도 개선: SSR (1) CSR과 SSR 방식에 대한 이해',
          content: (
            <div>
              <Callout title="간략화된 브라우저 동작 원리">
                <ol className="my-4 flex list-decimal flex-col gap-2 pl-6">
                  <li>HTML을 다운로드받고</li>
                  <li>HTML에 의해 JS를 다운로드받고</li>
                  <li>HTML에 의해 CSS를 다운로드받고</li>
                  <li>JS를 실행</li>
                </ol>
              </Callout>

              <Separator className="my-8" />
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p>우리가 사용중인 CSR</p>
                  <img src={csr} className="" />
                </div>
                <div>
                  <p>새로운 개념: SSR</p>
                  <img src={ssr} className="" />
                </div>
              </div>
            </div>
          ),
        },
        {
          title: '로딩 속도 개선: SSR (2) 장점',
          content: (
            <div>
              <div>유저에게 화면이 훨씬 빨리 보인다</div>
              <div>SEO 측면에서도 큰 이점이 있다</div>
            </div>
          ),
        },
        {
          title: '로딩 속도 개선: SSR (3) 어떻게?',
          content: (
            <div className="flex flex-col gap-20">
              <div>
                직접 SSR을 구현하는 건 어렵고, <StackBadge stack="Next.js" />{' '}
                같은 프레임워크들을 쓰면, 프레임워크가 권장하는 방식대로 짜면
                자동으로 해 줍니다
              </div>
              <CodeSnippet
                code={[
                  `// 대충 이런 느낌`,
                  ``,
                  `type Props = { name: string }`,
                  ``,
                  `export default ({ name }: Props) => {`,
                  `  return <div>{name}</div>;`,
                  `};`,
                  ``,
                  `export const getServerSideProps = async () => {`,
                  `  const res = await fetch('https://api.example.com/data');`,
                  `  const data = await res.json();`,
                  `  return { props: { name: data.name } };`,
                  `};`,
                ]}
                language="tsx"
              />
              <div>
                요즘은 또 서버컴포넌트라는 것도 있는데, 너무 자세한 이야기는
                세미나 범위를 너무 많이 벗어나므로 패스
              </div>
            </div>
          ),
        },
        {
          title: '로딩 속도 개선: SSR (4) 만능일까?',
          content: (
            <div>
              <div>
                비용: 서버를 돌려야 하기 때문에 SPA보다 돈이 많이많이 듭니다
              </div>
              <div>
                서버 관리: 서버가 터질 위험이나 보안 위험도 있어서 잘 관리해야
                합니다
              </div>
              <div>
                프레임워크에 결합: 코드베이스가 <StackBadge stack="Next.js" />에
                결합될 확률이 높습니다
              </div>
            </div>
          ),
        },
      ]}
    />
  );
};
