import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import NoteCard from "./NoteCard";

const Note = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [message, setMessage] = useState([]);

  const limit = 8;

  const backendUrl = import.meta.env.VITE_API_URL;

  const fetchNote = useCallback(async () => {
    try {
      const response = await axios.get(
        `${backendUrl}/api/v1/product?limit=${limit}&page=${page}`
      );

      const { success, message, totalPages } = response.data;

      console.log(response);

      if (success) {
        setMessage(message);
        setTotalPages(totalPages);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }, [backendUrl, page]);

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
      <NoteCard message={message} />
      <div className="flex justify-center items-center gap-10 mt-10">
        <button
          onClick={handlePrev}
          className={`${page === 1 ? "disabled opacity-25" : ""}`}
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className={`${page === totalPages ? "disabled opacity-25" : ""}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Note;
