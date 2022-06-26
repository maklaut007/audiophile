import Navbar from '../Navbar'
import CompanyInfo from '../CompanyInfo'
import Footer from '../Footer';
type Props = {
  children?: JSX.Element | JSX.Element[];
};

export default function Layout({ children }: Props) {
  return (
    <>
    
      <Navbar />
      <main>{children}</main>
      <CompanyInfo />
      <Footer />
    </>
  )
}