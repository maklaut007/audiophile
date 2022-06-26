import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter();
  const { name } = router.query;
  return (
    <p>Post: {name}</p>
  )
}

export default Home
