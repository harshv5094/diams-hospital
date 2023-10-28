import { useDispatch, useSelector } from 'react-redux'
import { IoAddSharp, IoSaveOutline } from 'react-icons/io5'
import { RiEditBoxLine } from 'react-icons/ri'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import {
  Button,
  Checkbox,
  CheckboxGroup,
  Container,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Radio,
  RadioGroup,
  Textarea,
  VStack,
  useDisclosure
} from '@chakra-ui/react'
import { fetchPatients } from '../features/patientsReducer'
import { useState } from 'react'

function PatientModal() {
  const dispatch = useDispatch()
  const { isOpen, onOpen, onClose } = useDisclosure()
  let { patientID } = useParams()
  const { patients, status } = useSelector(state => state.patients)
  const patient = patients.find(x => x._id === patientID)

  const [name, setName] = useState(patient ? patient.name : '')
  const [age, setAge] = useState(patient ? patient.age : 0)
  const [gender, setGender] = useState(patient ? patient.gender : '')
  const [medicalHistory, setMedicalHistory] = useState(
    patient ? patient.medicalHistory : ''
  )
  const [assignedWard, setAssignedWard] = useState(
    patient ? patient.assignedWard : []
  )

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPatients())
    }
  }, [status, dispatch])

  return (
    <>
      {patient ? (
        <Button
          leftIcon={<RiEditBoxLine />}
          variant={`solid`}
          colorScheme="green"
          onClick={onOpen}
        >
          Edit
        </Button>
      ) : (
        <Button
          leftIcon={<IoAddSharp />}
          variant={`ghost`}
          colorScheme="green"
          onClick={onOpen}
        >
          Add Patient Information
        </Button>
      )}

      <Modal onClose={onClose} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent overflow={`auto`}>
          <ModalBody>
            <Container
              maxW={`container.sm`}
              fontSize={`2rem`}
              textAlign={`center`}
            >
              {patient ? 'Edit' : 'Add'} Patient Information
            </Container>

            <VStack>
              <Container mt={2} id="name">
                <FormLabel>Name: </FormLabel>
                <Input
                  value={name}
                  onChange={e => setName(e.target.value)}
                  type="text"
                ></Input>
              </Container>

              <Container id="age">
                <FormLabel>Age: </FormLabel>
                <Input
                  value={age}
                  onChange={e => setAge(e.target.value)}
                  type="number"
                ></Input>
              </Container>

              <Container id="Gender">
                <FormLabel>Gender: </FormLabel>
                <RadioGroup
                  value={gender}
                  onChange={e => setGender(e.target.value)}
                >
                  <Radio ml={2} value="Male">
                    Male
                  </Radio>
                  <Radio ml={2} value="Female">
                    Female
                  </Radio>
                  <Radio ml={2} value="Trans">
                    Trans
                  </Radio>
                </RadioGroup>
              </Container>

              <Container id="Medical History">
                <FormLabel>Medical History: </FormLabel>
                <Textarea
                  resize={false}
                  cols={5}
                  placeholder="Patient information"
                  value={medicalHistory}
                  onChange={e => setMedicalHistory(e.target.value)}
                ></Textarea>
              </Container>

              // <Container id="Assigned Ward">
              //   <FormLabel>Assigned Ward: </FormLabel>
              //   <CheckboxGroup>
              //     <Checkbox value={1}>1 - Orthology</Checkbox>
              //     <Checkbox value={2}>2 - Urology</Checkbox>
              //     <Checkbox value={3}>3 - Dentology</Checkbox>
              //     <Checkbox value={4}>4 - Cardiology</Checkbox>
              //     <Checkbox value={5}>5 - Neurology</Checkbox>
              //   </CheckboxGroup>
              // </Container>
            </VStack>
          </ModalBody>
          <ModalFooter>
            {patient ? (
              <Button
                leftIcon={<IoSaveOutline />}
                variant={`outline`}
                colorScheme="green"
              >
                Save
              </Button>
            ) : (
              <Button
                leftIcon={<IoAddSharp />}
                variant={`outline`}
                colorScheme="green"
              >
                Add
              </Button>
            )}
            <Button
              ml={2}
              variant={`outline`}
              colorScheme="red"
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default PatientModal
