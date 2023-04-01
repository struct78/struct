import tw, { TwStyle } from "twin.macro"
import tailwindStyles from "../../tailwind.default"

export const tailwind = tailwindStyles

export const styles = {
  display: {
    flex: tw`flex`,
    block: tw`block`,
  },
  direction: {
    row: tw`flex flex-row`,
    column: tw`flex flex-col`,
  },
  width: {
    fixed: tw`w-full lg:mx-auto lg:max-w-3/4`,
    full: tw`w-full`,
    ".25": tw`w-full md:w-1/4`,
    ".5": tw`w-full md:w-1/2`,
    ".75": tw`w-full md:w-3/4`,
  },
  height: {
    full: tw`h-full`,
    md: {
      full: tw`md:h-full`,
    },
  },
  justify: {
    left: tw`justify-start`,
    center: tw`justify-center`,
    right: tw`justify-end`,
  },
  align: {
    left: tw`items-start`,
    center: tw`items-center`,
    right: tw`items-end`,
  },
  textAlign: {
    left: tw`text-left`,
    center: tw`text-center`,
    right: tw`text-right`,
  },
  padding: {
    "none": tw`p-0`,
    "small": tw`p-1`,
    "medium": tw`p-2`,
    "large": tw`p-4`,
    "x-large": tw`p-6`,
  },
  paddingTop: {
    "none": tw`pt-0`,
    "small": tw`pt-1`,
    "medium": tw`pt-2`,
    "large": tw`pt-4`,
    "x-large": tw`pt-6`,
  },
  paddingBottom: {
    "none": tw`pb-0`,
    "small": tw`pb-1`,
    "medium": tw`pb-2`,
    "large": tw`pb-4`,
    "x-large": tw`pb-6`,
  },
  paddingRight: {
    "none": tw`pr-0`,
    "small": tw`pr-1`,
    "medium": tw`pr-2`,
    "large": tw`pr-4`,
    "x-large": tw`pr-6`,
  },
  paddingLeft: {
    "none": tw`pl-0`,
    "small": tw`pl-1`,
    "medium": tw`pl-2`,
    "large": tw`pl-4`,
    "x-large": tw`pl-6`,
  },
  margin: {
    "none": tw`m-0`,
    "small": tw`m-1`,
    "medium": tw`m-2`,
    "large": tw`m-4`,
    "x-large": tw`m-6`,
  },
  marginTop: {
    "none": tw`mt-0`,
    "small": tw`mt-1`,
    "medium": tw`mt-2`,
    "large": tw`mt-4`,
    "x-large": tw`mt-6`,
  },
  marginBottom: {
    "none": tw`mb-0`,
    "small": tw`mb-1`,
    "medium": tw`mb-2`,
    "large": tw`mb-4`,
    "x-large": tw`mb-6`,
  },
  marginRight: {
    "none": tw`mr-0`,
    "small": tw`mr-1`,
    "medium": tw`mr-2`,
    "large": tw`mr-4`,
    "x-large": tw`mr-6`,
  },
  marginLeft: {
    "none": tw`ml-0`,
    "small": tw`ml-1`,
    "medium": tw`ml-2`,
    "large": tw`ml-4`,
    "x-large": tw`ml-6`,
  },
  colour: {
    "white": tw`text-white`,
    "black": tw`text-black`,
    "hover": {
      "white": tw`text-white`,
      "black": tw`text-black`,
    },
    "focus": {
      "white": tw`text-white`,
      "black": tw`text-black`,
    },
    "bg": {
      "white": tw`text-white`,
      "black": tw`text-black`,
    },
    "border": {
      "white": tw`text-white`,
      "black": tw`text-black`,
    },
  },
  backgroundColour: {
    "white": tw`text-white`,
    "black": tw`text-black`,
    "none": null,
  },
  gridColumns: {
    1: tw`grid grid-cols-1 gap-2`,
    2: tw`grid grid-cols-2 gap-2`,
    3: tw`grid grid-cols-3 gap-2`,
    4: tw`grid grid-cols-4 gap-2`,
    5: tw`grid grid-cols-5 gap-2`,
    6: tw`grid grid-cols-6 gap-2`,
    "sm": {
      1: tw`sm:grid sm:grid-cols-1 sm:gap-2`,
      2: tw`sm:grid sm:grid-cols-2 sm:gap-2`,
      3: tw`sm:grid sm:grid-cols-3 sm:gap-2`,
      4: tw`sm:grid sm:grid-cols-4 sm:gap-2`,
      5: tw`sm:grid sm:grid-cols-5 sm:gap-2`,
      6: tw`sm:grid sm:grid-cols-6 sm:gap-2`,
    },
    "md": {
      1: tw`md:grid md:grid-cols-1 md:gap-2`,
      2: tw`md:grid md:grid-cols-2 md:gap-2`,
      3: tw`md:grid md:grid-cols-3 md:gap-2`,
      4: tw`md:grid md:grid-cols-4 md:gap-2`,
      5: tw`md:grid md:grid-cols-5 md:gap-2`,
      6: tw`md:grid md:grid-cols-6 md:gap-2`,
    },
    "lg": {
      1: tw`lg:grid lg:grid-cols-1 lg:gap-2`,
      2: tw`lg:grid lg:grid-cols-2 lg:gap-2`,
      3: tw`lg:grid lg:grid-cols-3 lg:gap-2`,
      4: tw`lg:grid lg:grid-cols-4 lg:gap-2`,
      5: tw`lg:grid lg:grid-cols-5 lg:gap-2`,
      6: tw`lg:grid lg:grid-cols-6 lg:gap-2`,
    },
  }
}

export const propsToCss = (props: any) => {
  let classes: TwStyle[] = []

  Object.keys(props).forEach((key: string) => {
    if (!styles[key as keyof typeof styles] || !styles[key][props[key]]) {
      return
    }
    classes.push(styles[key][props[key]])
  })
  return classes
}
