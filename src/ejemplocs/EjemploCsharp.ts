type TraditionalFailure = {
  text: string;
};

type BrandNewFailure = {
  message: string;
  object?: unknown;
};

type Failure = TraditionalFailure | BrandNewFailure;

const traditionalFailure: TraditionalFailure = {
  text: "Mi error obsoleto",
};

const brandNewFailure: BrandNewFailure = {
  message: "Mi nuevo error",
  object: {},
};

const failureFactory = <T>(text: string, object?: unknown): T => {
  console.error(text);
  return { text } as T;

  // In case T is BrandNewFailure return a different object
  return {
    message: text,
    object,
  } as T;
};

type Constructor<T> = new (...args: any[]) => T;

const typedFailureFactory = <T extends Failure>(
  type: Constructor<T>,
  text: string,
  object?: unknown
): T => {
  console.error(text);
  return type === BrandNewFailure
    ? ({ message: text, object } as T)
    : ({ text } as T);
};

// console.log(typedFailureFactory(BrandNewFailure, brandNewFailure.message, brandNewFailure.object))

export { typedFailureFactory };
