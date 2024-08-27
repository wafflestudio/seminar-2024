import { Slides } from '@/components/Slides';
import {
  Websites,
  Webviews,
  WhatIsFrontend,
} from '@/pages/OT/sections/AboutFrontend';
import { AboutMe } from '@/pages/OT/sections/AboutMe';
import { Lecture0Goal } from '@/pages/OT/sections/Lecture0Goal';
import {
  GoodDeveloper,
  SeminarContent,
  SeminarDiff,
  SeminarGoal,
} from '@/pages/OT/sections/SeminarGoal';
import { Team } from '@/pages/OT/sections/Team';

export const OT = () => {
  return (
    <Slides
      slides={[
        { title: '오늘 목표: OT & 수업 조금', content: <Lecture0Goal /> },
        { title: '자기소개', content: <AboutMe /> },
        { title: '프론트엔드란?', content: <WhatIsFrontend /> },
        { title: '프론트엔드란?', content: <Websites /> },
        { title: '프론트엔드란?', content: <Webviews /> },
        { title: '세미나 목표', content: <GoodDeveloper /> },
        { title: '세미나 목표', content: <SeminarContent /> },
        { title: '세미나 목표', content: <SeminarGoal /> },
        { title: '세미나 목표', content: <SeminarDiff /> },
        { title: '조별과제', content: <Team /> },
      ]}
    />
  );
};
