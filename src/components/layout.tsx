import Header from "./header"
import Footer from "./footer"

const Layout = (props: any) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  )
}

export default Layout