import {Divider, useRef} from 'rsuite';
import React, { useEffect, useState } from 'react'
import DashboardToggle from './dashboard/DashboardToggle'
import CreateRoomBtnModal from './dashboard/CreateRoomBtnModal'
import ChatRoomList from './rooms/ChatRoomList';

const Sidebar = () => {

  const TopSidebarRef = useRef();
  const [height, setHeight] = useState(0);

  useEffect(()=>{
    if(TopSidebarRef.current)
    setHeight(TopSidebarRef.current.scrollHeight  )
  },[TopSidebarRef])

  return (
    <div className='h-100 pt-2'>
        <div ref={TopSidebarRef}>
            <DashboardToggle/>
            <CreateRoomBtnModal/>
            <Divider>Join conversation text</Divider>
        </div>
        <ChatRoomList aboveElHeight={height}/>
    </div>
  )
}

export default Sidebar