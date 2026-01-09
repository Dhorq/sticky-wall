import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const { id } = useParams();

  const navigate = useNavigate();

  const backendUrl = import.meta.env.VITE_API_URL;

  const handleEditNote = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`${backendUrl}/api/v1/products/${id}`, {
        name,
        description,
      });

      const { success, message } = response.data;

      if (success) {
        navigate("/");
        console.log(message);
      } else {
        console.log(message);
      }
    } catch (error) {
      console.log(error.response?.data?.message);
    }
  };

  return (
    <div className="flex justify-center items-center text-center h-150 xl:h-200">
      <form
        onSubmit={(e) => handleEditNote(e)}
        className="relative h-90 w-100 border transition-opacity duration-500 ease-in flex flex-col justify-around"
      >
        <h2 className="text-2xl font-bold">New Note</h2>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          className="border mx-3 p-2"
          placeholder="Title"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="note">Note</label>
        <input
          id="note"
          type="text"
          className="border mx-3 p-2"
          placeholder="Note"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          type="submit"
          className="bg-amber-300 mx-3 text-center h-10 flex justify-center items-center cursor-pointer"
        >
          Add Note
        </button>
        <Link
          to="/"
          className="absolute left-1 top-1 hover:opacity-75 cursor-pointer"
        >
          Back
        </Link>
      </form>
    </div>
  );
};

export default Edit;
