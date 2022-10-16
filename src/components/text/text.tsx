import { FC } from 'react'
import tw, { styled } from 'twin.macro'
import { render } from 'storyblok-rich-text-react-renderer'
import { TextStoryblok } from '../../@types/storyblok'
import { withBlok } from '../withBlok'

const Container = styled.div`
  p {
    ${tw`vr-normal-16 pb-2`}
  }
`

export const Text: FC<Component<TextStoryblok>> = ({ text }: Component<TextStoryblok>) => {
  return (
    <Container>{render(text)}</Container>
  )
}

export default withBlok((props) => <Text {...props}/>)
