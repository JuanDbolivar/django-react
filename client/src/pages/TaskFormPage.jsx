import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import {
  createTasks,
  deleteTasks,
  updateTasks,
  getTask,
} from "../api/tasks.api";

function TaskFormPage() {
  const navigate = useNavigate();
  const params = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const { data } = await getTask(params.id);
        setValue("title", data.title);
        setValue("description", data.description);
        setValue("done", data.done);
      }
    };
    loadTask();
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      try {
        const response = await updateTasks(params.id, data);
        toast.success(`Task ${response.data.title} updated`, {
          position: "bottom-right",
        });
      } catch (error) {
        console.log("error.put", error.message);
      }
    } else {
      try {
        const response = await createTasks(data);
        toast.success(`Task ${response.data.title} created`, {
          position: "bottom-right",
        });
      } catch (error) {
        console.log("error.post", error.message);
      }
    }
    navigate("/tasks");
  });

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Task name"
          {...register("title", { required: true })}
          className="bg-zinc-600 p-3 rounded-lg block w-full mb-3"
        />
        {errors.title && <span>This field is required</span>}
        <textarea
          cols="30"
          rows="10"
          placeholder="Task description"
          {...register("description", { required: true })}
          className="bg-zinc-600 p-3 rounded-lg block w-full mb-3"
        ></textarea>
        {errors.description && <span>This field is required</span>}
        <button className="bg-indigo-700 px-5 py-3 rounded-lg block w-full">
          Save
        </button>
      </form>

      {params.id && (
        <>
          <button
            className="bg-red-600 px-5 py-3 rounded-lg block w-full mt-4"
            onClick={async () => {
              const acepted = window.confirm("Are you sure?");
              if (acepted) {
                await deleteTasks(params.id);
                toast.success(`Task eliminated`, {
                  position: "bottom-right",
                });
                navigate("/tasks");
              }
            }}
          >
            Delete
          </button>
          <input
            type="checkbox"
            {...register("done")}
          />
        </>
      )}
    </div>
  );
}

export default TaskFormPage;
