import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../Redux/testSlice";
import { deleteTest } from "../../Redux/deleteSlice";

const FrontendTest = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);
  const { deleting, deleteError } = useSelector((state) => state.delete);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleDelete = (testId) => {
    if (window.confirm("Testni o'chirishni xoxlaysizmi?")) {
      dispatch(deleteTest(testId));
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (deleting) {
    return <div>Deleting...</div>;
  }

  if (deleteError) {
    return <div>Error: {deleteError}</div>;
  }

  return (
    <div className="container my-5">
      <h1 className="text-3xl font-medium mb-5">Frontend Tests</h1>
      {
        data?.filter((item) => item.main_title.toLowerCase() === "frontend").map((item, index) => (
          <div key={index} className="mb-4">
            {
              item.tests && item.tests.length > 0 ? (
                <ul className="">
                  {item.tests.map((test, testIndex) => (
                    <div key={testIndex} className="rounded-lg border mb-2 p-5">
                      <div>
                        <h1></h1>
                        <h2 className="text-lg mb-3"><span className="text-xl font-bold">Question:</span> {test.question}</h2>
                        <div className="flex flex-col gap-1">
                            <p className="text-md"><span className="text-lg font-bold">option_a:</span> {test.option_a}</p>
                            <p className="text-md"><span className="text-lg font-bold">option_b:</span> {test.option_b}</p>
                            <p className="text-md"><span className="text-lg font-bold">option_c:</span> {test.option_c}</p>
                            <p className="text-md"><span className="text-lg font-bold">option_d:</span> {test.option_d}</p>
                        </div>
                        <p className="mt-2"><span className="text-xl font-bold">Correct option:</span> {test.correct_option}</p>
                        <div className="flex items-center gap-3 mt-4">
                            <button className={`${test.is_active ? "bg-red-500" : "bg-green-500"} rounded-md text-white px-3 py-2`}>{test.is_active ? "Olib tashlash" : "Qo'shish"}</button>
                            <button className="bg-red-500 rounded-md text-white px-3 py-2" onClick={() => handleDelete(test.id)}>O'chirish</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </ul>
              ) : (
                <p>No tests available.</p>
              )
            }
          </div>
        ))
      }
    </div>
  );
};

export default FrontendTest;