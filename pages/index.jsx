import { readFileSync } from "fs"

export const getStaticProps = () => {
  const { i18next } = require("../next.config")
  const config = readFileSync("next.config.js", "utf-8")

  return {
    props: {
      title: i18next?.title ?? "Undefined",
      config
    }
  }
}

export const IndexPage = ({ title, config }) => (
  <main>
    <h1>{title}</h1>
    <pre>{config}</pre>
  </main>
)

export default IndexPage
