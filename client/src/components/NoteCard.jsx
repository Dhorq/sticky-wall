import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const NoteCard = () => {
  const [message, setMessage] = useState([]);

  const backendUrl = import.meta.env.VITE_API_URL;

  const fetchNote = useCallback(async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/v1/product/`);

      const { success, message } = response.data;

      console.log(response);

      if (success) {
        setMessage(message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }, [backendUrl]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchNote();
  }, [fetchNote]);

  return (
    <>
      {message.map((item) => (
        <div
          key={item._id}
          className="flex flex-col size-80 bg-amber-200 rounded-md p-3"
        >
          <p className="font-medium text-2xl mb-5">{item.name}</p>
          <p className="font-light">{item.description}</p>
        </div>
      ))}
    </>
  );
};

export default NoteCard;
