import { styled } from "twin.macro"
import { Editable } from "../editable/editable"
import { Base } from "../base/base"
import { StoryblokComponent } from "@storyblok/react"

const ContainerWrapper = styled(Base)`
  p-10
`

export const Container = ({ blok }) => {
  const { children, _uid, ...rest } = blok
  const components = children.map(child => (<StoryblokComponent blok={child} key={child._uid} />))

  return (
    <Editable blok={blok} key={_uid}>
      <ContainerWrapper as="section" {...rest}>
        {components}
      </ContainerWrapper>
    </Editable>
  )
}
