const NoteCard = ({ message }) => {
  return (
    <>
      <div className="w-full flex flex-wrap gap-10">
        {message.map((item) => (
          <div
            key={item._id}
            className="flex flex-col size-80 bg-amber-200 rounded-md p-3"
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
