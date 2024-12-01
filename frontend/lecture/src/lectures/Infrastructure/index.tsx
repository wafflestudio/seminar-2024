import { ThickArrowUpIcon } from '@radix-ui/react-icons';
import { Fragment } from 'react';

import { Callout } from '@/components/Callout';
import { CodeSnippet } from '@/components/CodeSnippet';
import { ExternalLink } from '@/components/ExternalLink';
import { InlineCode } from '@/components/InlineCode';
import { AssetDescriptionLayout } from '@/components/SlideLayout';
import { Slides } from '@/components/Slides';
import { StackBadge } from '@/components/StackBadge';
import { Separator } from '@/designsystem/ui/separator';
import { getLectureItem } from '@/lectures';

import browserBehavior from './browser-behavior.png';
import buildOutput from './build-output.png';
import cloudfrontError from './cloudfront-error.png';
import iam1 from './iam-1.png';
import iam2 from './iam-2.png';
import s31 from './s3-1.png';
import s3OAC from './s3-oac.png';

export const infrastructureLecture = getLectureItem({
  title: '프론트엔드 인프라',
  description: 'AWS, S3, Cloudfront',
  date: new Date('2024-11-06 20:30:00'),
  element: (
    <Slides
      slides={[
        {
          title: '목표',
          content: (
            <div className="flex flex-col gap-4 leading-10">
              vite react SPA를 AWS <StackBadge stack="S3" />{' '}
              <StackBadge stack="CloudFront" />로 배포하는 파이프라인 이해하고
              구축하기
            </div>
          ),
        },
        {
          title: '(복습) CSR 프로젝트를 빌드하면',
          content: (
            <div className="flex flex-col gap-4 leading-10">
              <p>HTML, CSS, JS 코드, 정적 이미지들이 생성된다</p>
              <img src={buildOutput} alt="build-output" />
            </div>
          ),
        },
        {
          title: '(복습) 브라우저는',
          content: (
            <div className="flex flex-col gap-4 leading-10">
              <p>
                먼저 HTML을 요청하고, HTML 응답에 따라 JS, CSS 등을 요청한다
              </p>
              <img src={browserBehavior} alt="browser-behavior" />
            </div>
          ),
        },
        {
          title: '실습해봅시다',
          content: (
            <div className="flex flex-col gap-4 leading-10">
              <p>로컬에서</p>
              <ol className="list-decimal">
                <li>
                  <InlineCode code="yarn build" /> 로 빌드해서 dist 폴더 만들기
                </li>
                <li>
                  <InlineCode code="npx serve -s dist -l 3000" /> 로 서버 실행
                </li>
                <li>
                  브라우저에서 <InlineCode code="http://localhost:3000" /> 에
                  접속해서 확인
                </li>
              </ol>
              <p>
                <InlineCode code="serve" />는 정적 파일들을 서빙해주는 웹서버
              </p>
              <Callout title="아하 💡">
                빌드해서 나오는 dist 폴더를 서빙해주기만 하면 된다!
              </Callout>
            </div>
          ),
        },
        {
          title: 'AWS',
          content: (
            <AssetDescriptionLayout
              asset={
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1280px-Amazon_Web_Services_Logo.svg.png" />
              }
              description={[
                'Amazon Web Service',
                '대표적인 클라우드 서비스',
                <Fragment key="f">
                  경쟁제품: <StackBadge stack="Azure" />,{' '}
                  <StackBadge stack="Google Cloud" /> 등
                </Fragment>,
                '가장 널리 사용되고, 와플에서 AWS를 쓰기 때문에 AWS를 공부할 겁니다',
              ]}
            />
          ),
        },
        {
          title: 'AWS S3',
          content: (
            <AssetDescriptionLayout
              asset={
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Amazon-S3-Logo.svg/1712px-Amazon-S3-Logo.svg.png" />
              }
              description={[
                'Simple Storage Service',
                '정적 파일을 저장하고 서빙할 수 있는 저장소',
                '여기에 dist 폴더를 올리기만 하면 (이론상) 배포 끝!',
              ]}
            />
          ),
        },
        {
          title: 'S3으로만 배포했을 때 문제점',
          content: (
            <AssetDescriptionLayout
              asset={
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Amazon-S3-Logo.svg/1712px-Amazon-S3-Logo.svg.png" />
              }
              description={[
                'client side routing이 어려움',
                'https를 사용하기 어려움',
                'S3 서버는 한 지역에만 있기 때문에 컴퓨터와 물리적으로 멀어지면 느릴 수 있음',
              ]}
            />
          ),
        },
        {
          title: '잠깐: CDN이란?',
          content: (
            <AssetDescriptionLayout
              asset={
                <img src="https://cf-assets.www.cloudflare.com/slt3lc6tev37/7Dy6rquZDDKSJoeS27Y6xc/4a671b7cc7894a475a94f0140981f5d9/what_is_a_cdn_distributed_server_map.png" />
              }
              description={[
                'Content Delivery Network',
                '여러 지역에 캐시 서버를 둬서 모든 사용자에게 빠르게 파일을 제공할 수 있도록',
              ]}
            />
          ),
        },
        {
          title: 'AWS CloudFront',
          content: (
            <AssetDescriptionLayout
              asset={
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Amazon-S3-Logo.svg/1712px-Amazon-S3-Logo.svg.png" />
              }
              description={[
                'AWS가 제공하는 CDN 서비스',
                'S3, EC2 등과 연동 가능',
                'https 등 설정도 편하게 할 수 있음',
                '배포하면 https://dip85ouj31362.cloudfront.net 이런 주소가 나옴',
              ]}
            />
          ),
        },
        {
          title: 'AWS Route53',
          content: (
            <AssetDescriptionLayout
              asset={
                <img src="https://static-00.iconduck.com/assets.00/aws-route53-icon-212x256-16an9num.png" />
              }
              description={[
                'DNS 서비스',
                '내가 원하는 도메인을 연결할 수 있음',
                '도메인 구매도 지원하지만 저렴하진 않음',
              ]}
            />
          ),
        },
        {
          title: '이걸 다 합치면',
          content: (
            <AssetDescriptionLayout
              asset={
                <div className="flex list-disc flex-col items-center gap-2 rounded-2xl bg-slate-500 p-6">
                  <div className="flex items-center gap-2">
                    <StackBadge stack="S3" /> (<InlineCode code="dist" /> 폴더 )
                  </div>
                  <ThickArrowUpIcon className="h-5 w-5" />
                  <div className="flex items-center gap-2">
                    <StackBadge stack="CloudFront" />
                  </div>
                  <ThickArrowUpIcon className="h-5 w-5" />
                  <div className="flex items-center gap-2">
                    <StackBadge stack="Route 53" />
                  </div>
                </div>
              }
              description={[
                'S3에 정적 파일을 올리고',
                'CloudFront로 캐싱하고',
                'Route53으로 도메인을 연결 (선택)',
              ]}
            />
          ),
        },
        {
          title: '특수처리: path 설정',
          content: (
            <ul className="ml-8 flex list-disc flex-col gap-5 text-xl">
              <li>CloudFront 는 S3을 서빙하는 CDN일 뿐</li>
              <li>
                당연히, CloudFront 입장에서는 <InlineCode code="/login" /> 이런
                경로 모르므로 403을 떨군다
              </li>
              <li>
                따라서 이걸 의도적으로 <InlineCode code="/index.html" /> 로
                먹여줘서 SPA가 동작하도록 해야 한다
              </li>
              <li>
                CloudFront 에서 Error Pages 설정을 통해 설정 가능. 지금 보여드릴
                수 있긴 한데, 구글링하면 많이 나옵니다
              </li>
            </ul>
          ),
        },

        {
          title: '배포 파이프라인 구축',
          content: (
            <ul className="ml-8 flex list-disc flex-col gap-5 text-xl">
              <li>코드를 업데이트했으면 사이트에도 반영이 되어야 한다</li>
              <li>
                매번 빌드하고 S3에 dist 폴더를 업로드하는 건 너무 비효율적
              </li>
              <li>배포 시점을 추적하기도 힘들고, 권한 관리도 복잡해진다</li>
              <li className="text-2xl">
                따라서 이 과정을 GitHub Actions 를 통해 자동화해두는 게 좋다!
              </li>
            </ul>
          ),
        },
        {
          title: '우리는 계속 GitHub Actions를 써왔습니다',
          content: (
            <div className="flex flex-col gap-4">
              <ExternalLink
                href="https://github.com/features/actions"
                label="GitHub Actions란?"
              />

              <ExternalLink
                label=".github/workflows/ci.yml"
                href="https://github.com/wafflestudio/seminar-2024-frontend-template/blob/main/.github/workflows/ci.yml"
              />

              <p>비슷한 느낌으로 deploy.yml을 만들면 된다</p>
            </div>
          ),
        },
        {
          title: 'deploy.yml을 어떻게 구성하지?',
          content: (
            <div className="flex flex-col gap-4">
              <ol className="flex list-decimal flex-col gap-2 pl-6">
                <li>프로젝트를 빌드하여 정적 파일 생성</li>
                <li>S3에 파일을 업로드</li>
                <li>CloudFront에 캐시를 무효화</li>
              </ol>

              <p>
                그리고 이 과정을 수행할 권한이 GitHub Actions 에게 있어야 한다
                (IAM 발급 필요)
              </p>
            </div>
          ),
        },
        {
          title: '인프라 설계',
          content: (
            <div className="flex flex-col gap-10">
              <Callout title="주의">
                굉장히 많은 방법이 있고, 깃 컨벤션과도 많은 관련이 있습니다.
                나중에는 여러분의 프로젝트에 가장 적합한 방식을 직접 판단해서
                적용해 주세요!
                <br />
                일단은 제가 좋다고 생각하는 방식으로 안내드리겠습니다
              </Callout>

              <div>
                <InlineCode code="dev" />, <InlineCode code="prod" /> 두 개의
                환경을 이용.
                <br />
                <InlineCode code="dev" />는 내부용 환경
                <br />
                <InlineCode code="prod는" /> 실제 유저가 사용하는 환경
              </div>
              <div>
                지금까지 해왔듯 브랜치는 main과 feature만 활용하고, Squash and
                Merge 로 머지
              </div>
              <Separator />
              <div>
                <InlineCode code="dev" /> 배포는 수동클릭 혹은 main 브랜치에
                push했을 때 (즉 PR을 머지했을 때){' '}
                <StackBadge stack="GitHub Actions" /> 트리거
              </div>
              <div>
                <InlineCode code="prod" /> 배포는 수동클릭으로
                <StackBadge stack="GitHub Actions" /> 트리거
              </div>
              <Separator />
              <div>
                <StackBadge stack="GitHub Actions" />가 들고 있는 IAM에는 S3
                버킷 두 개, CloudFront 배포 두 개에만 접근할 수 있는 최소 권한만
                부여되어 있어야 한다
              </div>
              <div>
                <StackBadge stack="GitHub Actions" />이 트리거되면 빌드하고{' '}
                <StackBadge stack="S3" />에 업로드하고 CloudFront Cache 무효화
              </div>
            </div>
          ),
        },
        {
          title: '잠깐: IAM이란?',
          content: (
            <div className="flex flex-col items-start gap-10">
              <ExternalLink
                href="https://docs.aws.amazon.com/ko_kr/IAM/latest/UserGuide/introduction.html"
                label="AWS 공식문서 - IAM이란?"
              />
              <div>
                <p>AWS 해킹 후기 라고 검색하면 뭐가 많이 나오는데</p>
                <div className="flex gap-10">
                  <ExternalLink href="https://www.teamblind.com/kr/post/AWS-%ED%95%B4%ED%82%B9%EC%9C%BC%EB%A1%9C-3%EC%96%B5%EC%B2%AD%EA%B5%AC%EB%8B%B9%ED%95%9C-%EA%B0%9C%EB%B0%9C%EC%9E%90%E3%84%B7%EC%9B%83%EB%8C%80%ED%8E%8C-YWUVxh3b" />
                  <ExternalLink href="https://velog.io/@dev_zzame/AWS-%ED%95%B4%ED%82%B9-%EB%8B%B9%ED%95%98%EB%8B%A4%EC%A0%80%EB%B3%B4%EA%B3%A0-%EC%B2%9C%EB%A7%8C%EC%9B%90%EC%9D%84-%EB%82%B4%EB%9D%BC%EA%B5%AC%EC%9A%94" />
                  <ExternalLink href="https://comdolidol-i.tistory.com/331" />
                </div>
              </div>
              <div>
                해킹해서 인스턴스를 띄워버린다거나, 돌아가고 있는 서비스를
                날려버린다거나..
              </div>
              <div>
                그래서 AWS 루트 계정은 MFA를 걸어둬야 하고, 되도록 이용하지도
                않아야 합니다
              </div>
              <div>
                대신 최소 권한을 가진 역할 계정인 IAM을 발급해서 이용합시다
              </div>
              <div>자세한 방법이나 권한은 마지막 슬라이드에서 다시</div>
            </div>
          ),
        },
        {
          title: '인프라 구축 과정',
          content: (
            <div className="flex flex-col gap-32">
              <section className="flex flex-col gap-4">
                <h2>1. AWS 회원가입</h2>
                <ExternalLink href="https://signin.aws.amazon.com/signup?request_type=register" />
                <ol className="list-decimal pl-12">
                  <li>이메일 인증 하고</li>
                  <li>비밀번호 입력 하고</li>
                  <li>연락처 정보 기입 (개인, 대한민국)</li>
                  <li>결제 정보 기입 및 검증</li>
                  <li>기본 지원 선택하고 가입완료</li>
                </ol>
              </section>
              <section className="flex flex-col gap-4">
                <h2>2. 세미나에서 사용할 콘솔 IAM 생성</h2>
                <ExternalLink href="https://us-east-1.console.aws.amazon.com/iam/home?region=ap-northeast-2#/home" />
                <ol className="list-decimal pl-12">
                  <li>콘솔에서 검색해서 IAM 으로 진입</li>
                  <li>(권장) 루트 계정에 MFA 추가</li>
                  <li>
                    사용자 - 사용자 생성
                    <img src={iam1} />
                  </li>
                  <li>
                    직접 정책 연결 - AmazonRoute53FullAccess,
                    AmazonS3FullAccess, CloudFrontFullAccess,
                    IAMUserChangePassword 네 개 넣어서 생성
                  </li>
                  <li>
                    오른쪽 위에서 계정 ID를 확인해서 어디다가 기록해놓고
                    로그아웃. 이제 특별한 이야기가 없다면 루트 계정은 다시
                    사용하지 않습니다.
                  </li>
                  <li>방금 만든 IAM 계정으로 다시 로그인</li>
                </ol>
              </section>
              <section className="flex flex-col gap-4">
                <h2>3. dev 버킷 생성</h2>
                <ol className="list-decimal pl-12">
                  <li>콘솔에서 검색해서 S3 으로 진입</li>
                  <li>
                    버킷 이름 잘 지어서 생성. 생성 시 기본설정 그대로 두면
                    됩니다
                    <img src={s31} />
                  </li>
                  <li>콘솔에서 검색해서 CloudFront 로 진입</li>
                  <li>Origin domain 에서 dev 버킷 선택</li>
                  <li>원본 액세스에서 원본 액세스 제어 설정 선택</li>
                  <li>Create new OAC 해서 하나 만들고</li>
                  <li>뷰어 - Redirect HTTP to HTTPS</li>
                  <li>WAF - 보안 보호 비활성화</li>
                  <li>나머지 다 기본설정대로 두고 배포 생성</li>
                  <li>
                    S3 정책 업데이트해야 된다고 노란 게 뜰 텐데, 정책 복사해서
                    S3으로 이동
                  </li>
                  <li>
                    권한 탭의 정책 섹션에서 편집 누르고 붙여넣기
                    <img src={s3OAC} />
                  </li>
                </ol>
              </section>
              <section className="flex flex-col gap-4">
                <h2>4. 자동 배포 구축을 위한 IAM 생성</h2>
                <ol className="list-decimal pl-12">
                  <li>다시 루트 계정으로 로그인</li>
                  <li>
                    사용자 - 사용자 생성
                    <img src={iam2} />
                  </li>
                  <li>
                    직접 정책 연결 - 정책 생성 에서 아래 권한 지정 (최소 권한.
                    버킷 이름이나 cloudfront distribution 이름은 본인 프로젝트에
                    맞게 해 주세요)
                    <CodeSnippet
                      language="json"
                      code={[
                        `{`,
                        `    "Version": "2012-10-17",`,
                        `    "Statement": [`,
                        `        {`,
                        `            "Effect": "Allow",`,
                        `            "Action": [`,
                        `                "s3:PutObject",`,
                        `                "s3:GetObject",`,
                        `                "s3:DeleteObject",`,
                        `                "s3:ListBucket"`,
                        `            ],`,
                        `            "Resource": [`,
                        `                "arn:aws:s3:::wafflestudio-seminar-2024-frontend-dev/*",`,
                        `                "arn:aws:s3:::wafflestudio-seminar-2024-frontend-dev"`,
                        `            ]`,
                        `        },`,
                        `         {`,
                        `            "Effect": "Allow",`,
                        `            "Action": [`,
                        `                "cloudfront:CreateInvalidation"`,
                        `            ],`,
                        `            "Resource": [`,
                        `                "arn:aws:cloudfront::985539783780:distribution/E1TIL5DT79CZVA"`,
                        `            ]`,
                        `        }`,
                        `    ]`,
                        `}`,
                      ]}
                    />
                  </li>
                  <li>생성한 정책 연결 후 사용자 생성</li>
                  <li>
                    생성된 IAM으로 들어가서 보안 자격 증명 탭 - 액세스 키 만들기
                  </li>
                  <li>Command Line Interface(CLI)</li>
                  <li>생성된 키 잘 기록해놓고 완료</li>
                </ol>
              </section>
              <section className="flex flex-col gap-4">
                <h2>5. GitHub Actions 생성</h2>
                <ol className="list-decimal pl-12">
                  <li>
                    배포한 프로젝트로 깃헙 레포지토리로 가서, Settings - Actions
                    - Repository secrets - New repository secret
                  </li>
                  <li>
                    아까 생성한 키의 id와 secret을 각각 AWS_ACCESS_KEY_ID,
                    AWS_SECRET_ACCESS_KEY 라는 이름으로 생성
                  </li>
                  <li>
                    배포할 프로젝트로 가서, .github/workflows/deploy-dev.yml
                    파일 생성 (버킷 이름이랑 cloudfront distribution 이름은 본인
                    껄로 교체)
                    <CodeSnippet
                      code={[
                        `name: deploy-dev`,
                        ``,
                        `on:`,
                        `  push:`,
                        `    branches:`,
                        `      - main`,
                        `  workflow_dispatch:`,
                        ``,
                        `jobs:`,
                        `  deploy:`,
                        `    name: Deploy`,
                        `    runs-on: ubuntu-latest`,
                        ``,
                        `    steps:`,
                        `      - name: Checkout`,
                        `        uses: actions/checkout@v4`,
                        `      - name: Setup Node`,
                        `        uses: actions/setup-node@v4`,
                        `        with:`,
                        `          node-version: '20.11.1'`,
                        ``,
                        `      - name: Build & Export`,
                        `        run: |`,
                        `          yarn install`,
                        `          yarn build`,
                        ``,
                        `      - name: Deploy to S3 and Invalidate Cloudfront`,
                        `        env:`,
                        `          AWS_ACCESS_KEY_ID: \${{ secrets.AWS_ACCESS_KEY_ID }}`,
                        `          AWS_SECRET_ACCESS_KEY: \${{ secrets.AWS_SECRET_ACCESS_KEY }}`,
                        `          AWS_REGION: ap-northeast-2`,
                        `        run: |`,
                        `          aws s3 sync ./dist s3://wafflestudio-seminar-2024-frontend-dev --delete`,
                        `          aws cloudfront create-invalidation --distribution-id E1TIL5DT79CZVA --paths "/*"`,
                      ]}
                      language="yaml"
                    />
                  </li>
                  <li>브랜치 분기하고 커밋하고 푸시하고 메인에 머지</li>
                </ol>
              </section>
              <section className="flex flex-col gap-4">
                <h2>6. SPA라서 해줘야 되는 거 처리</h2>
                <ol className="list-disc pl-12">
                  <li>
                    CloudFront 배포 - 오류 페이지 - 사용자 정의 오류 응답 생성
                    <img src={cloudfrontError} />
                  </li>
                  <li>
                    저번 과제에서 vercel.json을 추가해줘야 하는 것과 비슷한 이유
                  </li>
                </ol>
              </section>
            </div>
          ),
        },
      ]}
    />
  ),
});
