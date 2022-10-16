import tw from "twin.macro"
import { FiftyFiftyStoryblok } from "../../@types/storyblok"
import { Heading } from "../heading/heading"
import { Text } from "../text/text"
import { withBlok } from "../withBlok"

const Container = tw.section``

const Wrapper = tw.div`
  bg-black text-white rounded-1 p-4 md:p-10
`

export const FiftyFifty = ({ title, copy, image }: Component<FiftyFiftyStoryblok>) => {
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