export const Heading = ({
  Tag,
  className,
  children,
  ...rest
}) => (
  <Tag 
    className={`heading heading--${Tag}`}
    {...rest}
  >
    <style jsx global>{`
      .heading {
      }

      .heading--h1 {
        font-size: 2em;
      }

      .heading--h2 {
        font-size: 1.6em;
      }

      .heading--h3 {
        font-size: 1.3em;
      }
    `}</style>

    {children}
  </Tag>
)

Heading.defaultProps = {
  Tag: 'h1'
}

export default Heading;