import { Link as GatsbyLink } from "gatsby"
import tw, { styled } from "twin.macro"

const StyledLink = styled(GatsbyLink)`
  ${tw`text-black underline underline-offset-8 decoration-dotted transition-all duration-slow hover:underline-offset-4 hover:text-orange`}
`

export const Link = (props: any) => <StyledLink {...props}/>
