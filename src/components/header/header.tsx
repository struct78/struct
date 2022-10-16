import { useState } from 'react'
import HamburgerMenu from 'react-hamburger-menu'
import ScrollLock from 'react-scrolllock'
import tw, { styled } from 'twin.macro'
import { PageStoryblok } from '../../@types/storyblok'
import { useNavigation } from '../../hooks/useNavigation'
import { Desktop, Mobile, VisuallyHidden } from '../../styles/utility'
import { Link } from '../link/link'
import { Logo } from '../logo/logo'

const HeaderContainer = tw.header`
  w-full fixed bottom-0 bg-black text-white p-2 md:static md:py-2 px-4 md:bg-white md:text-black
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
  tw`fixed bottom-0 left-0 flex flex-col w-full h-full transition-all transform-gpu translate-x-0 bg-black ease-cubic duration-slow z-80 md:static md:bg-white md:items-end`,
  isOpen ? tw`translate-y-0` : tw`translate-y-[100vh]`,
  tw`md:transform-none`,
])

const HeaderNavList = tw.ul`
  vr-normal-16 flex flex-col h-full text-center justify-center md:flex-row md:h-auto md:text-left
`
const HeaderNavListItem = tw.li`
  list-none px-0 py-1 w-full md:w-auto md:px-1 md:py-0
`
const HeaderNavListItemLink = tw(Link)`
  text-white md:text-black
`

export const Header = () => {
  const { header } = useNavigation()
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen((prevState) => !prevState)
  }

  if (!header && !Array.isArray(header)) {
    return null
  }

  const { content } = header
  const { pages }: { pages: PageStoryblok[] } = JSON.parse(content)
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
    <HeaderContainer>
      <ScrollLock isActive={isOpen} />
      <HeaderNav>
        <LogoContainer>
          <Link to="/">
            <VisuallyHidden>
              Home
            </VisuallyHidden>
            <Mobile>
              <Logo fill={'#FFF'} width={60} height={60} />
            </Mobile>
            <Desktop>
              <Logo fill={'#000'} width={60} height={60} />
            </Desktop>
          </Link>
        </LogoContainer>
        <HamburgerMenuContainer>
          <Mobile>
            <HamburgerMenu
              color="#FFF"
              isOpen={isOpen}
              menuClicked={handleClick}
              width={60}
              height={42}
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
                  <HeaderNavListItemLink to={`/${full_slug}`}>{content.navigationLabel || name}</HeaderNavListItemLink>
                </HeaderNavListItem>
              )
            })}
          </HeaderNavList>
        </HeaderNavContainer>
      </HeaderNav>
    </HeaderContainer>
  )
}
