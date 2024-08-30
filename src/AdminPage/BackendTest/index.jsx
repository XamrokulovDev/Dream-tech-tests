import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../Redux/testSlice";
import { deleteItem } from "../../Redux/deleteSlice";
import { Modal } from "antd";

const BackendTest = () => {
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

  const filteredData = data.filter(item => item.main_title.toLowerCase() === "backend");

  return (
    <div className="container my-5">
      {filteredData.length === 0 ? (
        <h1 className="text-lg max-sm:text-md font-medium my-8">Backend testlari yo'q!</h1>
      ) : (
        <>
          <div className="flex items-center justify-between mt-10">
            <h1 className="text-lg max-sm:text-md font-medium">Frontend Testlari</h1>
            <input type="text" placeholder="Qidiruv..." className="max-sm:w-36 border px-2 md:py-1 rounded-md outline-none"/>
          </div>
          {filteredData.map((item, index) => (
            <div key={index} className="rounded-xl shadow-md p-5 max-sm:p-3 my-5">
              <h1 className="my-2">
                <span className="font-semibold">Savol: </span>{item.question}
              </h1>
              <div className="flex flex-col gap-1">
                <p><span className="font-semibold">Option A: </span>{item.option_a}</p>
                <p><span className="font-semibold">Option B: </span>{item.option_b}</p>
                <p><span className="font-semibold">Option C: </span>{item.option_c}</p>
                <p><span className="font-semibold">Option D: </span>{item.option_d}</p>
                <p className="my-2"><span className="font-semibold">Correct Option: </span>{item.correct_option}</p>
              </div>
              <div className="flex items-center gap-2">
                <button className={`${item.is_active ? "bg-green-500 text-white px-3 py-1 rounded-md" : "bg-red-500 text-white px-3 py-1 rounded-md"}`}>{`${item.is_active ? "Qo'shish" : "Olib tashlash"}`}</button>
                <button
                  onClick={() => showDeleteConfirm(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md"
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

export default BackendTest;