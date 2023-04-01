import { Link as GatsbyLink } from "gatsby"
import tw, { styled } from "twin.macro"

const StyledLink = styled(GatsbyLink)`
  ${tw`text-black underline transition-all underline-offset-8 decoration-dotted duration-slow hover:underline-offset-4`}
`

export const Link = (props: any) => <StyledLink {...props}/>
