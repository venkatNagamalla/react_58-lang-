import './index.css'

const Greeting = props => {
  const {details} = props
  const {imageAltText, imageUrl} = details
  return (
    <div className="greeting-container">
      <img className="image" src={imageUrl} alt={imageAltText} />
    </div>
  )
}

export default Greeting
