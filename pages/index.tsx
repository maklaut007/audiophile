import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NewProduct from '../components/NewProduct'
import ProductExamples from '../components/ProductExamples'
const Home: NextPage = () => {
  return (
    <>
      <NewProduct />
      <ProductExamples />
    </>
  )
}

export default Home
