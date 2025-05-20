import type {Task} from "../../types/Task.ts";
import {useDroppable} from "@dnd-kit/core";
import {SortableContext, verticalListSortingStrategy} from "@dnd-kit/sortable";
import SortableTaskItem from "../tasks/SortableTaskItem.tsx";
import TaskItem from "../tasks/TaskItem.tsx";

type BoardSectionProps = {
    id: string;
    title: string;
    tasks: Task[];
};


const BoardSection = ({id, title, tasks}: BoardSectionProps) => {
    const {setNodeRef} = useDroppable({
        id,
    });

    return (
        <div className="card w-96 bg-base-100 card-sm shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>

                <SortableContext id={id}
                                 items={tasks}
                                 strategy={verticalListSortingStrategy}>
                    <div className="gap-3" ref={setNodeRef}>

                        {tasks.map((task) => (
                            <div className="mb-2" key={task.id}>
                                <SortableTaskItem id={task.id}>
                                    <TaskItem task={task} />
                                </SortableTaskItem>
                            </div>

                        ))}
                    </div>
                </SortableContext>
            </div>
        </div>
    )
}

export default BoardSection;