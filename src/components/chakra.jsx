import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true
}

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac'
  }
}

const theme = extendTheme({ colors, config })

function ChakraUI({ children }) {
  return (
    <ChakraProvider
      initialColorMode={theme.config.initialColorMode}
      theme={theme}
    >
      {children}
    </ChakraProvider>
  )
}

export default ChakraUI
