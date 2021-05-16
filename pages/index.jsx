export const getStaticProps = async () => {
  const config = await import("../next.config")
  
  console.log(config)

  return {
    props: {
      i18next: {}
    }
  }
}

export const IndexPage = ({ i18next }) => (
  <pre>{JSON.stringify(i18next, null, 2)}</pre>
)

export default IndexPage
