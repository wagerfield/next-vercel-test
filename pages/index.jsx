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
    <pre>{JSON.stringify(result, null, 2)}</pre>
  </main>
)

export default IndexPage
