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
    | 'Tailwind CSS'
    | 'S3'
    | 'CloudFront'
    | 'Route 53'
    | 'Azure'
    | 'Google Cloud'
    | 'Figma'
    | 'Zeplin'
    | 'CSS Modules'
    | 'Next.js'
    | 'Vercel'
    | 'Turbopack'
    | 'Turborepo'
    | 'Create React App'
    | 'GitHub Copilot'
    | 'React Router'
    | 'Axios'
    | 'Svelte'
    | 'GitHub Actions';
}) => {
  const image = {
    Zustand:
      'https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg',
    Jotai: 'https://cdn.candycode.com/jotai/jotai-mascot.png',
    Redux: 'https://redux.js.org/img/redux.svg',
    'Tanstack Query':
      'https://seeklogo.com/images/R/react-query-logo-1340EA4CE9-seeklogo.com.png',
    SWR: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi42tpID7bbxVYGkhd0BNQzgf1NvcABZZ8KA&s',
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
    S3: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Amazon-S3-Logo.svg/1712px-Amazon-S3-Logo.svg.png',
    CloudFront: 'https://cdn.worldvectorlogo.com/logos/aws-cloudfront.svg',
    Azure:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/2048px-Microsoft_Azure.svg.png',
    'Google Cloud':
      'https://static-00.iconduck.com/assets.00/google-cloud-icon-2048x1646-7admxejz.png',
    'Route 53':
      'https://static-00.iconduck.com/assets.00/aws-route53-icon-212x256-16an9num.png',
    Figma:
      'https://upload.wikimedia.org/wikipedia/commons/a/ad/Figma-1-logo.png',
    Zeplin:
      'https://static-00.iconduck.com/assets.00/apps-zeplin-icon-2048x2048-qh5y1ogk.png',
    'CSS Modules':
      'https://raw.githubusercontent.com/css-modules/logos/master/css-modules-logo.png',
    'Next.js':
      'https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png',
    Vercel: 'https://www.svgrepo.com/show/327408/logo-vercel.svg',
    Turbopack:
      'https://seeklogo.com/images/T/turbopack-icon-logo-77EE129FEC-seeklogo.com.png',
    Turborepo:
      'https://seeklogo.com/images/T/turborepo-logo-D9CF2C830E-seeklogo.com.png',
    'Create React App':
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf8yndOQhIaFf36hkWn9w6UAff4nmPREbmvQ&s',
    'GitHub Copilot':
      'https://seeklogo.com/images/G/github-copilot-logo-C25AFBDF08-seeklogo.com.png',
    'React Router':
      'https://static-00.iconduck.com/assets.00/react-router-icon-2048x1116-jfeevj0l.png',
    Axios: 'https://axios-http.com/assets/favicon.ico',
    Svelte:
      'https://seeklogo.com/images/S/svelte-logo-E3497608CB-seeklogo.com.png',
    'GitHub Actions':
      'https://seeklogo.com/images/G/github-actions-logo-031704BDC6-seeklogo.com.png',
  }[stack];

  return (
    <span className="inline-flex items-center gap-2 rounded-md bg-slate-200 py-1 pl-2 pr-3 text-xl dark:bg-slate-700">
      <img src={image} className="inline h-6 w-6 rounded object-contain" />
      <span>{stack}</span>
    </span>
  );
};
