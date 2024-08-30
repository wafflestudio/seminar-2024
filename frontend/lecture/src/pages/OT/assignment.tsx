import { ExternalLink } from '@/components/ExternalLink';

export const OTAssignment = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <ul className="flex flex-col gap-4 pl-10">
        <li>
          벨로퍼트와 함께 하는 모던 리액트 1.3~1.16 까지 튜토리얼 진행하면서
          개념 정리하고, 정리한 내용 마크다운 형태로 #frontend-잡담 채널에
          업로드
          <br />
          <ExternalLink href="https://react.vlpt.us/" />
          <br />
          <b className="text-base text-slate-500">
            이것도 이제 조금 옛날 자료라 틀린 내용도 좀 있긴 합니다
          </b>
          <br />
          <b className="text-base text-slate-500">
            만약 이미 리액트를 할 줄 알아서 의미없게 느껴진다면 DM 주세요
          </b>
        </li>
      </ul>
    </div>
  );
};
