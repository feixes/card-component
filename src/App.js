import Card from './components/Card'
import GlobalStyles from './global-styles';
import styled, { ThemeProvider } from 'styled-components'
import { useState } from 'react'

const BaseTheme = {
  color: '#222',
  background: '#f2f4f8'
}
const DarkTheme = {
  color: '#fff',
  background: '#222'
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  padding: 1.5rem;
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.background};
`

function App() {

  const [baseTheme, setBaseTheme] = useState(true)

  const toggleTheme = () => {
    setBaseTheme(!baseTheme)
  }

  return (
    <ThemeProvider theme={baseTheme ? BaseTheme : DarkTheme}>
      <GlobalStyles />
      <Container>
        <Card />
        <button className='btn' onClick={toggleTheme}>toggle theme</button>
      </Container>
    </ThemeProvider >
  );
}

export default App;

