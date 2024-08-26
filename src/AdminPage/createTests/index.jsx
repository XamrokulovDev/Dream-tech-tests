import React, { useState } from 'react'

const CreateTests = () => {
  const [test, setTest] = useState({
    id: "",
    question: "",
    option_a: "",
    option_b: "",
    option_c: "",
    option_d: "",
    correct_option: "",
    is_active: true,
    main_title: "",
    title: "",
  })
  return (
    <div className='w-full h-full'>
        <form action="#">
            <input type="text" placeholder='question'/>
            <input type="text" placeholder='option_a'/>
            <input type="text" placeholder='option_b'/>
            <input type="text" placeholder='option_c'/>
            <input type="text" placeholder='option_d'/>
            <input type="text" placeholder='correct_option'/>
            <select name="" id="">
                <option value="">Frontend</option>
                <option value="">Backend</option>
            </select>
            <select name="" id="">
                <option value="">Junior</option>
                <option value="">Middle</option>
                <option value="">Senior</option>
            </select>
        </form>
    </div>
  )
}

export default CreateTests;