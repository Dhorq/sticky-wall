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
    <div className="w-full bg-amber-200">
      {message.map((item) => (
        <div
          key={item._id}
          className="flex flex-col size-50 bg-amber-200 w-full"
        >
          <p>{item.name}</p>
          <p>{item.description}</p>
        </div>
      ))}
      <p>a</p>
    </div>
  );
};

export default NoteCard;
