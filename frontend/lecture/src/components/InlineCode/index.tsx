export const InlineCode = ({ code }: { code: string }) => {
  return (
    <code className="rounded-md bg-slate-200 px-2 py-1 text-inherit dark:bg-slate-700">
      {code}
    </code>
  );
};
