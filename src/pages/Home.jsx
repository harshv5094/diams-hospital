import { Box, Button, Container } from '@chakra-ui/react'
import Main from '../components/main'
import { IoLogoGithub } from 'react-icons/io5'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <Main>
      <Container
        mt={`8rem`}
        display={`flex`}
        flexDir={`column`}
        justifyContent={`center`}
        textAlign={`center`}
        alignItems={`center`}
      >
        <Box mb={`0.8rem`} fontWeight={600} fontSize={`2.4rem`}>
          Welcome to Diams Hospital
        </Box>

        <Box mb={`1rem`} fontSize={`1.2rem`}>
          This project is my assignment of neog camp of using redux toolkit.
        </Box>

        <Button
          as={NavLink}
          leftIcon={<IoLogoGithub />}
          rightIcon={<ArrowForwardIcon />}
          colorScheme="green"
          to="https://github.com/harshv5094/diams-hospital"
        >
          View Source Code
        </Button>
      </Container>
    </Main>
  )
}

export default Home
