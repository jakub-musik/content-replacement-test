import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { RenderALot } from '../components/RenderALot'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <div className={styles.content}>

      </div>
      <div id="copyme">
        <RenderALot />
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  console.log("test")
  return {
    props: {},
  }
}