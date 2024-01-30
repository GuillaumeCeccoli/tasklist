import { AddTaskProps } from "@/types";
import { SmallAddIcon } from "@chakra-ui/icons";
import { Button, Flex, Input } from "@chakra-ui/react";

export default function AddTask({
  task,
  setTask,
  handleCreateTask,
}: AddTaskProps) {
  return (
    <>
      <Flex p="2rem">
        <Input
          placeholder="Ajoutez une nouvelle tâche ..."
          size="lg"
          onChange={(e) => setTask(e.target.value)}
          style={{ background: "#fff" }}
        />
        <Button
          colorScheme="twitter"
          size="lg"
          onClick={() => handleCreateTask()}
        >
          <SmallAddIcon />
        </Button>
      </Flex>
    </>
  );
}

