// import TaskForm from "@/components/TaskForm";
import TaskForm from "@/components/TaskFormCustom";
import TaskList from "@/components/TaskList";
export const dynamic = "force-dynamic";

const TasksPage = () => {
  return (
    <div className="max-w-lg">
      {/* <h1 className="text-7xl">TasksPage</h1> */}
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default TasksPage;
