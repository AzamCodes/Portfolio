import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { motion } from "framer-motion";

// Initial items for the list
const initialItems = [
  { id: "1", content: "Item 1" },
  { id: "2", content: "Item 2" },
  { id: "3", content: "Item 3" },
];

const DragAndDropList = () => {
  const [items, setItems] = useState(initialItems);

  const handleOnDragEnd = (result: any) => {
    const { destination, source } = result;

    if (!destination) return;

    if (destination.index === source.index) return;

    const updatedItems = Array.from(items);
    const [movedItem] = updatedItems.splice(source.index, 1);
    updatedItems.splice(destination.index, 0, movedItem);

    setItems(updatedItems);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <motion.div
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{
              width: "300px",
              padding: "10px",
              backgroundColor: "#f0f0f0",
              borderRadius: "5px",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <motion.div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{
                      ...provided.draggableProps.style,
                      padding: "10px",
                      marginBottom: "10px",
                      backgroundColor: "#fff",
                      borderRadius: "5px",
                      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                      cursor: "move",
                    }}
                    initial={{ scale: 1 }}
                    whileDrag={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.content}
                  </motion.div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </motion.div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DragAndDropList;
