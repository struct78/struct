import tw from "twin.macro"
import { IconStoryblok } from "../../@types/storyblok"
import { withBlok } from "../withBlok"
import * as icons from "react-icons/md"
import { styledWithInvalidProps } from "../../styles/utility"

const styles = {
  primary: tw`text-primary`,
  secondary: tw`text-secondary`,
  tertiary: tw`text-tertiary`,
}

const Container = styledWithInvalidProps("div")(({ colour }) => [
  colour ? styles[colour] : styles.primary,
])

export const Icon = ({ colour, size, icon }: Component<IconStoryblok>) => {
  const Component = icons[icon]
  return (
    <Container colour={colour}>
      <Component size={size}/>
    </Container>
  )
}

export default withBlok((props) => <Icon {...props} />)
