import { ReactNode, useState } from "react";
import {
    closestCorners, defaultDropAnimation,
    DndContext,
    type DragEndEvent,
    type DragOverEvent, DragOverlay,
    type DragStartEvent, type DropAnimation,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates, arrayMove } from '@dnd-kit/sortable';
import { findBoardSectionContainer, initializeBoard } from "../utils/board";
import { INITIAL_TASKS, type BoardSectionsType } from "../types/Task.ts";
import BoardSection from "../features/board/BoardSection.tsx";
import {getTaskById} from "../utils/task.ts";
import TaskItem from "../features/tasks/TaskItem.tsx";

const Board = () => {
    const tasks = INITIAL_TASKS;
    const initialBoardSections = initializeBoard(INITIAL_TASKS);
    const [boardSections, setBoardSections] = useState<BoardSectionsType>(initialBoardSections);
    const [activeTaskId, setActiveTaskId] = useState<null | string>(null);
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
          })
      );
    
    const handleDragStart = ({ active }: DragStartEvent) => {
        setActiveTaskId(active.id as string);
      };

    const handleDragOver = ({ active, over }: DragOverEvent) => {
        // Find the containers
        const activeContainer = findBoardSectionContainer(
          boardSections,
          active.id as string
        );
        const overContainer = findBoardSectionContainer(
          boardSections,
          over?.id as string
        );

        if (
          !activeContainer ||
          !overContainer ||
          activeContainer === overContainer
        ) {
          return;
        }
    
        setBoardSections((boardSection) => {
          const activeItems = boardSection[activeContainer];
          const overItems = boardSection[overContainer];
    
          // Find the indexes for the items
          const activeIndex = activeItems.findIndex(
            (item) => item.id === active.id
          );
          const overIndex = overItems.findIndex((item) => item.id !== over?.id);
    
          return {
            ...boardSection,
            [activeContainer]: [
              ...boardSection[activeContainer].filter(
                (item) => item.id !== active.id
              ),
            ],
            [overContainer]: [
              ...boardSection[overContainer].slice(0, overIndex),
              boardSections[activeContainer][activeIndex],
              ...boardSection[overContainer].slice(
                overIndex,
                boardSection[overContainer].length
              ),
            ],
          };
        });
      };
    
      const handleDragEnd = ({ active, over }: DragEndEvent) => {
        const activeContainer = findBoardSectionContainer(
          boardSections,
          active.id as string
        );
        const overContainer = findBoardSectionContainer(
          boardSections,
          over?.id as string
        );
    
        if (
          !activeContainer ||
          !overContainer ||
          activeContainer !== overContainer
        ) {
          return;
        }
    
        const activeIndex = boardSections[activeContainer].findIndex(
          (task) => task.id === active.id
        );
        const overIndex = boardSections[overContainer].findIndex(
          (task) => task.id === over?.id
        );

        if (activeIndex !== overIndex) {
          setBoardSections((boardSection) => ({
            ...boardSection,
            [overContainer]: arrayMove(
              boardSection[overContainer],
              activeIndex,
              overIndex
            ),
          }));
        }
    
        setActiveTaskId(null);
      };

    const dropAnimation: DropAnimation = {
        ...defaultDropAnimation,
    };

    const task = activeTaskId ? getTaskById(tasks, activeTaskId) : null;

    return (
        <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
        >
            <div className="flex justify-center items-start gap-10">
                {Object.keys(boardSections).map((boardSectionKey) => (
                    <BoardSection
                        key={boardSectionKey}
                        id={boardSectionKey}
                        title={boardSectionKey}
                        tasks={boardSections[boardSectionKey]}
                    />
                ))}
            </div>
            <DragOverlay dropAnimation={dropAnimation}>
                {task ? <TaskItem task={task} /> : null}
            </DragOverlay>
        </DndContext>
    );
};

export default Board;