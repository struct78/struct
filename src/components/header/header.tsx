import { Link as GatsbyLink } from "gatsby"
import { useState } from 'react'
import HamburgerMenu from 'react-hamburger-menu'
import ScrollLock from 'react-scrolllock'
import tw, { styled } from 'twin.macro'
import { PageStoryblok } from '../../@types/storyblok'
import { useContent } from "../../hooks/useContent"
import { useNavigation } from '../../hooks/useNavigation'
import { Mobile, VisuallyHidden } from '../../styles/utility'
import { Link } from '../link/link'
import { Logo } from '../logo/logo'

const HeaderWrapper = tw.header`
  w-full bg-primary
`
const HeaderContainer = tw.div`
  w-full fixed bottom-0 bg-primary text-white p-2 md:static md:py-2 px-4 md:bg-primary md:text-black lg:mx-auto lg:max-w-3/4
`
const HamburgerMenuContainer = tw.div`
  flex items-end z-100 -mt-0-4
`
const LogoContainer = tw.div`
  z-100
`
const HeaderNav = tw.nav`
  flex flex-row flex-1 justify-between items-center
`
const HeaderNavContainer = styled.div<{ isOpen: boolean }>(({ isOpen }) => [
  tw`fixed bottom-0 left-0 flex flex-col w-full h-full transition-all translate-x-0 bg-black shadow-md shadow-white bg-primary transform-gpu ease-cubic duration-slow z-80 md:static md:items-end md:shadow-none`,
  isOpen ? tw`translate-y-0` : tw`translate-y-[100vh]`,
  tw`md:transform-none`,
])

const HeaderNavList = tw.ul`
  flex flex-col h-full p-0 text-center justify-center md:flex-row md:text-left
`
const HeaderNavListItem = tw.li`
  list-none px-0 py-1 w-full md:w-auto md:px-1 md:py-0
`
const HeaderNavListItemLink = tw(Link)`
  text-white font-subheading vr-tight-22
`

export const Header = () => {
  const { parseContent } = useContent()
  const { header } = useNavigation()
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen((prevState) => !prevState)
  }

  if (!header && !Array.isArray(header)) {
    return null
  }

  const { content } = header
  const { pages }: { pages: PageStoryblok[] } = parseContent<any>(content)
  const treeMap: Record<string, boolean> = {}
  const tree = pages
    .map((page) => {
      const {
        content: { navigationParentFolder },
      } = page

      if (treeMap[navigationParentFolder]) {
        return null
      }

      if (navigationParentFolder && !treeMap[navigationParentFolder]) {
        treeMap[navigationParentFolder] = true

        return pages.filter(({ content: { navigationParentFolder: subFolder } }) => {
          return subFolder === navigationParentFolder
        })
      }

      return page
    })
    .filter((page) => !!page)

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <ScrollLock isActive={isOpen} />
        <HeaderNav>
          <LogoContainer>
            <GatsbyLink to="/">
              <VisuallyHidden>Home</VisuallyHidden>
              <Logo />
            </GatsbyLink>
          </LogoContainer>
          <HamburgerMenuContainer>
            <Mobile>
              <HamburgerMenu
                color="#FFF"
                isOpen={isOpen}
                menuClicked={handleClick}
                width={32}
                height={24}
                strokeWidth={2}
              />
            </Mobile>
          </HamburgerMenuContainer>
          <HeaderNavContainer isOpen={isOpen}>
            <HeaderNavList>
              {tree?.map((page) => {
                const { full_slug, name, content } = page
                return (
                  <HeaderNavListItem key={full_slug}>
                    <HeaderNavListItemLink to={`/${full_slug}`}>
                      {content.navigationLabel || name}
                    </HeaderNavListItemLink>
                  </HeaderNavListItem>
                )
              })}
            </HeaderNavList>
          </HeaderNavContainer>
        </HeaderNav>
      </HeaderContainer>
    </HeaderWrapper>
  )
}
