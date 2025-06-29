import React from 'react'
import TeamMemberModal from './TeamMemberModal'

const TeamMember = ({ teammemberModal, ...member }) => {
    return (
        <div onClick={teammemberModal.open} className='w-full relative max-w-[330px] shadow-[0_4px_20px_2px_rgba(43,43,43,0.05)]'>
            <img src={member.img} alt={member.name} />
            <div className='flex flex-col gap-4 px-6 py-10'>
                <h2 className='text-[28px] font-bold'>{member.name}</h2>
                {/* <p className='text-sm font-thin text-primaryRed tracking-[3px]'>Manager</p> */}
            </div>

        </div>
    )
}

export default TeamMember