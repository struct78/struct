import tw from 'twin.macro'
import { useContent } from '../../hooks/useContent'
import { useNavigation } from '../../hooks/useNavigation'
import { Heading } from '../heading/heading'
import { Link } from '../link/link'

const FooterWrapper = tw.footer`
  flex bg-highlight text-black flex-1
`
const FooterContainer = tw.div`
  flex flex-col md:flex-wrap grow p-4 md:flex-row lg:mx-auto lg:max-w-3/4
`
const FooterGroup = tw.nav`
  flex flex-col shrink grow mb-4 md:grow-0 md:shrink-0 md:basis-1/2 lg:basis-1/4 lg:mb-0
`
const FooterSubheading = tw(Heading)`
  from-black to-black font-subheading vr-tight-22 text-left
`
const FooterLink = tw(Link)`
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
                const { full_slug, name } = page
                return (
                  <FooterLink key={full_slug} to={`/${full_slug}`}>{name}</FooterLink>
                )
              })}
            </FooterGroup>
          )
        })}
      </FooterContainer>
    </FooterWrapper>
  )
}
