import React, { createContext, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Nav, RoomItem, Loader } from 'rsuite';
import { useRooms } from '../../context/rooms.context';
import { useLocation } from 'react-router-dom';

const ChatRoomList = ({ aboveElheight }) => {
  const rooms = useRooms();
  const location = useLocation()

  return (
    <Nav
      appearance="subtle"
      vertical
      reversed
      className="overflow-y-scroll custom-scroll"
      style={{
        height: `calc(100% - ${aboveElheight}px)`,
      }}
      activeKey={location.pathname}
    >
      {!rooms && (
        <Loader center vertical content="Loading" speed="slow" size="md" />
      )}
      {rooms && rooms.length > 0 && rooms.map(room =>(
        <Nav.Item componentClass={Link} to={`/chat/${room.id}`} key={room.id} eventKey={`/chat/${room.id}`}>
        <RoomItem room={room} />
      </Nav.Item>
      ))}
      
    </Nav>
  );
};

export default ChatRoomList;
