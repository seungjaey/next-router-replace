import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const IframeContentPage: NextPage = () => {
  const router = useRouter();
  const {
    query: {
      productCode,
    }
  } = router
  return (
    <div>
      {`iframe 컨텐츠 : ${productCode}`}
    </div>
  )
}

export default IframeContentPage