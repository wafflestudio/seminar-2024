import { describe, expect, it } from 'vitest';

import { formatDate } from './formatDate';

describe('formatDate', () => {
  it('MM.DD 형태로 포매팅이 된다', () => {
    const date = new Date('2001.03.25');

    expect(formatDate(date, ({ MM, DD }) => `${MM}월 ${DD}일`)).toBe(
      '03월 25일',
    );
  });
});
