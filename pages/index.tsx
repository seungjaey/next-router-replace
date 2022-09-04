import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      {
        /*
      <Link href="/goods/[productCode]" as={`/goods/1`} passHref>
        상품 상세 페이지로 가기
      </Link>
         */
      }

      <Link href="/goods/1">
        상품 상세 페이지로 가기
      </Link>

    </div>
  )
}

export default Home
