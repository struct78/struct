import { Link as GatsbyLink } from "gatsby"
import isPropValid from "@emotion/is-prop-valid"
import { AnchorHTMLAttributes } from "react"
import tw, { styled } from "twin.macro"
import { withBlok } from "../withBlok"

export const StyledButton = styled(GatsbyLink, {
  shouldForwardProp: prop => isPropValid(prop),
})(({ variant }: ButtonProps) => [
  tw`px-6 py-3 min-w-20 text-black bg-orange transition-all duration-slow rounded-1`,
  variant === "primary" ? tw`bg-orange hover:bg-black hover:text-orange` : null,
  variant === "secondary" ? tw`border-orange bg-white` : null,
])

export type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  text: string
  url: string
  variant: "primary" | "secondary"
}

export const Button = (props: ButtonProps): JSX.Element => {
  const { text, url, ...rest } = props
  console.log(rest)
  return <StyledButton href={url.cached_url} {...rest}>{text}</StyledButton>
}

export default withBlok((props) => <Button {...props} />)
