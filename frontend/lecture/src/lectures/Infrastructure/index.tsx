import { ThickArrowUpIcon } from '@radix-ui/react-icons';
import { Fragment } from 'react';

import { Callout } from '@/components/Callout';
import { ExternalLink } from '@/components/ExternalLink';
import { InlineCode } from '@/components/InlineCode';
import { AssetDescriptionLayout } from '@/components/SlideLayout';
import { Slides } from '@/components/Slides';
import { StackBadge } from '@/components/StackBadge';
import { getLectureItem } from '@/lectures';

import browserBehavior from './browser-behavior.png';
import buildOutput from './build-output.png';

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
              <p>
                AWS <StackBadge stack="S3" /> <StackBadge stack="CloudFront" />
                로 배포하기
              </p>
              <p className="ml-6 text-base opacity-50">
                왜냐면 와플에서는 버셀을 못써요..
              </p>
              <p>GitHub Actions 로 배포 파이프라인 구축하기</p>
              <p>Next.js 는 이렇게 배포 못 한다는 거 인지하기</p>
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
                먼저 HTML을 요청하고, HTML 응답에 따라 js, css 등을 요청한다
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
                dist 폴더를 서빙해주기만 하면 된다!
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
                '와플에서 AWS를 쓰기 때문에 AWS를 공부할 겁니다',
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
                'react-router-dom 에서 라우팅을 위한 설정이 필요함',
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
                'AWS의 CDN 서비스',
                'S3, EC2 등과 연동 가능',
                'https 등 설정도 편하게 할 수 있음',
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
              description={['DNS 서비스', '도메인을 연결할 수 있음']}
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
              <li>매번 S3에 dist 폴더를 업로드하는 건 너무 비효율적</li>
              <li>배포 시점을 추적하기도 힘들고, 권한 관리도 복잡해진다</li>
              <li className="text-2xl">
                따라서 이 과정을 GitHub Actions 를 통해 자동화해두는 게 좋다!
              </li>
            </ul>
          ),
        },
        {
          title: '우리는 지금껏 계속 GitHub Actions를 써왔습니다',
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
              <Callout title="주의">
                굉장히 많은 방법이 있고, 특히 깃 컨벤션과도 많은 관련이
                있습니다. 나중에는 여러분의 프로젝트에 가장 적합한 방식을 직접
                판단해서 적용해 주세요!
              </Callout>

              <ol className="flex list-decimal flex-col gap-2 pl-6">
                <li>
                  태그 푸시 시 발동 (컨벤션: <InlineCode code="(dev|prod)-*" />)
                </li>
                <li>프로젝트를 빌드하여 정적 파일 생성</li>
                <li>S3에 파일을 업로드</li>
                <li>CloudFront에 캐시를 무효화</li>
              </ol>

              <p>
                그리고 이 과정을 수행할 권한이 GitHub Actions 에게 있어야 한다
                (IAM 발급 필요)
              </p>

              <p>뭐가 굉장히 많죠?</p>
            </div>
          ),
        },
        {
          title: 'deploy 구축 A to Z 라이브코딩',
          content: (
            <div className="flex flex-col gap-4">
              <p>실시간으로 따라해주셔도 되고 녹화 보면서 따라하셔도 됩니다</p>
            </div>
          ),
        },
      ]}
    />
  ),
});
