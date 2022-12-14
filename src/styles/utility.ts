import tw from "twin.macro"

export const Mobile = tw.div`
  md:hidden
`
export const Desktop = tw.div`
  hidden md:block
`
export const VisuallyHidden = tw.span`
  sr-only
`
