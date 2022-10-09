import { FC } from 'react'
import { Blok } from 'storyblok-react'
import tw from "twin.macro"
import { Editable } from '../editable/editable'

export type DividerProps = {}

const DividerContainer = tw.div``

const Rule = tw.hr``

export const Divider: FC<Blok<DividerProps>> = ({ blok }: ComponentProps<DividerStoryblok>) => {
  const { _uid } = blok

  return (
    <Editable content={blok} key={_uid}>
      <DividerContainer>
        <Rule />
      </DividerContainer>
    </Editable>
  )
}

