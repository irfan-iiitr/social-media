import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

import { CreatePostLogo, InstagramLogo, InstagramMobileLogo ,NotificationsLogo } from '../../assets/Constant'
import { Avatar, Box ,Button,Flex,Link, Tooltip} from '@chakra-ui/react'
import { AiFillHome } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import useLogout from '../../hooks/useLogout';
import SidebarItems from './SideBarItems';
import { Image } from '@chakra-ui/react';

const Sidebar = () => {
 
  const {handleLogout,isLoggingOut,error}=useLogout();
  return (
    <Box
    height={"100vh"}
    borderRight ={"1px solid"}
    borderColor={"whiteAlpha.200"}
    py={8}
    position={"sticky"}
    top={0}
    left={0}
    px={{base:2,md:4}}
    >

      <Flex direction={"column"} gap={10} w="full" height="full" >
        <Link to="/" as={RouterLink} pl={2} display={{base:"none", md:"block"}} cursor="pointer" ><Image src="/logo4.png"></Image></Link>
        <Link to="/" as={RouterLink} pl={2} display={{base:"block", md:"none"}} cursor="pointer" 
        borderRadius={6}
        _hover={{bg:"whiteAlpha.200"}} w={10}>
        </Link>

        {/* SideBar Items */}
        <Flex direction={"column"} gap={5} cursor={"pointer"}>
         <SidebarItems/>
        </Flex>
        
        <Tooltip  hasArrow label={"logout"} placement='right' ml={1} openDelay={500} display={{base:"block" ,md:"none"}}>
             <Flex onClick={handleLogout}  mt={"auto"} alignItems={"center"} gap={4} _hover={{bg:"whiteAlpha.400"}}
             borderRadius={6} p={2} w={{base:10 ,md:"full"}} justifyContent={{base:"center" ,md:"flex-start"}} >
             <BiLogOut />
              <Button display={{base:"none", md:"block"}} variant={"ghost"} _hover={{bg:"transparent"}} isLoading={isLoggingOut}>Logout</Button>
             </Flex>
            </Tooltip>

   
      </Flex>

    </Box>
  )
}

export default Sidebar
