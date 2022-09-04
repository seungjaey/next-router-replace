import type { NextPage, GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { useRouter } from 'next/router'
import IssueContent from '../../components/IssueContent'

const TEST_LINKS = [
  {
    code: 1,
    label: "테스트"
  },
  {
    code: 2,
    label: "테스트"
  },
  {
    code: 3,
    label: "테스트"
  },
]

const ProductDetailPage: NextPage = ({ productCode }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const handleClickLink = (code: number) => () => {
    if (productCode === code) {
      return;
    }
    (async () => {
      await router.replace(
        "/products/[productCode]",
        `/products/${code}`
      )
    })()
  }
  return (
    <div>
      <h1>{`${productCode} Page`}</h1>
      <ul>
        {
          TEST_LINKS.map((item) => {
            const {code, label} = item
            return (
              <li key={`${code}-item`}>
                <button onClick={handleClickLink(code)}>
                  {`${code} - ${label}`}
                </button>
              </li>
            )
          })
        }
      </ul>
      <IssueContent activeKey productCode={productCode} />
    </div>
  )
}

export default ProductDetailPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context
  const { productCode } = query
  return {
    props: {
      productCode,
    }
  }
}
