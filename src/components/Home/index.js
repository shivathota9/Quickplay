import {Component} from 'react'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'

import ThemeContext from '../../context/ThemeContext'

import Header from '../Header'
import NavigationSideBar from '../NavigationSideBar'
import HomeVideos from '../HomeVideos'
import FailureView from '../FailureView'

import {
  HomeContainer,
  BannerContainer,
  BannerImage,
  BannerText,
  BannerButton,
  BannerLeftPart,
  BannerRightPart,
  BannerCloseButton,
  SearchContainer,
  SearchInput,
  SearchIconContainer,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    homeVideos: [],
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
    bannerDisplay: 'flex',
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    const {searchInput} = this.state
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      }))
      this.setState({
        homeVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onCloseBanner = () => {
    this.setState({bannerDisplay: 'none'})
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getSearchResults = () => {
    this.getVideos()
  }

  onRetry = () => {
    this.setState({searchInput: ''}, this.getVideos)
  }

  renderVideosView = () => {
    const {homeVideos} = this.state
    return <HomeVideos homeVideos={homeVideos} onRetry={this.onRetry} />
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderHomeVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {searchInput, bannerDisplay} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
          const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
          const display = bannerDisplay

          return (
            <>
              <Header />
              <NavigationSideBar />
              <HomeContainer data-testid="home" bgColor={bgColor}>
                <BannerContainer data-testid="banner" display={display}>
                  <BannerLeftPart>
                    <BannerImage
                      src="data:image/png;base64,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"
                      alt="nxt watch logo"
                    />
                    <BannerText>
                      Buy Nxt Watch Premium prepaid plans with <br /> UPI
                    </BannerText>
                    <BannerButton type="button">GET IT NOW</BannerButton>
                  </BannerLeftPart>
                  <BannerRightPart>
                    <BannerCloseButton
                      data-testid="close"
                      onClick={this.onCloseBanner}
                    >
                      <AiOutlineClose size={25} />
                    </BannerCloseButton>
                  </BannerRightPart>
                </BannerContainer>
                <SearchContainer>
                  <SearchInput
                    type="search"
                    placeholder="Search"
                    value={searchInput}
                    onChange={this.onChangeInput}
                    color={textColor}
                  />
                  <SearchIconContainer
                    type="button"
                    data-testid="searchButton"
                    onClick={this.getSearchResults}
                  >
                    <AiOutlineSearch size={20} />
                  </SearchIconContainer>
                </SearchContainer>
                {this.renderHomeVideos()}
              </HomeContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
