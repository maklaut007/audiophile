import Navbar from './navbar'

type Props = {
  children?: JSX.Element | JSX.Element[];
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}