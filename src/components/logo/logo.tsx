import { FC } from "react"
import tw from "twin.macro"

const LogoText = tw.span`
  font-bold text-primary font-heading text-white vr-tight-26 md:vr-tight-28
`

export const Logo: FC = () => (
  <LogoText>STRUCT</LogoText>
)
