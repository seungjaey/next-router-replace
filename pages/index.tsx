import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <div>
        <Link href="/goods/1">
          [Problem] 상품 상세 페이지로 가기
        </Link>
      </div>
      <div>
        <Link href="/products/1">
          [Resolved] 상품 상세 페이지로 가기
        </Link>
      </div>
    </div>
  )
}

export default Home
