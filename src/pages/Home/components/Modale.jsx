import React, { useState } from "react";
import "./Modale.sass";
import { CiCirclePlus } from "react-icons/ci";
import { FaImage, FaImages } from "react-icons/fa6";
import { FaPen } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";




export default function Modal() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }


    return (
        <>
            <button onClick={toggleModal} className="btn-modal">
                <button className="">Add to Cart</button>
            </button>

            {modal && (
                <div className="modal w-[100%] backdrop-blur-sm">
                    <div onClick={toggleModal} className="overlay "></div>
                    <div className="modal-content flex flex-col gap-3 w-[100%]">

                        <div className="flex flex-col items-center gap-8">
                            <div className="p-5 flex flex-col items-center">
                                <FaCheck className="text-9xl text-orange-500 border border-orange-500 rounded-full p-5" />
                                <div className="flex items-center gap-5">
                                    <h1 className="text-4xl text-orange-600">Added Succesfully</h1>
                                    <FaCheck className="border border-black rounded-full text-4xl p-2 mt-2 text-orange-500" />
                                </div>
                            </div>
                        </div>


                        <button className="close-modal" onClick={toggleModal}>
                            CLOSE
                        </button>


                    </div>
                </div>
            )}

        </>
    );
}