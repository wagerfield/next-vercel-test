export const getStaticProps = () => {
  const config = require("../next.config")
  const result = typeof config === "function" ? config() : config

  console.log(result)

  return {
    props: {
      result,
    }
  }
}

export const IndexPage = ({ result }) => (
  <main>
    <pre>{result}</pre>
  </main>
)

export default IndexPage
