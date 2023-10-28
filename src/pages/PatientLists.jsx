import { useDispatch, useSelector } from 'react-redux'
import {
  Box,
  Button,
  Container,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr
} from '@chakra-ui/react'
import { useEffect } from 'react'

import Main from '../components/main'
import { fetchPatients } from '../features/patientsReducer'
import Loading from '../components/loading-spinner'
import { NavLink } from 'react-router-dom'
import PatientModal from '../components/patients-modal'

function PatientLists() {
  const dispatch = useDispatch()
  const { patients, status, error } = useSelector(state => state.patients)
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPatients())
    }
  }, [status, dispatch])

  return (
    <Main>
      <Box
        mt={`3.6rem`}
        display={`flex`}
        flexDir={`column`}
        justifyContent={`center`}
        alignItems={`center`}
      >
        {status === 'loading' && <Loading />}
        {status === 'success' && (
          <Box>
            <Container textAlign={`center`} fontSize={`2.24rem`}>
              Patient List
            </Container>

            <Box textAlign={`center`} mb={2}>
              <PatientModal />
            </Box>

            <TableContainer overflow={`auto`}>
              <Table size={`lg`} variant={`striped`} colorScheme="teal">
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                    <Th isNumeric>Age</Th>
                    <Th>Actions</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {patients.map((item, index) => (
                    <Tr key={index}>
                      <Td>{item.name}</Td>
                      <Td isNumeric>{item.age}</Td>
                      <Td>
                        <Button
                          as={NavLink}
                          to={`/patients/${item._id}`}
                          colorScheme="yellow"
                          variant={`ghost`}
                        >
                          View
                        </Button>
                        <Button colorScheme="red" variant={`ghost`}>
                          Delete
                        </Button>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        )}
        {status === 'error' && <Error message={error} />}
      </Box>
    </Main>
  )
}

export default PatientLists
