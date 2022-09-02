import React from 'react'

import { SiActigraph, SiHackthebox } from "react-icons/si";
import { FiUser, FiActivity } from "react-icons/fi";
import {GiVitruvianMan} from "react-icons/gi"

function Icons() {
  return (
    <div className='container'>
        <h2 className='underline'>react-icons</h2>
        <div className='icons-container'>
            <SiActigraph />
            <SiHackthebox />
            <FiUser />
            <FiActivity />
            <GiVitruvianMan />
        </div>
    </div>
  )
}

export default Icons