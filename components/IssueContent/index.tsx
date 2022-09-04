interface Props {
  activeKey?: boolean
  productCode: string
}
export default function IssueContent(props: Props) {
  const { activeKey, productCode } = props
  const resourceUrl = `/iframe-content?productCode=${productCode}`
  return (
    <iframe
      key={activeKey ? resourceUrl : null}
      src={resourceUrl}
    />
  )
}