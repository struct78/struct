import { FC } from 'react'
import tw, { styled } from 'twin.macro'
import { render } from 'storyblok-rich-text-react-renderer'
import { TextStoryblok } from '../../@types/storyblok'
import { withBlok } from '../withBlok'
import { StoryblokComponent } from '@storyblok/react'

const Container = styled.div`
  p {
    ${tw`vr-normal-16 pb-2`}
  }

  section {
    ${tw`my-3-6`}
  }
`

export const Text: FC<Component<TextStoryblok>> = ({ text }: Component<TextStoryblok>) => {
  const { content } = text
  return (
    <Container>{content.map((item) => {
      if (item.type === "blok") {
        const { attrs } = item
        const { body } = attrs

        return body.map((blok) => {
          console.log(blok)
          return <StoryblokComponent blok={blok} key={blok._uid} />
        })
      }

      return render({
        type: "doc",
        content: [item]
      })

    })}</Container>
  )
}

export default withBlok((props) => <Text {...props}/>)
