import { readFileSync } from "fs"

export const getStaticProps = () => {
  const config = require("../next.config")
  const file = readFileSync("next.config.js", "utf-8")

  return {
    props: {
      config: JSON.stringify(config, null, 2),
      file
    }
  }
}

export const IndexPage = ({ config, file }) => (
  <main>
    <pre>{config}</pre>
    <pre>{file}</pre>
  </main>
)

export default IndexPage
