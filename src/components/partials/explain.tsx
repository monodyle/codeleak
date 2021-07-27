import { LINKS } from 'constants/config.const'

const Paragraph: React.FC<{}> = ({ children }) => (
  <p className="my-3 text-gray-500">{children}</p>
)

export const Explain = () => {
  return (
    <div className="py-2">
      <h2 className="text-lg font-semibold">What is this?</h2>
      <Paragraph>
        This is a service that save your link as a code and share with others,
        then they can paste it back to decode. Everything in a few clicks.
      </Paragraph>
      <Paragraph>
        Let&apos;s take an example, decode this code:{' '}
        <code className="inline-block px-1 font-mono text-gray-700 bg-gray-100 border border-gray-200 rounded">
          XXXXXXXX
        </code>
      </Paragraph>
      <Paragraph>
        Feel free to use. If you enjoy, you can{' '}
        <a href={LINKS.donate} className="font-medium">
          buy me a coffee
        </a>
        .
      </Paragraph>
    </div>
  )
}
