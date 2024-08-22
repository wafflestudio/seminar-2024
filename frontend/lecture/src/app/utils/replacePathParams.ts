type Param<A extends string> = A extends `:${infer B}` ? B : never;
type PathParamUnion<P> = P extends `/${infer A}/${infer B}`
  ? Param<A> | PathParamUnion<`/${B}`>
  : P extends `/${infer A}`
    ? Param<A>
    : never;
type PathParamObj<P extends string> = Record<
  PathParamUnion<P>,
  string | number
>;

export const replacePathParams = <P extends string>(
  path: P,
  params: PathParamObj<P>,
) => {
  const map: Partial<Record<string, string | number>> = params;
  return path.replace(/:[a-zA-Z]+/g, (match) => {
    const value = map[match.slice(1)];
    if (value === undefined) return match;
    return value.toString();
  });
};
