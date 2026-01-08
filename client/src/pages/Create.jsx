import { useState } from "react";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleAddNote = async (e) => {
    e.preventDefault();

    try {
      const backendUrl = import.meta.env.VITE_API_URL;

      console.log(backendUrl);

      const response = await axios.post(`${backendUrl}/api/v1/product/`, {
        name,
        description,
      });

      console.log(response);

      const { success, message } = response.data;

      if (!success) {
        console.log(message);
      } else {
        navigate("/");
        console.log(message);
      }
    } catch (error) {
      console.log(error.response?.data?.message);
    }
  };

  return (
    <div className="flex justify-center items-center text-center h-150 xl:h-200">
      <form
        onSubmit={(e) => handleAddNote(e)}
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

export default Create;
