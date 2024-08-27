import { Prism } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const CodeSnippet = ({
  code,
  language,
}: {
  code: string[];
  language: 'shell';
}) => {
  return (
    <Prism language={language} style={darcula} showLineNumbers>
      {code.join('\n')}
    </Prism>
  );
};
