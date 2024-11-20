import { Callout } from '@/components/Callout';
import { CodeSnippet } from '@/components/CodeSnippet';
import { ExternalLink } from '@/components/ExternalLink';
import { InlineCode } from '@/components/InlineCode';
import { Slides } from '@/components/Slides';
import { Separator } from '@/designsystem/ui/separator';
import { getLectureItem } from '@/lectures';

export const testingLecture = getLectureItem({
  title: '테스팅',
  description: 'TDD, BDD, unit, e2e, frontend',
  date: new Date('2024-11-20 20:30:00'),
  element: (
    <Slides
      slides={[
        {
          title: '미리 보는 결론',
          content: (
            <ul className="flex list-disc flex-col gap-4">
              <li>소프트웨어에서 테스트코드는 매우 중요하다</li>
              <li>테스트코드를 통해 안정성을 높일 수 있다</li>
              <li>테스트코드를 통해 개발 프로세스를 개선할 수 있다</li>
              <li>테스트코드를 통해 코드의 품질을 높일 수 있다</li>
              <li>
                프론트엔드에서 테스트는 크게 단위테스트 (jest, vitest 등)와
                통합테스트 (cypress, playwright 등)가 있다
              </li>
              <li>그럼에도 프론트엔드에서 테스팅은 아직 애매한 점들이 있다</li>
            </ul>
          ),
        },
        {
          title: '2048때 짰던 복잡한 로직들을 생각해봅시다',
          content: (
            <div className="flex flex-col gap-4">
              <CodeSnippet
                code={[
                  `// src/rules/2048.ts`,
                  `const move2048RowLeft = (row: number[]):  number[] => {`,
                  `  // ...복잡한 코드`,
                  `  // for문 while문도 있고`,
                  `  // if문도 많고`,
                  `  // ...`,
                  `}`,
                ]}
                language="typescript"
              />
              <p>
                복잡하고 케이스도 다양해서, 매번 값을 넣어보면서 의도대로 잘
                동작하는지 확인하기 어렵다
              </p>
              <p>프로그램이 잘 동작하는지 자동으로 확인할 수 있다면?</p>
              <Callout title="일단, 수학적인 증명은 불가능합니다" />
            </div>
          ),
        },
        {
          title: '2048때 짰던 복잡한 로직들을 생각해봅시다',
          content: (
            <div className="flex flex-col gap-4">
              <p>
                테스트 세팅을 해 두면, 아래와 같은 코드를 짜고 터미널에서{' '}
                <InlineCode code="yarn test" /> 같은 명령어를 입력하면 자동으로
                테스트가 돌아간다
              </p>
              <p>자바스크립트 생태계에서 테스트코드는 보통 이렇게 생겼습니다</p>
              <CodeSnippet
                code={[
                  `// src/rules/2048.test.ts`,
                  `import { move2048RowLeft } from './2048';`,
                  ``,
                  `describe('move2048RowLeft', () => {`,
                  `  it('합칠 게 있다면 합쳐진다', () => {`,
                  `    expect(move2048RowLeft([2, 0, 2, 0])).toStrictEqual([4, 0, 0, 0]);`,
                  `    expect(move2048RowLeft([2, 2, 2, 2])).toStrictEqual([4, 4, 0, 0]);`,
                  `    expect(move2048RowLeft([4, 4, 4, 4])).toStrictEqual([8, 8, 0, 0]);`,
                  `  });`,
                  ``,
                  `  it('이동할 게 있다면 이동한다', () => {`,
                  `    expect(move2048RowLeft([2, 0, 4, 0])).toStrictEqual([2, 4, 0, 0]);`,
                  `  });`,
                  ``,
                  `  it('이동할 게 없다면 이동하지 않는다', () => {`,
                  `    expect(move2048RowLeft([2, 4, 2, 0])).toStrictEqual([2, 4, 2, 0]);`,
                  `  });`,
                  `});`,
                ]}
                language="typescript"
              />
              <p>
                이 세미나자료에도 테스트가 소소하게 붙어있는데, 테스트 돌아가는
                거 라이브로 한번 보겠습니다
              </p>
            </div>
          ),
        },
        {
          title: '테스트를 짜면 생기는 장단점들',
          content: (
            <div className="flex gap-20">
              <div className="flex flex-col gap-6">
                <h2>장점</h2>
                <ul className="list-disc">
                  <li>코드의 안정성이 높아진다</li>
                  <li>
                    테스트코드는 모듈의 역할을 가장 잘 표현하는 가장 좋은 문서가
                    될 수 있다
                  </li>
                  <li>
                    테스트를 짜기 위해 어쩔 수 없이 코드 퀄리티가 높아진다
                  </li>
                </ul>
              </div>
              <Separator orientation="vertical" />
              <div className="flex flex-col gap-6">
                <h2>단점</h2>
                <ul className="list-disc">
                  <li>테스트 유지보수도 유지보수 비용이다</li>
                </ul>
              </div>
            </div>
          ),
        },
        {
          title: '테스트를 짜면 생기는 장단점들 (1) 코드의 안정성이 높아진다',
          content: (
            <div className="flex flex-col gap-8">
              테스트코드가 있으면 리팩토링을 조금 더 마음 편하게 할 수 있습니다
              <br />
              잘못 리팩해서 버그가 생긴다면 테스트가 깨질 가능성이 높으니까요
              <br />
              <br />
              하지만 만능은 아닙니다.
              <br />
              테스트코드가 모든 케이스를 커버하는 건 불가능하고,
              <br />
              테스트코드도 코드이므로 얘도 버그가 있을 수 있습니다
              <CodeSnippet
                code={[
                  `// src/rules/2048.test.ts`,
                  `import { move2048RowLeft } from './2048';`,
                  ``,
                  `describe('move2048RowLeft', () => {`,
                  `  it('합칠 게 있다면 합쳐진다', () => {`,
                  `    expect(move2048RowLeft([2, 0, 2, 0])).toStrictEqual([4, 0, 0, 0]);`,
                  `    expect(move2048RowLeft([2, 2, 2, 2])).toStrictEqual([4, 4, 0, 0]);`,
                  `    expect(move2048RowLeft([4, 4, 4, 4])).toStrictEqual([8, 8, 0, 0]);`,
                  `  });`,
                  `});`,
                ]}
                language="typescript"
              />
            </div>
          ),
        },
        {
          title:
            '테스트를 짜면 생기는 장단점들 (2) 테스트코드는 모듈의 역할을 가장 잘 표현하는 가장 좋은 문서가 될 수 있다',
          content: (
            <div>
              앞에서 본 <InlineCode code="move2048RowLeft" /> 함수를 보면,
              <br />
              이름을 열심히 짓긴 했지만 이 함수가 하는 일이 아주 명확하게 한눈에
              표현된다고 보기는 어렵습니다.
              <br />
              <br />
              <Separator />
              <br />
              아래와 같이 주석을 달아서 명확하게 표현해줄 수는 있지만, 많은 경우
              주석은 믿을 만한 코드가 아닙니다. (outdated 될 수 있음)
              <CodeSnippet
                code={[
                  `/**`,
                  ` * 2048 게임의 한 줄을 왼쪽으로 이동시키는 함수`,
                  ` * @param row 2048 게임의 한 줄`,
                  ` * @returns 이동된 한 줄`,
                  ` */`,
                  `const move2048RowLeft = (row: number[]):  number[] => {`,
                ]}
                language="typescript"
              />
              <br />
              <Separator />
              <br />
              하지만 테스트코드는 함수가 하는 일을 주석보다 더 명확하게
              알려주면서도 믿을 만한 코드입니다.
              <br />
              틀렸으면 테스트가 깨지고 있을 거니까요!
              <CodeSnippet
                code={[
                  `// src/rules/2048.test.ts`,
                  `import { move2048RowLeft } from './2048';`,
                  ``,
                  `describe('move2048RowLeft', () => {`,
                  `  it('합칠 게 있다면 합쳐진다', () => {`,
                  `    expect(move2048RowLeft([2, 0, 2, 0])).toStrictEqual([4, 0, 0, 0]);`,
                  `    expect(move2048RowLeft([2, 2, 2, 2])).toStrictEqual([4, 4, 0, 0]);`,
                  `    expect(move2048RowLeft([4, 4, 4, 4])).toStrictEqual([8, 8, 0, 0]);`,
                  `  });`,
                  `});`,
                ]}
                language="typescript"
              />
            </div>
          ),
        },
        {
          title:
            '테스트를 짜면 생기는 장단점들 (3) 테스트를 짜기 위해 어쩔 수 없이 코드 퀄리티가 높아진다',
          content: (
            <div>
              <p>
                사실 개발을 하나 보면 내가 만드는 함수가 무슨 역할을 맡게 될지,
                내가 무슨 코드를 짜고 있는 건지 모르는 경우가 많습니다
              </p>
              <CodeSnippet
                code={[
                  `// 여기까지 짰을 때, move2048RowLeft 함수가 무슨 역할을 하는지 머리속에서 정확하게 생각하고 있었을까요?`,
                  `const move2048RowLeft = (`,
                ]}
                language="typescript"
              />
              <p>
                테스트를 짜려면 input 과 output 을 명확하게 정의해야 하기에,
                그러려면 함수의 역할이 명확해집니다.
              </p>
              <p>
                테스트를 짜기 위해 머리속에서 어쩔 수 없이 함수의 역할을
                진지하게 고민해보게 됩니다
              </p>
              <strong>그러면 모듈의 역할이 명확해집니다</strong>
              <br />
              <br />
              <Separator />
              <br />
              <p>
                또한 테스트를 짜다 보면 어쩔 수 없이 결합도가 낮아지는데, 이게
                무슨 말이냐면
              </p>
              <p>가령 아래와 같은 코드를 짰다고 생각해 봅시다</p>
              <CodeSnippet
                code={[
                  `const App = () => {`,
                  `  const [gameBoard, setGameBoard] = useState<number[][]>(getInitialGameBoard());`,
                  `  const onKeyPress = (arrowDirection: 'up' | 'down' | 'left' | 'right') => {`,
                  `    // board를 조작하는 복잡한 로직`,
                  `    setGameBoard(gameBoard);`,
                  `    // 후처리 로직도 막 섞여있음`,
                  `  }`,
                ]}
                language="typescript"
              />
              <p>onKeyPress 함수는 App 안에 있으므로 테스트할 수 없습니다.</p>
              <CodeSnippet
                code={[
                  `export const getMovedGameBoard = (board: number[][], arrowDirection: 'up' | 'down' | 'left' | 'right') => {`,
                  `  // 복잡한 로직`,
                  `}`,
                  ``,
                  `const App = () => {`,
                  `  const [gameBoard, setGameBoard] = useState<number[][]>(getInitialGameBoard());`,
                  `  const onKeyPress = (arrowDirection: 'up' | 'down' | 'left' | 'right') => {`,
                  `    setGameBoard(getMovedGameBoard(arrowDirection));`,
                  `    // 후처리 로직도 막 섞여있음`,
                  `  }`,
                ]}
                language="typescript"
              />
              <p>
                테스트를 짜려면 어쩔 수 없이 이렇게 getMovedGameBoard 함수를
                분리해야 하고
              </p>
              <p>분리하고 보니 결합도가 낮아져서 좋은 코드가 됩니다</p>
              <p>
                기본적으로 테스트는 테스트를 위한 주변 환경을 갖춰줘야 하기
                때문에, 이걸 하다 보면 모듈간 결합도가 낮아질 수밖에 없습니다
              </p>
            </div>
          ),
        },
        {
          title: '테스트를 짜면 생기는 장단점들 (4) 테스트 유지보수도 비용이다',
          content: (
            <div>
              <p>기획 변경으로 코드를 바꿨다면 테스트도 맞춰서 바꿔야 한다</p>
              <p>
                이때 테스트를 바꾸는 데에 시간이 생각보다 많이 들어가긴 합니다
              </p>
              <p>테스트도 코드이므로, 잘 짜서 유지보수 비용을 낮춰야 합니다</p>
            </div>
          ),
        },
        {
          title:
            '프론트엔드에서의 또 다른 테스트 방법: 브라우저를 돌리는 테스트',
          content: (
            <div className="flex flex-col gap-8">
              <p>지금까지 알아본 건 자바스크립트 함수만 테스트할 수 있습니다</p>
              <p>
                프론트엔드가 만드는건 웹 어플리케이션인데, 이건 어떻게
                테스트하지?
              </p>
              <p>가령 버튼을 클릭하면 모달이 뜬다 를 테스트하려면,</p>
              <p>
                브라우저를 띄우고, 버튼을 찾아서 클릭하고, 모달 요소를 찾는
                것까지 자동화할 수 있지 않을까?
              </p>
              <ExternalLink
                href="https://github.com/wafflestudio/snutt-frontend/pull/192"
                label="라이브로 보겠습니다"
              />
              <ExternalLink
                href="https://github.com/wafflestudio/snutt-frontend/blob/77e4c1c84b6937e6e38ec63f7955927f15101e51/apps/snutt-webclient/e2e/mypage/change-password.spec.ts#L1"
                label="이때의 테스트코드"
              />
              <p>
                작년 세미나에서는 이것도 다뤘었는데, 이번에는 그냥 이런 게 있다~
                정도만 알고 넘어갑시다
              </p>
            </div>
          ),
        },
        {
          title: '그래서 프론트엔드에는 크게 두 가지 테스트가 있습니다',
          content: (
            <div>
              <p>길게 알아봤던, 함수를 테스트하는 단위 테스트</p>
              <p>방금 라이브로 본 브라우저를 띄우는 통합테스트</p>
            </div>
          ),
        },
        {
          title: '프론트엔드의 테스트 문화',
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Input이 너무 많고, Output도 너무 많고, 그에 비해 로직은 적다
              </p>
              <p>
                로직이 복잡하고 input/output이 간단해야 테스트를 짜는 효과가
                확실한데, 프론트 (클라이언트도 마찬가지) 는 보통 반대입니다
              </p>
              <p>
                그런 면에서 2048은 다소 예외적으로 프론트 로직이 복잡하고
                input/output 은 간단해서 테스트를 짜기 쉬운 케이스
              </p>
              <p>
                그래서 현재 프론트엔드에서 테스트는 <i>하면 좋긴 한데...</i>의
                온도감입니다.
              </p>
            </div>
          ),
        },
      ]}
    />
  ),
});
