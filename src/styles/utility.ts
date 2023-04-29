import isPropValid from "@emotion/is-prop-valid"
import { FC } from "react"
import tw, { styled } from "twin.macro"

export const Mobile = tw.div`
  md:hidden
`
export const Desktop = tw.div`
  hidden md:block
`
export const VisuallyHidden = tw.span`
  sr-only
`

export const styledWithInvalidProps = <T>(tag: string | FC<T>, comparator?: (prop: string) => boolean): ((props) => (props) => JSX.Element) =>
  styled<T>(tag, {
    shouldForwardProp: prop => (comparator ? comparator(prop) || isPropValid(prop) : isPropValid(prop)),
  })
