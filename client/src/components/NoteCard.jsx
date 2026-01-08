import axios from "axios";

const NoteCard = ({ message, handleDelete }) => {
  const backendUrl = import.meta.env.VITE_API_URL;

  const handleEdit = async (id) => {
    try {
      const response = await axios.delete(`${backendUrl}/api/v1/product/${id}`);

      const { success, message } = response.data;

      if (success) {
        console.log(message);
      } else {
        console.log(message);
      }
    } catch (error) {
      console.log(error.response?.data?.message);
    }
  };

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
              <button
                onClick={() => handleEdit(item._id)}
                className="cursor-pointer"
              >
                Edit
              </button>
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
