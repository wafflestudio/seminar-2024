import { ExternalLink } from '@/components/ExternalLink';

export const OTAssignment = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <ul className="flex list-disc flex-col gap-4 pl-10">
        <li>조원 확인 및 채널/DM방 개설 (~오늘)</li>
        <li>
          다음 세미나 전까지 코모 1회 진행 후 #frontend-잡담 채널에 인증샷
          업로드
          <br />
          <b className="text-base text-slate-500">
            설입이면 세상과 연애하기, 할리스, 커피어반, 커피빈, 관정 스터디룸,
            토즈모임센터 등
          </b>
          <br />
          <b className="text-base text-slate-500">얼굴은 안 나와도 됩니다.</b>
        </li>
        <li>
          벨로퍼트와 함께 하는 모던 리액트 1-16 까지 튜토리얼 진행하면서 개념
          정리하고, 정리한 내용 마크다운 형태로 #frontend-잡담 채널에 업로드
          <br />
          <ExternalLink href="https://react.vlpt.us/" />
        </li>
      </ul>
    </div>
  );
};
