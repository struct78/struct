import { Link as GatsbyLink } from "gatsby"
import isPropValid from "@emotion/is-prop-valid"
import { AnchorHTMLAttributes } from "react"
import tw, { styled } from "twin.macro"
import { withBlok } from "../withBlok"
import { propsToCss } from "../../styles/style-map"

export const StyledButton = styled(GatsbyLink, {
  shouldForwardProp: prop => isPropValid(prop),
})(({ variant, ...rest }: ButtonProps) => [
  tw`block text-white transition-all px-3-4 py-1-4 md:px-4 md:py-2 font-subheading min-w-10 duration-slow rounded-1`,
  tw`border-2 border-solid bg-primary border-primary hover:bg-white hover:text-primary hover:border-primary`,
  variant === "secondary" ? tw`bg-white border-2 border-solid text-primary border-primary hover:bg-primary hover:text-white hover:border-primary` : null,
  ...propsToCss(rest),
])

export type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  text: string
  url: string
  variant: "primary" | "secondary"
  marginLeft: string
  marginRight: string
}

export const Button = (props: ButtonProps): JSX.Element => {
  const { text, url, ...rest } = props
  return <StyledButton href={url.cached_url} {...rest}>{text}</StyledButton>
}

export default withBlok((props) => <Button {...props} />)
