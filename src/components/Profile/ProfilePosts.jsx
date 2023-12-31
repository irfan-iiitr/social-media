import React from 'react'
import { Box, Flex, Grid, Skeleton, Text, VStack } from "@chakra-ui/react";
import { useState,useEffect } from 'react';
import FeedPost from '../FeedPosts/FeedPost';
import ProfilePost from './ProfilePost';
import useGetUserPosts from '../../hooks/useGetUserPosts';

const ProfilePosts = () => {

  const {isLoading,posts}=useGetUserPosts();
  console.log(posts,"posts");
  const noPostsFound=!isLoading && posts.length===0;
  if(noPostsFound) return <NoPostsFound />;




  return (
    <Grid templateColumns={{sm:"repeat(1, 1fr)" , md:"repeat(3, 1fr)"}} gap={1} columnGap={1}>
   
   {isLoading && [0,1,2,].map((_,idx)=>(
    <VStack  alignItems={"flex-start"} gap={4} >
      <Skeleton w={"full"}>
        <Box h={'300px'} >Cntents Wrapped</Box>
      </Skeleton>
    </VStack>
   ))}
      
      {!isLoading && (
        <>
          {posts.map((post)=>{
            return <ProfilePost key={post.id} post={post}></ProfilePost>
          })}
        </>
      )}
    </Grid>
  )
}

export default ProfilePosts

const NoPostsFound = () => {
	return (
		<Flex flexDir='column' textAlign={"center"} mx={"auto"} mt={10}>
			<Text fontSize={"2xl"}>No Posts Found🤔</Text>
		</Flex>
	);
};