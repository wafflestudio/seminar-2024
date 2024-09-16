import { Callout } from '@/components/Callout';
import { CodeSnippet } from '@/components/CodeSnippet';
import { ExternalLink } from '@/components/ExternalLink';
import { InlineCode } from '@/components/InlineCode';
import { Slides } from '@/components/Slides';
import { StackBadge } from '@/components/StackBadge';
import { getLectureItem } from '@/lectures';

export const stateManagementLecture = getLectureItem({
  title: '상태 관리',
  description: '전역 상태 관리, Redux, React Query',
  date: new Date('2024-10-16 20:30:00'),
  element: (
    <Slides
      slides={[
        {
          title: '이번 챕터 목표',
          content: (
            <div className="flex flex-col gap-4 text-xl">
              <p className="text-center">
                앞으로 여러 상태 관리 도구들을 만나게 될 텐데, 조금 더 친숙하게
                공부할 수 있게 배경을 잡는다
              </p>
              <p>
                각 상태 관리 도구의 사용법을 다루진 않습니다. 과제에서도 다루지
                않습니다.
              </p>
              <p>
                리액트 경험이 충분하지 않다면 다소 뜬구름 잡는 이야기로 들릴 수
                있습니다만, 그렇다고 안 할 수는 없는 이야기입니다.
              </p>
              <p>역사 얘기라고 생각하고 편하게 들어주세요</p>
            </div>
          ),
        },
        {
          title: '상태 관리',
          content: (
            <div className="flex flex-col gap-4">
              <p>
                세미나 1에서, 상태는 <StackBadge stack="React" /> 의 핵심 개념
                중 하나라고 했었음
              </p>
              <p>
                따라서 상태를 잘 관리하는 게 중요하고, 사람들이 많이 어려워하는
                것 중 하나
              </p>
              <p>
                이를 돕기 위한 여러 도구들이 존재하며, 사실상 상태관리 도구 없이
                어플리케이션을 만드는 건 쉽지 않다
              </p>
              <p>여러분도 토이프로젝트 가시면 뭐 하나는 쓰셔야 할 거예요</p>
            </div>
          ),
        },
        {
          title: 'Redux (2015~현재)',
          content: (
            <div className="flex flex-col gap-4">
              <p>
                2020년까지만 해도, 사실상 <StackBadge stack="React" />를 한다 =={' '}
                <StackBadge stack="Redux" /> 를 한다 였다
              </p>
              <p>
                그 시절 <StackBadge stack="Redux" /> 코드
              </p>
              <CodeSnippet
                code={[
                  `class UserData extends Component {`,
                  `  render() {`,
                  `    const { username, email, updateUser } = this.props;`,
                  `    return (`,
                  `      <div>`,
                  `        <h2>User Data</h2>`,
                  `        <p>Username: {username}</p>`,
                  `        <p>Email: {email}</p>`,
                  `        <button`,
                  `          onClick={() => {`,
                  `            updateUser({`,
                  `              username: 'NewUser',`,
                  `              email: 'new@example.com',`,
                  `            });`,
                  `          }}`,
                  `        >`,
                  `          Update User`,
                  `        </button>`,
                  `      </div>`,
                  `    );`,
                  `  }`,
                  `}`,
                  ``,
                  `const mapStateToProps = (state) => ({`,
                  `  username: state.user.username,`,
                  `  email: state.user.email`,
                  `});`,
                  ``,
                  `const mapDispatchToProps = (dispatch) => ({`,
                  `  updateUser: (userData) => dispatch({ type: 'UPDATE_USER', payload: userData })`,
                  `});`,
                  ``,
                  `export default connect(mapStateToProps, mapDispatchToProps)(UserData);`,
                ]}
                language="jsx"
              />
            </div>
          ),
        },
        {
          title: 'Redux (2015~현재)',
          content: (
            <div className="flex flex-col gap-4">
              <p>
                <StackBadge stack="Redux" /> 의 철학
              </p>
              <ul className="flex list-disc flex-col gap-2 pl-6">
                <li>중앙에서 상태를 관리한다</li>
                <li>상태를 변경하는 방법은 action 을 dispatch 하는 것 뿐</li>
                <li>상태를 변경하는 로직은 reducer 에서 처리</li>
                <li>상태를 조회하는 로직은 selector 에서 처리</li>
                <li>이 과정에서 불필요한 리렌더가 없게 해서 성능을 최적화</li>
              </ul>
              <br />
              <CodeSnippet
                code={[
                  `// 요즘은 이런 느낌?`,
                  `import { createSlice, configureStore } from '@reduxjs/toolkit';`,
                  `import { useSelector, useDispatch } from 'react-redux';`,
                  ``,
                  `function UserData() {`,
                  `  const { username, email } = useSelector((state) => state.user);`,
                  `  const dispatch = useDispatch();`,
                  ``,
                  `  return (`,
                  `    <div>`,
                  `      <h2>User Data</h2>`,
                  `      <p>Username: {username}</p>`,
                  `      <p>Email: {email}</p>`,
                  `      <button`,
                  `        onClick={() => {`,
                  `          dispatch(updateUser({`,
                  `            username: 'NewUser',`,
                  `            email: 'new@example.com',`,
                  `          }));`,
                  `        }}`,
                  `      >`,
                  `        Update User`,
                  `      </button>`,
                  `    </div>`,
                  `  );`,
                  `}`,
                ]}
                language="jsx"
              />
              <br />
              <p>하지만 여러 문제점들도 있었는데,</p>
              <ul className="flex list-disc flex-col gap-2 pl-6">
                <li>
                  너무 큰 보일러플레이트 코드 (상태 하나 만드는데에 짜야 할
                  코드가 너무 많다)
                </li>
                <li>
                  ...뭐라뭐라 하던데 사실 별로 공감은 안 됐습니다. 아무튼
                  hater가 많아요
                </li>
              </ul>
            </div>
          ),
        },
        {
          title: 'Recoil (2020~현재)',
          content: (
            <div className="flex flex-col gap-4">
              <p>
                <StackBadge stack="Recoil" /> 의 철학
              </p>
              <ul className="flex list-disc flex-col gap-2 pl-6">
                <li>아토믹하게 상태를 관리한다</li>
              </ul>
              <br />
              <p>얘는 또 다른 문제가 있는데,</p>
              <ul className="flex list-disc flex-col gap-2 pl-6">
                <li>1버전이 계속 안 나오더니 결국 페이스북에서 버렸음</li>
              </ul>
            </div>
          ),
        },
        {
          title: '그리고 다른 상태관리 라이브러리들',
          content: (
            <div className="flex flex-col gap-4">
              <p>
                한때 <StackBadge stack="Redux" />, <StackBadge stack="Recoil" />{' '}
                과 함께 삼대장이었던
                <StackBadge stack="MobX" />
              </p>
              <p>
                <StackBadge stack="Redux" /> 가 발전한{' '}
                <StackBadge stack="Redux Toolkit" />
              </p>
              <p>
                <StackBadge stack="Redux" /> 를 개선한{' '}
                <StackBadge stack="Zustand" />
              </p>
              <p>
                <StackBadge stack="Recoil" /> 을 개선한{' '}
                <StackBadge stack="Jotai" />
              </p>
              <p>
                벨로퍼트님이 만드신 <StackBadge stack="Sangte" />
              </p>
              <p>..등등</p>
            </div>
          ),
        },
        {
          title: '그리고 게임 체인저: tanstack query (2020~)',
          content: (
            <div className="flex flex-col gap-4">
              <Callout title="server state is totally different.">
                <ExternalLink
                  label="공식문서"
                  href="https://tanstack.com/query/latest/docs/framework/react/overview"
                />
              </Callout>
              <div className="flex flex-col gap-4">
                <p>
                  맞는 말입니다. 기존의 <InlineCode code="useState" />를 그냥
                  좀더 이쁘게 감싸놓은 수준인 상태관리 도구들은 서버에서 받아온
                  데이터를 관리하는 문제를 잘 풀지 못했습니다.
                </p>
                <p>캐싱, 로딩, 폴링 등</p>
                <p>
                  그래서 <StackBadge stack="Tanstack Query" />는 이런 데이터를{' '}
                  <strong>서버 상태</strong> 라고 정의하고,{' '}
                  <strong>서버 상태 관리 도구</strong>라고 자신을 소개합니다.
                </p>
              </div>
            </div>
          ),
        },
        {
          title: '그리고 게임 체인저: tanstack query (2020~)',
          content: (
            <div className="flex flex-col gap-4">
              <CodeSnippet
                code={[
                  `import { useQuery } from 'react-query';`,
                  ``,
                  `const UserData = () => {`,
                  `  const { data, isLoading, error, refetch } = useQuery({`,
                  `    queryKey: ['userData'],`,
                  `    queryFn: fetchUserData,`,
                  `  });`,
                  ``,
                  `  if (isLoading) return <div>Loading...</div>;`,
                  `  if (error) return <div>An error occurred: {error.message}</div>;`,
                  ``,
                  `  return (`,
                  `    <div>`,
                  `      <h2>User Data</h2>`,
                  `      <p>Username: {data.username}</p>`,
                  `      <p>Email: {data.email}</p>`,
                  `    </div>`,
                  `  );`,
                  `}`,
                ]}
                language="jsx"
              />
              <p>
                이런 식으로, 서버에서 데이터를 가져오는 것을 훨씬 편하게 해
                줬습니다.
              </p>
              <p>
                캐싱, 재시도, 무효화 등 서버 데이터를 다루는 데 필수인 기능들도
                물론 제공합니다.
              </p>
              <p>
                비슷한 철학을 가진 <StackBadge stack="SWR" /> 이라는
                라이브러리도 있습니다.
              </p>
            </div>
          ),
        },
        {
          title: '그래서 지금은 뭐가 가장 핫한가요?',
          content: (
            <div className="flex flex-col gap-4">
              <p>자료를 만드는 2024년 9월 16일 기준으로,</p>
              <p>
                클라이언트 상태관리 - 서버상태관리를 나누는 철학은 일반적인
                컨셉이 되었습니다.
              </p>
              <p>
                클라이언트 상태관리 도구는 사용하지 않거나{' '}
                <StackBadge stack="Zustand" /> <StackBadge stack="Jotai" /> 중에
                취향껏 쓰고, 서버 상태 관리 도구는{' '}
                <StackBadge stack="Tanstack Query" /> 를 쓰는 게 일반적입니다.
              </p>
              <p>
                제 취향은 <StackBadge stack="Tanstack Query" /> 하나만 쓰고
                클라이언트 상태관리는 모두
                <InlineCode code="useState" />로 처리하는 것인데, 프로젝트
                성격에 따라 다르긴 합니다
              </p>
            </div>
          ),
        },
      ]}
    />
  ),
});
