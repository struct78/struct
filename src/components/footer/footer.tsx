import tw from 'twin.macro'
import { PageStoryblok } from '../../@types/storyblok'
import { useContent } from '../../hooks/useContent'
import { useNavigation } from '../../hooks/useNavigation'
import { Heading } from '../heading/heading'
import { Link } from '../link/link'

const FooterWrapper = tw.footer`
  flex bg-primary flex-1
`
const FooterContainer = tw.div`
  flex flex-col flex-wrap grow p-4 md:flex-row lg:mx-auto lg:max-w-3/4
`
const FooterGroup = tw.nav`
  flex flex-col basis-1/2 mb-4 grow-0 shrink-0 lg:basis-1/4 lg:mb-0
`
const FooterSubheading = tw(Heading)`
  text-white font-subheading vr-tight-22 text-left
`
const FooterLink = tw(Link)`
  text-white
`

export const Footer = () => {
  const { footer } = useNavigation()
  const { parseContent } = useContent()

  return (
    <FooterWrapper>
      <FooterContainer>
        {Object.keys(footer).map((group) => {
          const { name, links } = footer[group]
          const { pages } = parseContent<any>(links?.content)
          return (
            <FooterGroup>
              <FooterSubheading size="h5">{name}</FooterSubheading>
              {pages?.map(page => {
                const { full_slug, name, content } = page
                return (
                  <FooterLink to={full_slug}>{name}</FooterLink>
                )
              })}
            </FooterGroup>
          )
        })}
      </FooterContainer>
    </FooterWrapper>
  )
}
