import tw from "twin.macro"
import { FiftyFiftyStoryblok } from "../../@types/storyblok"
import { Heading } from "../heading/heading"
import { Text } from "../text/text"
import { withBlok } from "../withBlok"

const Container = tw.section`
  my-1 md:my-6
`

const Wrapper = tw.div`
`

export const FiftyFifty = ({ title, copy }: Component<FiftyFiftyStoryblok>) => {
  return (
    <Container>
      <Wrapper>
        <Heading size="h1" textAlignment="left" text={title} />
        <Text text={copy}/>
      </Wrapper>
    </Container>
  )
}

export default withBlok((props) => <FiftyFifty {...props} />)
