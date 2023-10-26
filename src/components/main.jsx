import { Box } from "@chakra-ui/layout"


function Main({ children }) {
  return (
    <Box pt={`4rem`}>
      {children}
    </Box>
  )
}

export default Main