import { Global } from "@emotion/core"
import { storyblokInit, apiPlugin } from "@storyblok/react"
import { FC, PropsWithChildren } from "react"
import tw, { GlobalStyles as BaseStyles } from "twin.macro"
import { GlobalStyles } from "../../styles/global-styles"
import { Footer } from "../footer/footer"
import { Header } from "../header/header"

// Dynamic components
import Button from "../button/button"
import Container from "../container/container"
import Heading from "../heading/heading"
import Text from "../text/text"
import FiftyFifty from "../fifty-fifty/fifty-fifty"

storyblokInit({
  accessToken: process.env.GATSBY_STORYBLOK_TOKEN,
  use: [apiPlugin],
  components: {
    button: Button,
    container: Container,
    heading: Heading,
    text: Text,
    "fifty-fifty": FiftyFifty,
  }
});

const Wrapper = tw.div``
const Main = tw.main``

export const Layout: FC<PropsWithChildren> = ({ children }) => (
  <Wrapper>
    <Global styles={GlobalStyles} />
    <BaseStyles/>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </Wrapper>
)
