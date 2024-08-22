import type { KnipConfig } from 'knip';

export default (): KnipConfig => {
  return { exclude: ['dependencies'], project: ['!src/designsystem/ui'] };
};
