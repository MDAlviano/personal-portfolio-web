import React from 'react';
import { SiKotlin } from 'react-icons/si'; 
import { FaAndroid } from 'react-icons/fa';
import { GrMysql } from 'react-icons/gr';
import { SiGradle } from 'react-icons/si';
import { IoLogoFirebase } from 'react-icons/io5';

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h1 className="my-20 text-center text-4xl">Technologies</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <span className="text-7xl bg-gradient-to-tr from-[#7F52FF] via-[#B125EA] to-[#E24462] bg-clip-text tracking-tight text-transparent"><SiKotlin className="text-[#b125ea]"/></span>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaAndroid className="text-7xl text-green-500"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <GrMysql className="text-7xl text-[#00758f]"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiGradle className="text-7xl text-cyan-950"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <IoLogoFirebase className="text-7xl text-[#f6820d]"/>
            </div>
        </div>
    </div>
  )
}

export default Technologies