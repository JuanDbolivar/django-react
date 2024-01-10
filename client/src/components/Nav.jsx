import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="flex justify-between py-3">
      <Link to="/tasks">
        <h1 className="font-bold text-3xl mb-4 mx-3">Task app</h1>
      </Link>
      <Link to="/tasks-create">
        <button className="bg-indigo-700 px-5 py-3 rounded-lg mx-5">
          Create task
        </button>
      </Link>
    </div>
  );
}

export default Nav;
