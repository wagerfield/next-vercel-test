import { i18next } from "../next.config"

export const getStaticProps = () => {
  let config = require("../next.config")

  if (typeof config === "function") config = config()

  console.log(i18next)

  return {
    props: {
      config,
    }
  }
}

export const IndexPage = ({ config }) => (
  <pre>{JSON.stringify(config, null, 2)}</pre>
)

export default IndexPage
