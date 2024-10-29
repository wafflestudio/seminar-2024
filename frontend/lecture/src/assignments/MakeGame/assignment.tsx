import { Fragment } from 'react';

import { getAssignmentItem } from '@/assignments';
import { CodeSnippet } from '@/components/CodeSnippet';
import { ExternalLink } from '@/components/ExternalLink';
import { AssetDescriptionLayout } from '@/components/SlideLayout';
import { useToast } from '@/designsystem/hooks/use-toast';
import { Badge } from '@/designsystem/ui/badge';
import { Button } from '@/designsystem/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/designsystem/ui/dialog';

import pic from './pic.png';

const logic = [
  `/**`,
  ` * 2048 게임에서, Map을 특정 방향으로 이동했을 때 결과를 반환하는 함수입니다.`,
  ` * @param map 2048 맵. 빈 공간은 null 입니다.`,
  ` * @param direction 이동 방향`,
  ` * @returns 이동 방향에 따른 결과와 이동되었는지 여부`,
  ` */`,
  `export const moveMapIn2048Rule = (`,
  `  map: Map2048,`,
  `  direction: Direction,`,
  `): MoveResult => {`,
  `  if (!validateMapIsNByM(map)) throw new Error("Map is not N by M");`,
  ``,
  `  const rotatedMap = rotateMapCounterClockwise(map, rotateDegreeMap[direction]);`,
  ``,
  `  const { result, isMoved } = moveLeft(rotatedMap);`,
  ``,
  `  return {`,
  `    result: rotateMapCounterClockwise(result, revertDegreeMap[direction]),`,
  `    isMoved,`,
  `  };`,
  `};`,
  ``,
  `const validateMapIsNByM = (map: Map2048) => {`,
  `  const firstColumnCount = map[0].length;`,
  `  return map.every((row) => row.length === firstColumnCount);`,
  `};`,
  ``,
  `const rotateMapCounterClockwise = (`,
  `  map: Map2048,`,
  `  degree: 0 | 90 | 180 | 270,`,
  `): Map2048 => {`,
  `  const rowLength = map.length;`,
  `  const columnLength = map[0].length;`,
  ``,
  `  switch (degree) {`,
  `    case 0:`,
  `      return map;`,
  `    case 90:`,
  `      return Array.from({ length: columnLength }, (_, columnIndex) =>`,
  `        Array.from(`,
  `          { length: rowLength },`,
  `          (_, rowIndex) => map[rowIndex][columnLength - columnIndex - 1],`,
  `        ),`,
  `      );`,
  `    case 180:`,
  `      return Array.from({ length: rowLength }, (_, rowIndex) =>`,
  `        Array.from(`,
  `          { length: columnLength },`,
  `          (_, columnIndex) =>`,
  `            map[rowLength - rowIndex - 1][columnLength - columnIndex - 1],`,
  `        ),`,
  `      );`,
  `    case 270:`,
  `      return Array.from({ length: columnLength }, (_, columnIndex) =>`,
  `        Array.from(`,
  `          { length: rowLength },`,
  `          (_, rowIndex) => map[rowLength - rowIndex - 1][columnIndex],`,
  `        ),`,
  `      );`,
  `  }`,
  `};`,
  ``,
  `const moveLeft = (map: Map2048): MoveResult => {`,
  `  const movedRows = map.map(moveRowLeft);`,
  `  const result = movedRows.map((movedRow) => movedRow.result);`,
  `  const isMoved = movedRows.some((movedRow) => movedRow.isMoved);`,
  `  return { result, isMoved };`,
  `};`,
  ``,
  `const moveRowLeft = (row: Cell[]): { result: Cell[]; isMoved: boolean } => {`,
  `  const reduced = row.reduce(`,
  `    (acc: { lastCell: Cell; result: Cell[] }, cell) => {`,
  `      if (cell === null) {`,
  `        return acc;`,
  `      } else if (acc.lastCell === null) {`,
  `        return { ...acc, lastCell: cell };`,
  `      } else if (acc.lastCell === cell) {`,
  `        return { result: [...acc.result, cell * 2], lastCell: null };`,
  `      } else {`,
  `        return { result: [...acc.result, acc.lastCell], lastCell: cell };`,
  `      }`,
  `    },`,
  `    { lastCell: null, result: [] },`,
  `  );`,
  ``,
  `  const result = [...reduced.result, reduced.lastCell];`,
  `  const resultRow = Array.from(`,
  `    { length: row.length },`,
  `    (_, i) => result[i] ?? null,`,
  `  );`,
  ``,
  `  return {`,
  `    result: resultRow,`,
  `    isMoved: row.some((cell, i) => cell !== resultRow[i]),`,
  `  };`,
  `};`,
  ``,
  `const rotateDegreeMap: DirectionDegreeMap = {`,
  `  up: 90,`,
  `  right: 180,`,
  `  down: 270,`,
  `  left: 0,`,
  `};`,
  ``,
  `const revertDegreeMap: DirectionDegreeMap = {`,
  `  up: 270,`,
  `  right: 180,`,
  `  down: 90,`,
  `  left: 0,`,
  `};`,
  ``,
  `type Cell = number | null;`,
  `export type Map2048 = Cell[][];`,
  `type Direction = "up" | "left" | "right" | "down";`,
  `type RotateDegree = 0 | 90 | 180 | 270;`,
  `type DirectionDegreeMap = Record<Direction, RotateDegree>;`,
  `type MoveResult = { result: Map2048; isMoved: boolean };`,
];

