import { FC } from 'react'
import tw, { styled } from 'twin.macro'
import { render } from 'storyblok-rich-text-react-renderer'
import { TextStoryblok } from '../../@types/storyblok'
import { Blok } from 'storyblok-react'
import { Editable } from '../editable/editable'

const Container = styled.div`
  p {
    ${tw`vr-normal-16 pb-2`}
  }
`

export const Text: FC<Blok<TextStoryblok>> = ({ blok }: Blok<TextStoryblok>) => {
  const { _uid, text } = blok

  return (
    <Editable blok={blok} key={_uid}>
      <Container>{render(text)}</Container>
    </Editable>
  )
}
