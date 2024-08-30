import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../../Redux/testSlice';
import { Checkbox, Button, message } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';
import { Audio } from 'react-loader-spinner';

const JuniorFrontend = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.frontend);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="fixed top-[40%] left-[50%] translate-x-[-50%]">
        <Audio
          height="80"
          width="80"
          radius="9"
          color="#4F46E5"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
      </div>
    );
  }

  if (error) {
    return <div className="text-red-600 text-center mt-4">Xato: {error}</div>;
  }

  const handleAnswer = (selectedOption) => {
    setUserAnswer(selectedOption);
  };

  const handleNextQuestion = () => {
    if (!userAnswer) {
      message.warning('Iltimos, variantni tanlang');
      return;
    }

    const currentQuestion = data[currentIndex];
    const correctAnswer = currentQuestion.correct_option;

    if (userAnswer === correctAnswer) {
      setScore(score + 1);
    }

    const nextIndex = currentIndex + 1;
    if (nextIndex < data.length) {
      setCurrentIndex(nextIndex);
      setUserAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const calculatePercentage = () => {
    return ((score / data.length) * 100).toFixed(2);
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-r from-teal-50 to-blue-50 max-md:px-5">
      {showResult ? (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center bg-white p-8 rounded-lg shadow-xl border border-gray-200 flex flex-col gap-2"
        >
          <h2 className="text-4xl font-medium text-gray-600">Natija</h2>
          <p className="text-lg mt-2">Siz {score} ta to'g'ri javob berdingiz!</p>
          <p className="text-lg mt-2">Foiz: {calculatePercentage()}%</p>
        </motion.div>
      ) : (
        <AnimatePresence mode="wait">
          {data.length > 0 && (
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-[600px] rounded-lg shadow-lg p-6 bg-white border border-gray-300"
            >
              {data
                .filter(
                  (item) =>
                    item.main_title.toLowerCase() === 'frontend' &&
                    item.title.toLowerCase() === 'junior'
                )
                .map((item, index) => (
                  <div key={index} className={`${index === currentIndex ? '' : 'hidden'}`}>
                    <h1 className='text-2xl font-semibold mb-4 text-gray-700'>{index + 1}. {item.question}</h1>
                    <div className="flex flex-col gap-3 mt-4">
                      {['A', 'B', 'C', 'D'].map((option) => (
                        <Checkbox
                          key={option}
                          checked={userAnswer === option}
                          onChange={() => handleAnswer(option)}
                          className='text-lg font-medium'
                        >
                          <p className='text-gray-800'>{item[`option_${option.toLowerCase()}`]}</p>
                        </Checkbox>
                      ))}
                    </div>
                    <Button
                      type="primary"
                      className="mt-4 bg-blue-600"
                      onClick={handleNextQuestion}
                      disabled={!userAnswer}
                    >
                      Keyingi savol
                    </Button>
                  </div>
                ))}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export default JuniorFrontend;