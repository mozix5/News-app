import React from 'react'
import { Link } from 'react-router-dom'
import { useModal } from '../context/NewsContext'

const Modal = () => {
    const {modalContent}=useModal()
  return (
    <div className="fixed inset-0 bg-slate-100 bg-opacity-0 overflow-y-auto h-full w-full z-20">
    <Link to="/">
      <div className="fixed inset-0 w-full h-full bg-black opacity-70 overflow-y-hidden"></div>
    </Link>
    <div className=" lg:w-[53%] mx-auto bg-[#1c1c1e] relative mt-7 mb-6 rounded-xl">
      <div className="  ">
        <img
          alt="pizza"
          src={modalContent.src}
          className="w-[100%]  object-cover h-[450px]  rounded-xl "
        />
      </div>
      <div className=" text-white px-4 py-6">{modalContent.content}</div>
    </div>
  </div>
  )
}

export default Modal