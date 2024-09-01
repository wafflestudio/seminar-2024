import { CodeSnippet } from '@/components/CodeSnippet';
import { AssetDescriptionLayout } from '@/components/SlideLayout';
import { Slides } from '@/components/Slides';
import { getLectureItem } from '@/lectures';

export const reactLecture = getLectureItem({
  title: '리액트',
  description: 'JSX, state, props, hooks, context, 합성',
  date: new Date('2024-09-11'),
  element: (
    <Slides
      slides={[
        {
          title: 'React란?',
          content: (
            <AssetDescriptionLayout
              description={[
                'UI 작업을 더 쉽게 도와주는 라이브러리',
                '상태를 기반으로 한 선언적인 코드',
              ]}
              asset={
                <>
                  <h2>리액트 없이</h2>
                  <CodeSnippet
                    language="javascript"
                    code={[
                      `// React 없이`,
                      `document`,
                      `  .getElementById('button')`,
                      `  .addEventListener(() => {`,
                      `    const countElement = document.getElementById('count');`,
                      `    const currentCount = parseInt(countElement.innerText, 10);`,
                      `    countElement.innerText = (currentCount + 1).toString();`,
                      `  });`,
                    ]}
                  />
                  <CodeSnippet
                    language="html"
                    code={[
                      `<div>`,
                      `  <button id="button">Increase</button>`,
                      `  <div id="count">0</div>`,
                      `</div>`,
                    ]}
                  />
                  <h2>리액트로</h2>
                  <CodeSnippet
                    language="tsx"
                    code={[
                      `const [count, setCount] = useState(0);`,
                      ``,
                      `return (`,
                      `  <div>`,
                      `    <button onClick={() => setCount(count + 1)}>Increase</button>`,
                      `    <div>{count}</div>`,
                      `  </div>`,
                      `);`,
                    ]}
                  />
                </>
              }
            />
          ),
        },
      ]}
    />
  ),
});
