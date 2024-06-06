import { useState } from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Input,
  SimpleGrid,
  Text,
  VStack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Textarea,
} from "@chakra-ui/react";
import { FaPlus, FaSearch, FaUserCircle } from "react-icons/fa";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ title: "", content: "" });

  const handleAddNote = () => {
    setNotes([...notes, newNote]);
    setNewNote({ title: "", content: "" });
    onClose();
  };

  return (
    <Container maxW="container.xl" p={4}>
      {/* Navigation Bar */}
      <Flex justify="space-between" align="center" mb={4}>
        <Heading size="lg">Note Keeper</Heading>
        <Flex align="center">
          <Input placeholder="Search notes..." mr={2} />
          <IconButton icon={<FaSearch />} aria-label="Search" mr={2} />
          <IconButton icon={<FaUserCircle />} aria-label="User Settings" />
        </Flex>
      </Flex>

      {/* Main Content Area */}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4}>
        {notes.map((note, index) => (
          <Box key={index} p={4} borderWidth="1px" borderRadius="md">
            <Heading size="md" mb={2}>
              {note.title}
            </Heading>
            <Text>{note.content}</Text>
            <Flex mt={2} justify="flex-end">
              <Button size="sm" mr={2}>
                Edit
              </Button>
              <Button size="sm" colorScheme="red">
                Delete
              </Button>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>

      {/* Floating Action Button */}
      <IconButton
        icon={<FaPlus />}
        colorScheme="teal"
        aria-label="Add Note"
        size="lg"
        position="fixed"
        bottom={4}
        right={4}
        borderRadius="full"
        onClick={onOpen}
      />

      {/* Add Note Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a new note</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="Title"
              mb={3}
              value={newNote.title}
              onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
            />
            <Textarea
              placeholder="Content"
              value={newNote.content}
              onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleAddNote}>
              Save
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Index;