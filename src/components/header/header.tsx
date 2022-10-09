import tw, { styled } from 'twin.macro'
import { PageStoryblok } from '../../@types/storyblok'
import { useNavigation } from '../../hooks/useNavigation'
import { Desktop, Mobile } from '../../styles/utility'
import { Link } from '../link/link'
import { Logo } from '../logo/logo'

const HeaderContainer = tw.header`
  bg-white text-black py-2 px-4
`
const LogoContainer = tw.div`
`
const HeaderNav = tw.nav`
  flex flex-row flex-1 justify-between
`
const HeaderNavContainer = tw.div`
  flex items-center
`
const HeaderNavList = tw.ul`
  vr-normal-16 flex text-black hover:text-grey
`
const HeaderNavListItem = tw.li`
  list-none px-0-4
`
const HeaderNavListItemLink = styled(Link)`
  ${tw`text-black`}
`

export const Header = () => {
  const { header } = useNavigation()

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
      <HeaderNav>
        <LogoContainer>
          <Mobile>
            <Link to="/">
              <Logo id="mobile-logo" fill={'black'} width={40} height={40} />
            </Link>
          </Mobile>
          <Desktop>
            <Link to="/">
              <Logo id="desktop-logo" fill={'black'} width={80} height={80} />
            </Link>
          </Desktop>
        </LogoContainer>
        <HeaderNavContainer>
          <HeaderNavList>
            {tree?.map((page, i) => {
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
