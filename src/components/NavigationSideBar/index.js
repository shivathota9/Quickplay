import {Component} from 'react'
import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import ThemeContext from '../../context/ThemeContext'

import {
  MobileNavSideBar,
  DesktopNavSideBar,
  NavMenuOptionsContainer,
  NavLink,
  NavMenuOptionItem,
  NavOptionName,
  ContactInfo,
  ContactInfoHeading,
  ContactIconsContainer,
  ContactIconsImage,
  ContactInfoNote,
} from './styledComponents'

class NavigationSideBar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, activeTab, changeActiveTab} = value

          const activeTabBgColor = isDarkTheme ? '#475569' : '#cbd5e1'

          const onClickOptionHome = () => {
            changeActiveTab('Home')
          }

          const onClickOptionTrending = () => {
            changeActiveTab('Trending')
          }

          const onClickOptionGaming = () => {
            changeActiveTab('Gaming')
          }
          const onClickOptionSaved = () => {
            changeActiveTab('Saved')
          }
          return (
            <>
              {/* <MobileNavSideBar>
                <NavMenuOptionItem
                  key="home"
                  bgColor={activeTab === 'Home' ? activeTabBgColor : 'none'}
                  onClick={onClickOptionHome}
                >
                  <Link to="/">
                    <AiFillHome
                      size={25}
                      color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                    />
                    <NavOptionName isDarkTheme={isDarkTheme}>
                      Home
                    </NavOptionName>
                  </Link>
                </NavMenuOptionItem>
                <NavMenuOptionItem
                  key="trending"
                  bgColor={activeTab === 'Trending' ? activeTabBgColor : 'none'}
                  onClick={onClickOptionTrending}
                >
                  <Link to="/trending">
                    <HiFire
                      size={25}
                      color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                    />
                    <NavOptionName isDarkTheme={isDarkTheme}>
                      Trending
                    </NavOptionName>
                  </Link>
                </NavMenuOptionItem>
                <NavMenuOptionItem
                  key="gaming"
                  bgColor={activeTab === 'Gaming' ? activeTabBgColor : 'none'}
                  onClick={onClickOptionGaming}
                >
                  <Link to="/gaming">
                    <SiYoutubegaming
                      size={25}
                      color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                    />
                    <NavOptionName isDarkTheme={isDarkTheme}>
                      Gaming
                    </NavOptionName>
                  </Link>
                </NavMenuOptionItem>
                <NavMenuOptionItem
                  key="saved"
                  bgColor={activeTab === 'Saved' ? activeTabBgColor : 'none'}
                  onClick={onClickOptionSaved}
                >
                  <Link to="/saved-videos">
                    <CgPlayListAdd
                      size={25}
                      color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                    />
                    <NavOptionName isDarkTheme={isDarkTheme}>
                      Saved videos
                    </NavOptionName>
                  </Link>
                </NavMenuOptionItem>
              </MobileNavSideBar> */}

              {/* Desktop View */}

              <DesktopNavSideBar isDarkTheme={isDarkTheme}>
                <NavMenuOptionsContainer>
                  <NavMenuOptionItem
                    key="home"
                    bgColor={activeTab === 'Home' ? activeTabBgColor : 'none'}
                    onClick={onClickOptionHome}
                  >
                    <Link to="/">
                      <AiFillHome
                        size={25}
                        color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                      />
                      <NavOptionName isDarkTheme={isDarkTheme}>
                        Home
                      </NavOptionName>
                    </Link>
                  </NavMenuOptionItem>
                  <NavMenuOptionItem
                    key="trending"
                    bgColor={
                      activeTab === 'Trending' ? activeTabBgColor : 'none'
                    }
                    onClick={onClickOptionTrending}
                  >
                    <Link to="/trending">
                      <HiFire
                        size={25}
                        color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                      />
                      <NavOptionName isDarkTheme={isDarkTheme}>
                        Trending
                      </NavOptionName>
                    </Link>
                  </NavMenuOptionItem>
                  <NavMenuOptionItem
                    key="gaming"
                    bgColor={activeTab === 'Gaming' ? activeTabBgColor : 'none'}
                    onClick={onClickOptionGaming}
                  >
                    <Link to="/gaming">
                      <SiYoutubegaming
                        size={25}
                        color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                      />
                      <NavOptionName isDarkTheme={isDarkTheme}>
                        Gaming
                      </NavOptionName>
                    </Link>
                  </NavMenuOptionItem>
                  <NavMenuOptionItem
                    key="saved"
                    bgColor={activeTab === 'Saved' ? activeTabBgColor : 'none'}
                    onClick={onClickOptionSaved}
                  >
                    <Link to="/saved-videos">
                      <CgPlayListAdd
                        size={25}
                        color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                      />
                      <NavOptionName isDarkTheme={isDarkTheme}>
                        Saved videos
                      </NavOptionName>
                    </Link>
                  </NavMenuOptionItem>
                </NavMenuOptionsContainer>
                <ContactInfo>
                  <ContactInfoHeading isDarkTheme={isDarkTheme}>
                    CONTACT US
                  </ContactInfoHeading>
                  <ContactIconsContainer>
                    <ContactIconsImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                      alt="facebook logo"
                    />
                    <ContactIconsImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                      alt="twitter logo"
                    />
                    <ContactIconsImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                      alt="linked in logo"
                    />
                  </ContactIconsContainer>
                  <ContactInfoNote isDarkTheme={isDarkTheme}>
                    Enjoy! Now to see your channels and recommendations!
                  </ContactInfoNote>
                </ContactInfo>
              </DesktopNavSideBar>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default NavigationSideBar
