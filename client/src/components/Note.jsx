import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import NoteCard from "./NoteCard";

const Note = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [message, setMessage] = useState([]);

  const limit =
    window.innerWidth >= 1280 ? 10 : window.innerWidth >= 1024 ? 8 : 8;

  const backendUrl = import.meta.env.VITE_API_URL;

  const fetchNote = useCallback(async () => {
    try {
      const response = await axios.get(
        `${backendUrl}/api/v1/product?limit=${limit}&page=${page}`
      );

      const { success, message, totalPages } = response.data;

      if (success) {
        setMessage(message);
        setTotalPages(totalPages);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }, [backendUrl, limit, page]);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `${backendUrl}/api/v1/product/delete/${id}`
      );

      const { success, message } = response.data;

      if (success) {
        await fetchNote();
        console.log(message);
      } else {
        console.log(message);
      }
    } catch (error) {
      console.log(error.response?.data?.message);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchNote();
  }, [fetchNote]);

  const handlePrev = () => {
    setPage((page) => page - 1);
  };

  const handleNext = () => {
    setPage((page) => page + 1);
  };

  return (
    <div className="my-10">
      <NoteCard message={message} handleDelete={handleDelete} />
      <div className="flex justify-center items-center gap-10 mt-10">
        <button
          onClick={handlePrev}
          className={`${
            page === 1 ? "disabled opacity-25" : "hover:opacity-75"
          } cursor-pointer`}
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className={`${
            page === totalPages ? "disabled opacity-25" : "hover:opacity-75"
          } cursor-pointer`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Note;
