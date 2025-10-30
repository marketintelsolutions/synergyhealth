import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { IoClose } from "react-icons/io5";
import { style } from "./config";

const TeamMemberModal = ({ modal, name, img, desc }) => {
    console.log('modal', modal);
    return (
        <Modal
            open={modal.isOpen}
            onClose={modal.close}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="backdrop-blur-[3px]"
        >
            <Box
                sx={style}
                className="bg-white relative border max-w-[870px] w-[90%]  min-h-[500px] max-h-[90%] overflow-y-scroll lg:overflow-hidden rounded-[15px] flex md:flex-row flex-col gap-4 md:gap-8 lg:gap-16"
            >
                <span onClick={modal.close} className="absolute cursor-pointer top-5 right-5"><IoClose size={25} /></span>
                <div className="w-full lg:max-w-[40%]"><img src={img} alt="person" className="h-full w-full object-cover" /></div>
                <div className="w-full overflow-y-scroll lg:max-w-[50%] px-6 lg:px-0 lg:py-20">
                    <h2 className="text-[30px]">{name}</h2>
                    {/* <p className="text-primaryBlue mt-4 font-light">Executive Property Manager</p> */}

                    <h3 className="font-bold underline mt-8 mb-6">About:</h3>
                    <div className="flex flex-col gap-5 max-h-[500px]">
                        {
                            desc.map((item) => (

                                <p className="text-lg font-extralight ">{item}</p>
                            ))
                        }
                    </div>
                </div>
            </Box>
        </Modal>
    );
};

export default TeamMemberModal;
