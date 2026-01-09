import { Link } from "react-router-dom";

const NoteCard = ({ message, handleDelete }) => {
  return (
    <>
      <div className="w-full flex flex-wrap gap-10 h-130 xl:h-160">
        {message.map((item) => (
          <div
            key={item._id}
            className="flex flex-col w-77 h-60 bg-amber-200 rounded-md p-3 justify-between"
          >
            <p className="font-medium text-2xl mb-5">{item.name}</p>
            <p className="font-light">{item.description}</p>
            <div className="flex gap-5">
              <Link to={`/edit/${item._id}`} className="cursor-pointer">
                Edit
              </Link>
              <button
                onClick={() => handleDelete(item._id)}
                className="cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NoteCard;
