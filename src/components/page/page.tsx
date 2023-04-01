import { StoryblokComponent } from '@storyblok/react'
import { FC } from 'react'
import { Blok } from 'storyblok-react'

export const Page: FC<Blok<any>> = ({ story }: Blok<any>) => {
  const components = story?.content?.body?.map(blok => (<StoryblokComponent blok={blok} key={blok._uid} />))
  return components
}
