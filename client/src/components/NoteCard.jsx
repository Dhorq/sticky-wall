const NoteCard = ({ message }) => {
  return (
    <>
      <div className="w-full flex flex-wrap gap-10 h-130">
        {message.map((item) => (
          <div
            key={item._id}
            className="flex flex-col w-77 h-60 bg-amber-200 rounded-md p-3"
          >
            <p className="font-medium text-2xl mb-5">{item.name}</p>
            <p className="font-light">{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default NoteCard;
