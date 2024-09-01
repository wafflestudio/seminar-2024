import { ReactNode } from 'react';

import { CodeSnippet } from '@/components/CodeSnippet';
import { ExternalLink } from '@/components/ExternalLink';
import { Slides } from '@/components/Slides';
import { getLectureItem } from '@/lectures';

import chromtDevtoolPng from './chrome-devtool.png';
import gitPng from './git.png';
import linterror from './linterror.png';
import stateofjsStatictyping from './stateofjs-statictyping.png';
import typeerror from './typeerror.png';

const Why = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <p>개발 환경은 개발자에게 집 같은 곳</p>
      <p>
        개발 환경을 편하게 만들고, 개발 환경에 익숙해지는 게 매우 중요합니다
      </p>
    </div>
  );
};

const OS = () => {
  const data: { image: string; title: string; description: ReactNode }[] = [
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Icon-windows_os.svg/1200px-Icon-windows_os.svg.png',
      title: 'Windows',
      description: (
        <>
          WSL 셋업 또는 Ubuntu 듀얼부팅을 <strong>강하게</strong> 권장합니다.
          <br />위 작업을 완료했다면, 이후 모든 가이드는 Linux 가이드를 따르면
          됩니다.
        </>
      ),
    },
    {
      image:
        'https://i.pinimg.com/474x/77/f0/33/77f033d90e28c29dc6ce7006e66d0caa.jpg',
      title: 'macOS',
      description: <>👍 준비 완료</>,
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png',
      title: 'Linux',
      description: <>👍 준비 완료</>,
    },
  ];
  return (
    <ul className="flex flex-col gap-12">
      {data.map((item) => (
        <li key={item.title} className="flex w-full items-center gap-10">
          <div className="flex flex-col items-center">
            <img width={100} src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
          <p>{item.description}</p>
        </li>
      ))}
    </ul>
  );
};

const Git = () => {
  const gitDownloadLink =
    'https://git-scm.com/book/ko/v2/%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Git-%EC%84%A4%EC%B9%98';
  return (
    <div className="flex flex-col items-center gap-4">
      <ExternalLink href={gitDownloadLink} />
      <img src={gitPng} alt="git -v" />
      <p>GUI도 좋지만, CLI를 권장합니다</p>
    </div>
  );
};

const IDE = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <img
        width="200"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519"
      />
      <ExternalLink href="https://code.visualstudio.com/download" />
      vscode의 settings JSON에 아래와 같이 설정해 주세요.
      <CodeSnippet
        code={[
          `"editor.formatOnSave": true`,
          `"eslint.format.enable": true`,
          `"editor.codeActionsOnSave": { "source.fixAll.eslint": true }`,
        ]}
        language="json"
      />
      <p>
        선호하는 IDE가 있으시다면 원하는 거 쓰셔도 되는데, 세미나장에게
        노티주세요
      </p>
    </div>
  );
};

const NodeJS = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col items-center gap-4">
        <img
          width={300}
          src="https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png"
        />
        <p>자바스크립트를 로컬에서 돌리기 위한 런타임</p>
        <p>
          Bun, Deno 등 여러 대안들도 있지만 가장 안정적이고 널리 쓰이는 건
          Node.js
        </p>
      </div>
      <div>
        <p>Node.js를 설치하기 위해 nvm을 사용합니다.</p>
        <ExternalLink
          className="my-4"
          href="https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating"
        />
        <CodeSnippet
          language="shell"
          code={['nvm install 20 # Node.js 설치', 'node -v # 설치됐는지 확인']}
        />
      </div>
    </div>
  );
};

const Yarn = () => {
  return (
    <div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-center gap-4">
          <img
            width={300}
            src="https://cdn.icon-icons.com/icons2/2699/PNG/512/yarnpkg_logo_icon_170667.png"
          />
          <p>Node.js 프로젝트에서 패키지 의존성을 관리해주는 도구</p>
          <p>npm, yarn, pnpm 3대장</p>
        </div>
        <div>
          <CodeSnippet
            language="shell"
            code={[
              'npm install -g yarn # yarn 설치',
              'yarn -v # 설치됐는지 확인',
            ]}
          />
        </div>
      </div>
    </div>
  );
};

const Tool = () => {
  return (
    <div>
      <p className="mb-8 text-center">
        자바스크립트는 되는 게 너무 많아서 문제인 언어
      </p>
      <div className="flex gap-8">
        <div>
          <img
            width={600}
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--ZDtqrBOj--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://github.com/damiancipolat/js_vs_memes/blob/master/doc/js_thanks.png%3Fraw%3Dtrue"
          />
        </div>
        <div>
          {[
            '객체지향과 함수형 패러다임 모두 지원',
            '프로토타입 기반 언어면서 class 문법 지원',
            '(TS) 정적 타입 검사를 한다면서 any 지원',
            'var, == 등 레거시 문법',
            '세미콜론 붙여도 되고 안 붙여도 됨',
            '네이밍 규칙 없음',
          ].map((c) => (
            <p className="mb-8 text-center" key={c}>
              {c}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

const TypeScript = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <p>자바스크립트로 컴파일되는, 자바스크립트의 superset 언어</p>
      <p>
        <strong>니가 이거라며, 이거 맞아?</strong>를 잡아주는 도구
      </p>
      <img src={typeerror} />
      <img src={stateofjsStatictyping} />
      <p>따로 설치할 건 없습니다</p>
    </div>
  );
};

const ESLint = () => {
  return (
    <div className="flex flex-col gap-8">
      <p>코드 품질을 검사해주는 도구</p>
      <p>vscode에서 eslint extension 설치</p>
      <ExternalLink href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint" />
      <img src={linterror} />
    </div>
  );
};

const Prettier = () => {
  return (
    <div className="flex flex-col gap-8">
      <p>코드 포매터 (세미콜론, 띄어쓰기 등등)</p>
      <p>
        ESLint가 컨벤션 및 버그 방지를 담당한다면, prettier 는 정말{' '}
        <strong>포매팅만</strong> 담당
      </p>
      <p>vscode에서 prettier extension 설치</p>
      <ExternalLink href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" />
    </div>
  );
};

const Knip = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <p>안 쓰는 코드 찾아주는 도구</p>
      <p>따로 설치할 건 없습니다</p>
    </div>
  );
};

const Browser = () => {
  return (
    <div>
      <p className="mb-4 text-center">크롬 이용</p>
      <p className="mb-4 text-center">단축키: F12 (말고도 많습니다)</p>
      <img src={chromtDevtoolPng} />
    </div>
  );
};

export const environmentLecture = getLectureItem({
  title: '개발환경 세팅',
  description: 'IDE, eslint, prettier, ci',
  date: new Date('2024-09-04'),
  element: (
    <Slides
      slides={[
        { title: 'Why', content: <Why /> },
        { title: 'OS', content: <OS /> },
        { title: 'Git', content: <Git /> },
        { title: 'IDE', content: <IDE /> },
        { title: 'Node.js', content: <NodeJS /> },
        { title: 'Yarn', content: <Yarn /> },
        { title: '정적 분석 도구', content: <Tool /> },
        { title: '정적 분석 도구 - TypeScript', content: <TypeScript /> },
        { title: '정적 분석 도구 - ESLint', content: <ESLint /> },
        { title: '정적 분석 도구 - Prettier', content: <Prettier /> },
        { title: '정적 분석 도구 - Knip', content: <Knip /> },
        { title: 'Browser', content: <Browser /> },
      ]}
    />
  ),
});
