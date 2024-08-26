import { Badge } from '@/designsystem/ui/badge';

export const Team = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-3xl">목표</h2>
      <div className="flex gap-2">
        {['친목', '질문'].map((text) => (
          <Badge key={text} className="text-xl">
            {text}
          </Badge>
        ))}
      </div>

      <h2 className="mt-16 text-3xl">형태</h2>
      <ul className="flex list-disc flex-col gap-2">
        <li>서로 도움을 주고받는다</li>
        <li>상대가 혹시나 트롤이어도 발목잡히지는 않는 구조</li>
        <li>
          조마다 채널 생성
          <p className="text-base text-slate-600">
            원한다면 개인 DM방도 가능, 단 세미나장 포함 필수
          </p>
        </li>
        <li>
          가능하면 친목이 가능한 형태로 배정
          <p className="text-base text-slate-600">
            학번이 비슷한 사람끼리, 같은 학과 사람끼리 등<br />
            같이 팀을 하고 싶은/싫은 사람이 있다면 미리 DM으로 알려주세요
          </p>
        </li>
      </ul>

      <h2 className="mt-16 text-3xl">과제</h2>
      <ul className="flex list-disc flex-col gap-2">
        <li>코모 (모각코) 세미나마다 최소 1번</li>
        <li>상호 채점과 코드리뷰</li>
      </ul>
    </div>
  );
};
