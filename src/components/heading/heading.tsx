import { FC } from 'react'
import tw, { styled } from 'twin.macro'
import { HeadingStoryblok } from '../../@types/storyblok'
import { withBlok } from '../withBlok'

export const Tag = styled.h1<Pick<HeadingStoryblok, "size" | "textAlignment">>`
  ${tw`font-bold font-heading pb-4`}
  ${({ size }) => {
    switch (size) {
      case "h5":
        return tw`vr-normal-20`
      case "h4":
        return tw`vr-normal-22 md:vr-normal-26`
      case "h3":
        return tw`vr-normal-26 md:vr-normal-28`
      case "h2":
        return tw`vr-normal-28 md:vr-normal-56`
      case "h1":
      default:
        return tw`vr-normal-56 md:vr-normal-100`
    }
  }}
  ${({ textAlignment }) => {
    switch (textAlignment) {
      case "left":
        return tw`text-left`
      case "right":
        return tw`text-right`
      case "center":
      default:
        return tw`text-center`
    }
  }}
`

export const Heading: FC<Component<HeadingStoryblok>> = ({ text, size, textAlignment }: Component<HeadingStoryblok>) => {
  return (
    <Tag as={size} size={size} textAlignment={textAlignment}>{text}</Tag>
  )
}

export default withBlok((props) => <Heading {...props} />)
