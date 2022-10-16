import { styled } from "twin.macro"
import { StoryblokComponent } from "@storyblok/react"
import { PropsWithChildren } from "react"
import { ContainerStoryblok } from "../../@types/storyblok"
import { Base } from "../base/base"
import { withBlok } from "../withBlok"

const ContainerWrapper = styled(Base)``

export const Container = ({ children, _uid, ...rest }: PropsWithChildren<Component<ContainerStoryblok>>) => {
  if (!Array.isArray(children)) {
    return (
      <ContainerWrapper as="section" {...rest}>
        {children}
      </ContainerWrapper>
    )
  }

  const components = children?.map(child => (<StoryblokComponent blok={child} key={child._uid} />))

  return (
    <ContainerWrapper as="section" {...rest}>
      {components}
    </ContainerWrapper>
  )
}

export default withBlok((props) => <Container {...props} />)
