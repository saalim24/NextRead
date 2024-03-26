import { useState } from "react";
import CustomModal from "@/components/CustomModal";

export default function Suggestions({ suggestions }) {
  let [isOpen, setIsOpen] = useState(false);
  let [data, setData] = useState({});

  const closeModal = () => setIsOpen(false);

  const openModal = (obj) => {
    setData(obj);
    setIsOpen(true);
  };

  return (
    <div className="w-full lg:px-4 pb-40">
      <div className="mx-auto w-full grid grid-cols-2 md:grid-cols-3 gap-4">
        {suggestions.map((obj, index) => (
          <div
            key={index}
            className="col-span-1 lg:mx-2 mb-4 h-fit shadow-lg hover:shadow-xl cursor-pointer transition-shadow duration-300"
            onClick={() => openModal(obj)}
          >
            <img
              src={obj.image}
              alt="Book suggestion"
              className="w-full h-auto"
            />
          </div>
        ))}

        <CustomModal closeModal={closeModal} isOpen={isOpen} data={data} />
      </div>
    </div>
  );
}
