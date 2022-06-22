import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NewProduct from '../components/NewProduct'
import ProductExamples from '../components/ProductExamples'
import ProductTypes from '../components/ProductTypes'
import CompanyInfo from '../components/CompanyInfo'
const Home: NextPage = () => {
  return (
    <>
      <NewProduct />
      <ProductTypes />
      <ProductExamples />
      <CompanyInfo />
    </>
  )
}

export default Home
