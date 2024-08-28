import { Prism } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const CodeSnippet = ({
  code,
  language,
}: {
  code: string[];
  language: 'shell' | 'json' | 'html' | 'css' | 'javascript' | 'typescript';
}) => {
  return (
    <Prism
      language={language}
      style={darcula}
      showLineNumbers
      customStyle={{ fontSize: 16 }}
    >
      {code.join('\n')}
    </Prism>
  );
};
