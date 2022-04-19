import React from 'react'
import { GlobalStyles } from './Components/StyledComponents/GlobalStyles'
import { SocialsSection } from './Components/StyledComponents/SocialsContainer.styled'
import { Contacts } from './Sections/Contacts'
import { Home } from './Sections/Home'
import { Projects } from './Sections/Projects'
import { Services } from './Sections/Services'

export const App = () => {
  return (
    <>
      <GlobalStyles/>
      <Home/>
      <SocialsSection/>
      <Services/>
      <Projects/>
      <Contacts/>
    </>
  )
}
