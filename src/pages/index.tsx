import Link from "next/link"
import style from "../styles/index.module.css"

const index = () => {
  return (
    <>
      <h1 className={style.h1Text}>こんにちわ</h1>

      <Link href="/contact">
        <a>Contactページへ移動</a>
      </Link>
    </>
    
  )
}

export default index