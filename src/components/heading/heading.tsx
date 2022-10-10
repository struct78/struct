import { FC } from 'react'
import { Blok } from 'storyblok-react'
import tw, { styled } from 'twin.macro'
import { HeadingStoryblok } from '../../@types/storyblok'
import { Editable } from '../editable/editable'

export const Tag = styled.h1<Pick<Blok<HeadingStoryblok>, "size" | "textAlignment">>`
  ${tw`font-extrabold font-heading pb-4`}
  ${({ size }) => {
    switch (size) {
      case "h5":
        return tw`vr-normal-20`
      case "h4":
        return tw`vr-normal-22 md:vr-normal-26`
      case "h3":
        return tw`vr-normal-26 md:vr-normal-28`
      case "h2":
        return tw`vr-normal-28 md:vr-normal-38`
      case "h1":
      default:
        return tw`vr-normal-32 md:vr-normal-56`
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

export const Heading: FC<Blok<HeadingStoryblok>> = ({ blok }: Blok<HeadingStoryblok>) => {
  const { _uid, text, size, textAlignment } = blok
  return (
    <Editable blok={blok} key={_uid}>
      <Tag as={size} size={size} textAlignment={textAlignment}>{text}</Tag>
    </Editable>
  )
}
