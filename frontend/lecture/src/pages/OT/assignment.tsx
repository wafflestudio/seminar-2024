export const OTAssignment = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <ul className="flex list-disc flex-col gap-4 pl-10">
        <li>설문지 작성 완료 (~오늘)</li>
        <li>조원 확인 및 채널/DM방 개설 (~내일)</li>
        <li>
          다음 세미나 전까지 코모 1회{' '}
          <b className="text-base text-slate-500">
            설입이면 세상과 연애하기, 할리스, 커피어반, 커피빈, 관정 스터디룸,
            토즈모임센터 등
          </b>
        </li>
      </ul>
    </div>
  );
};
