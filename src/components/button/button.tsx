import { Link as GatsbyLink } from "gatsby"
import isPropValid from "@emotion/is-prop-valid"
import { AnchorHTMLAttributes } from "react"
import tw, { styled } from "twin.macro"
import { withBlok } from "../withBlok"
import { propsToCss } from "../../styles/style-map"
import { MultilinkStoryblok } from "../../@types/storyblok"

export const StyledButton = styled(GatsbyLink, {
  shouldForwardProp: (prop: string) => isPropValid(prop),
})(({ variant, ...rest }: ButtonProps) => [
  tw`block px-2 py-2 text-white transition-all md:px-4 md:py-2 font-subheading min-w-10 duration-slow rounded-1-2`,
  tw`border-2 border-solid border-primary bg-gradient-to-r from-primary to-secondary hover:text-primary hover:from-white hover:to-white`,
  variant === "secondary" ? tw`bg-transparent bg-white border-2 border-solid from-white to-white text-primary border-primary hover:text-white hover:bg-gradient-to-l hover:from-primary hover:to-secondary` : null,
  ...propsToCss(rest),
])

export type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  text: string
  url: MultilinkStoryblok
  variant: "primary" | "secondary"
  marginLeft: string
  marginRight: string
}

export const Button = (props: ButtonProps): JSX.Element => {
  const { text, url, ...rest } = props
  return <StyledButton href={url.cached_url} {...rest}>{text}</StyledButton>
}

export default withBlok((props) => <Button {...props} />)
