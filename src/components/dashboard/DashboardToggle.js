import React from 'react'
import {Button, Icon, Drawer} from 'rsuite';
import { useMediaQuery, useModalState } from '../../misc/custom-hooks';

const DashboardToggle = () => {
  
  const {isOpen, close, open} = useModalState();
  const isMobile= useMediaQuery('(max-width: 992px)');
  
  return (
    <>
        <Button block color='blue' onClick={open}>
        <Icon icon="Dashboard" /> Dashboard
        </Button>
        <Drawer full={isMobile} show={isOpen} onHide={close} placement='left' >
              <Dashboard />
        </Drawer>
    </>
  )
}

export default DashboardToggle