const CopyButton = () => {
  const { toast } = useToast();

  return (
    <Button
      onClick={() => {
        window.navigator.clipboard
          .writeText(logic.join('\n'))
          .then(() => {
            toast({ title: '복사되었습니다.' });
          })
          .catch(() => {
            toast({ title: '복사에 실패했습니다.' });
          });
      }}
    >
      복사하기
    </Button>
  );
};

export const makeGameAssignment = getAssignmentItem({
  title: '2048 클론코딩',
  due: new Date('2024-09-24 23:59:59'),
  member: '개인',
  element: (
    <div className="flex h-full items-center justify-center">
      <AssetDescriptionLayout
        asset={<img src={pic} />}
        description={[
          <Fragment key="0">
            <ExternalLink href="https://play2048.co/" /> 를 클론코딩해옵니다.
          </Fragment>,
          '규칙을 잘 모르신다면 몇 판 해 보시면 바로 아실 거예요',
          '오른쪽 사진처럼, 4x4 게임판이 있어야 합니다.',
          '아직 CSS 안 배웠으니 스타일은 못생겨도 됩니다.',
          '방향키로 조작 가능해야 합니다.',
          '2048 대신, 128을 만들었으면 게임이 끝나게 해 주세요.',
          '게임이 끝났을 때 ui는 적당하게 구현해주세요.',
          '그리고 아래 기능들 중 하나 이상을 추가 구현해 주세요.',
          <ul key="1" className="flex list-disc flex-col gap-2 pl-6">
            <li>
              새로고침 시 게임판 유지 <Badge>난이도 하</Badge>
            </li>
            <li>
              점수 표시 <Badge>난이도 중</Badge>
            </li>
            <li>
              undo 버튼을 통한 undo 기능 <Badge>난이도 중</Badge>
            </li>
            <li>
              블럭 이동 시 애니메이션 <Badge>난이도 상</Badge>
            </li>
          </ul>,
          <div key="2" className="pt-12">
            계산 로직 혹시 도움이 될까 해서 만들어놨는데 쓰셔도 됩니다{' '}
            <Dialog>
              <DialogTrigger>
                <Button>👉 코드 보기</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="flex justify-between pr-10">
                    맵 이동 계산 로직 <CopyButton />
                  </DialogTitle>
                  <DialogDescription className="max-h-[300px] overflow-y-scroll">
                    <CodeSnippet code={logic} language="typescript" />
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>,
        ]}
      />
    </div>
  ),
});
