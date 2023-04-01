import { ElementType } from "react"
import { styled, TwStyle } from "twin.macro"
import { propsToCss, styles } from "../../styles/style-map"

export type BaseProps = ElementType<{
  [key in keyof typeof styles]: Record<string, Record<string, TwStyle>>
}>

export const Base = styled.div<BaseProps>`
  ${(props) => propsToCss(props)}
`
