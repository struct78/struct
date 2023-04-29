import { StoryblokComponent } from "@storyblok/react"
import tw from "twin.macro"
import { ThirdsStoryblok } from "../../@types/storyblok"
import { Heading } from "../heading/heading"
import { Text } from "../text/text"
import { withBlok } from "../withBlok"

const Container = tw.section`
  my-1 md:my-6
`

const Wrapper = tw.div`
`

const Columns = tw.div`
  grid grid-cols-1 md:grid-cols-3
`

const Column = tw.div`
  flex flex-col items-center
`

export const Thirds = ({ column1, column2, column3, title, copy }: Component<ThirdsStoryblok>) => {
  const column1Stories = column1?.map(child => (<StoryblokComponent blok={child} key={child._uid} />))
  const column2Stories = column2?.map(child => (<StoryblokComponent blok={child} key={child._uid} />))
  const column3Stories = column3?.map(child => (<StoryblokComponent blok={child} key={child._uid} />))

  return (
    <Container>
      <Wrapper>
        <Heading size="h2" textAlignment="left" text={title} />
        <Text text={copy}/>
        <Columns>
          <Column>
            {column1Stories}
          </Column>
          <Column>
            {column2Stories}
          </Column>
          <Column>
            {column3Stories}
          </Column>
        </Columns>
      </Wrapper>
    </Container>
  )
}

export default withBlok((props) => <Thirds {...props} />)
