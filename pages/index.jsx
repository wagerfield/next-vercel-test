export const getStaticProps = () => {
  const config = require("../next.config")
  
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
