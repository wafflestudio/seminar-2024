export const SlideContent = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  return (
    <div className="mb-10 flex flex-col gap-2">
      <h2 className="text-2xl">{title}</h2>
      <p className="mt-4 pl-8 text-xl">{content}</p>
    </div>
  );
};
