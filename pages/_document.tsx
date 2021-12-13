import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html lang='en'>
        <Head />
        <body className='relative text-white bg-gradient-to-br from-primary-darker via-primary-lighter to-primary-darker font-montserrat'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
