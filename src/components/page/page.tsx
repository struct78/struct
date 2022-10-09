import { FC } from 'react'
import { Blok } from 'storyblok-react'
import { useStoryblok } from '../../hooks/useStoryblok'
import { Editable } from "../editable/editable"
import { Resolver } from '../resolver/resolver'

export const Page: FC<Blok<any>> = ({ story: originalStory, location }: Blok<any>) => {
  const story = useStoryblok(originalStory, location)
  const content = typeof story.content === "string" ? JSON.parse(story.content) : story.content
  const resolvedComponents = content.body && content.body.map((child: Blok<any>) => <Resolver blok={child} key={child._uid}/>)
  return (
    <Editable blok={story} key={story._uid}>
      {resolvedComponents}
    </Editable>
  )
}
