import LogRocket from 'logrocket'
import styled from 'styled-components'
import { useCookies } from 'react-cookie'

import { ImageCarousel } from './components/ImageCarousel'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

LogRocket.init('znathy/mango-tree')

function App() {
  const [cookies, setCookie] = useCookies(['name'])

  function onChange() {
    let expireDate = new Date()
    expireDate.setTime(expireDate.getTime() + 1 * 3600 * 1000)

    setCookie('name', 'value', {
      expires: expireDate,
      httpOnly: false,
      path: '/',
      secure: true,
    })
  }

  return (
    <>
      <Header />
      <CookieDiv>
        {!cookies.name && <button onClick={onChange}>Set Cookie</button>}
        {cookies.name && <h3>Welcome!</h3>}
      </CookieDiv>
      <ImageCarousel />
      <Footer />
    </>
  )
}

export default App

const CookieDiv = styled.div`
  margin-top: 15px;
  text-align: center;
`
