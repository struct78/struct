import { FC } from "react"
import tw from "twin.macro"

const LogoText = tw.span`
  text-white font-bold font-heading vr-tight-26 md:text-black md:vr-tight-28
`

export const Logo: FC = () => (
  <LogoText>STRUCT</LogoText>
)
