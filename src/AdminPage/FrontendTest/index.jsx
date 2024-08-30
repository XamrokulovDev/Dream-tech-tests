import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../Redux/testSlice";
import { deleteItem } from "../../Redux/deleteSlice";
import { Modal, Button } from "antd"; 

const FrontendTest = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.frontend);
  const deleteStatus = useSelector((state) => state.delete);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const showDeleteConfirm = (id) => {
    setItemToDelete(id);
    setIsModalOpen(true);
  };

  const handleDelete = () => {
    if (itemToDelete) {
      dispatch(deleteItem(itemToDelete));
      setIsModalOpen(false);
      setItemToDelete(null);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setItemToDelete(null);
  };

  if (loading) return <div className="container mt-2">Yuklanmoqda...</div>;
  if (error) return <div className="container mt-2">{error}</div>;

  const filteredData = data.filter(item => item.main_title.toLowerCase() === "frontend");

  return (
    <div className="container my-5">
      {filteredData.length === 0 ? (
        <h1 className="text-lg font-medium mt-10">Frontend testlari yo'q!</h1>
      ) : (
        <>
          <div className="flex items-center justify-between mt-10">
            <h1 className="text-lg max-sm:text-md font-medium">Frontend Testlari</h1>
            <input type="text" placeholder="Qidiruv..." className="max-sm:w-36 border px-2 md:py-1 rounded-md outline-none"/>
          </div>
          {filteredData.map((item, index) => (
            <div key={index} className="rounded-xl shadow-md border p-5 max-sm:p-3 my-5">
              <h1 className="my-2">
                <span className="text-lg font-semibold">{index+1}-Savol: </span>{item.question}
              </h1>
              <div className="flex flex-col gap-1">
                <p><span className="font-semibold">Option A: </span>{item.option_a}</p>
                <p><span className="font-semibold">Option B: </span>{item.option_b}</p>
                <p><span className="font-semibold">Option C: </span>{item.option_c}</p>
                <p><span className="font-semibold">Option D: </span>{item.option_d}</p>
                <p className="mt-1"><span className="font-semibold">Correct Option: </span>{item.correct_option}</p>
              </div>
              <div className="w-full flex items-center justify-between mt-3">
                <h2 className="text-md font-normal mr-3"><span className="font-semibold text-lg">Stage: </span>{item.title}</h2>
                <button
                  onClick={() => showDeleteConfirm(item.id)}
                  className="bg-red-500 text-white max-sm:text-sm px-5 max-sm:px-3 py-2 max-sm:py-1 rounded-md"
                >
                  O'chirish
                </button>
              </div>
            </div>
          ))}
        </>
      )}
      
      <Modal
        title="O'chirishni tasdiqlang"
        open={isModalOpen}
        onOk={handleDelete}
        onCancel={handleCancel}
      >
        <p>Savolni o'chirishni xohlaysizmi?</p>
      </Modal>
    </div>
  );
};

export default FrontendTest;