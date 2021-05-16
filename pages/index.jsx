export const getStaticProps = () => {
  let config = require("../next.config")

  if (typeof config === "function") config = config()
  
  return {
    props: {
      config
    }
  }
}

export const IndexPage = ({ config }) => (
  <pre>{JSON.stringify(config, null, 2)}</pre>
)

export default IndexPage
