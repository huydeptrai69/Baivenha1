import Head from "next/head";
import styles from "../styles/Home.module.css";
import DynamicText from "../components/DynamicText";
import { Box,Grid,Center } from "@chakra-ui/layout";
import { Input} from "@chakra-ui/react";
import React, { useState,useRef } from "react";


const Home = () => {

  let childRef = useRef();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    childRef.current.changeValue(e.target.value);
  }
  return (
    <Box className={styles.container} width={"auto"}>
      <Center>
        <Head>
          <title>Coding Test</title>
          <DynamicText ref={this.childRef}></DynamicText>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <Box>
            <Input onChange={onChange} />
          </Box>
        </main>
      </Center>
    </Box>
  );
};

export default Home;
