import { FC, PropsWithChildren } from "react"
import { Global } from "@emotion/core"
import tw, { GlobalStyles as BaseStyles } from "twin.macro"
import { GlobalStyles } from "../../styles/global-styles"
import { Footer } from "../footer/footer"
import { Header } from "../header/header"
import { Container } from "../container/container"
import { Heading } from "../heading/heading"
import { Text } from "../text/text"
import { storyblokInit, apiPlugin } from "@storyblok/react";

storyblokInit({
  accessToken: process.env.GATSBY_STORYBLOK_TOKEN,
  use: [apiPlugin],
  components: {
    container: Container,
    heading: Heading,
    text: Text,
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
