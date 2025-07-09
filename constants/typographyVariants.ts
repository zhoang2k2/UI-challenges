export enum TYPOGRAPHY_TAG_VARIANT {
  HEAD_1 = "h1",
  HEAD_2 = "h2",
  HEAD_3 = "h3",
  PARAGRAPH = "p",
  SPAN = "span",
}

export const TYPOGRAPHY_CLASSNAME = {
  [TYPOGRAPHY_TAG_VARIANT.HEAD_1]: "text-[32px] font-bold",
  [TYPOGRAPHY_TAG_VARIANT.HEAD_2]: "text-6xl font-bold leading-20",
  [TYPOGRAPHY_TAG_VARIANT.HEAD_3]: "text-4xl font-bold",
  [TYPOGRAPHY_TAG_VARIANT.PARAGRAPH]: "text-base",
  [TYPOGRAPHY_TAG_VARIANT.SPAN]: "text-base",
};
