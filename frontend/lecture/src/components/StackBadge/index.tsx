export const StackBadge = ({
  stack,
}: {
  stack:
    | 'Zustand'
    | 'Jotai'
    | 'Redux'
    | 'Tanstack Query'
    | 'SWR'
    | 'Recoil'
    | 'MobX'
    | 'Sangte'
    | 'Redux Toolkit'
    | 'React'
    | 'Claude Sonnet'
    | 'v0'
    | 'CSS'
    | 'styled-components'
    | 'emotion'
    | 'Tailwind CSS';
}) => {
  const image = {
    Zustand:
      'https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg',
    Jotai: 'https://cdn.candycode.com/jotai/jotai-mascot.png',
    Redux: 'https://redux.js.org/img/redux.svg',
    'Tanstack Query':
      'https://seeklogo.com/images/R/react-query-logo-1340EA4CE9-seeklogo.com.png',
    SWR: null,
    Recoil:
      'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/298/square_480/recoil.png',
    MobX: 'https://mobx.js.org/assets/mobx.png',
    Sangte:
      'https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci8yYjIzMTU0NTBkZjRmNzc3MmM0NTA5ZWQxNDEwNmI1OD9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.sJRQi6w4lEc74LfDpbf1VwBxVP8KEBuqEz601WqDH1s',
    'Redux Toolkit': 'https://redux.js.org/img/redux.svg',
    React:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo8BG6UD3b_Fowh4gtwIjw2GPTWQQ30uBy-w&s',
    'Claude Sonnet':
      'https://qph.cf2.poecdn.net/main-thumb-pb-1019-200-ecyfizaydihfkxfwhwjlruyjdyoxengr.jpeg',
    v0: 'https://v0.dev/apple-icon.png?0ef31a19cc582b82',
    CSS: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/768px-CSS3_logo.svg.png',
    'styled-components': 'https://styled-components.com/logo.png',
    emotion: 'https://avatars.githubusercontent.com/u/31557565?s=200&v=4',
    'Tailwind CSS':
      'https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png',
  }[stack];

  return (
    <span className="inline-flex items-center gap-2 rounded-md bg-slate-200 py-1 pl-2 pr-3 text-xl dark:bg-slate-700">
      {image !== null && <img src={image} className="inline w-6 rounded" />}
      <span>{stack}</span>
    </span>
  );
};
