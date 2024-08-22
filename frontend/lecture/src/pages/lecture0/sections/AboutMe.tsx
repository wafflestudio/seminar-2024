export const AboutMe = () => {
  return (
    <div className="flex items-center gap-16">
      <img
        className="w-72 rounded-full"
        src="https://avatars.githubusercontent.com/u/39977696?v=4"
      />
      <div className="flex flex-1 flex-col gap-8">
        <div className="mb-8 text-4xl">우현민 (컴퓨터공학부 19)</div>
        <div>프론트엔드 개발 4년차 (2021.03.29 ~ )</div>

        <div>학부 3학년 1학기 복학생</div>

        <ul className="flex flex-col gap-4 pl-4 text-xl">
          <li>와플스튜디오 18.5기 루키</li>
          <li>2021~2022 동아리장</li>
          <li>2021년 리액트 세미나장</li>
          <li>2022년 리액트 세미나 조교</li>
          <li>2023년 리액트 세미나 조교</li>
          <li>2024년 리액트 세미나장</li>
          <li>2022.09 ~ 2024.05 SNUTT 팀원</li>
        </ul>
      </div>
    </div>
  );
};
