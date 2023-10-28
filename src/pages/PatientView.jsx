import { useDispatch, useSelector } from 'react-redux'
import Main from '../components/main'
import { useEffect } from 'react'
import { fetchPatients } from '../features/patientsReducer'
import Loading from '../components/loading-spinner'
import Error from '../components/error-box'
import { Box, Button, Container, HStack, VStack } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { useNavigate, useParams } from 'react-router-dom'
import PatientModal from '../components/patients-modal'

function PatientView() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let { patientID } = useParams()
  const { patients, status, error } = useSelector(state => state.patients)
  const patient = patients.find(x => x._id === patientID)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPatients())
    }
  }, [status, dispatch])

  return (
    <Main>
      <Box
        mt={`3.43rem`}
        display={`flex`}
        flexDir={`column`}
        justifyContent={`center`}
        alignItems={`center`}
      >
        {status === 'loading' && <Loading />}
        {status === 'success' && (
          <VStack>
            <Container
              textAlign={`center`}
              maxW={`container.sm`}
              fontSize={`2.24rem`}
            >
              Patient Infomation
            </Container>

            <Box fontSize={`1.26rem`} as="section">
              <span style={{ fontSize: '1.3rem' }}>
                <b>Name:</b>
              </span>{' '}
              {patient.name}
              <br />
              <span style={{ fontSize: '1.3rem' }}>
                <b>Age:</b>
              </span>{' '}
              {patient.age}
              <br />
              <span style={{ fontSize: '1.3rem' }}>
                <b>Gender:</b>
              </span>{' '}
              {patient.gender}
              <br />
              <span style={{ fontSize: '1.3rem' }}>
                <b>Medical History:</b>
              </span>{' '}
              {patient.medicalHistory}
              <br />
              <span style={{ fontSize: '1.3rem' }}>
                <b>Assigned Ward Number:</b>
              </span>{' '}
              {patient.assignedWard.join(', ')}
              <br />
              <span style={{ fontSize: '1.3rem' }}>
                <b>Phone Number:</b>
              </span>{' '}
              {patient.phoneNumber}
              <br />
              <span style={{ fontSize: '1.3rem' }}>
                <b>Address:</b>
              </span>{' '}
              {patient.address}
              <br />
            </Box>

            <HStack>
              <Button
                onClick={() => navigate(-1)}
                colorScheme="yellow"
                leftIcon={<ArrowBackIcon />}
              >
                Go Back
              </Button>
              <PatientModal />
            </HStack>
          </VStack>
        )}
        {status === 'error' && <Error message={error} />}
      </Box>
    </Main>
  )
}

export default PatientView
