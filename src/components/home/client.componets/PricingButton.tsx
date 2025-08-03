"use Client"

const PricingButton = () => {
    const styles = {
        width: '100%',
        height: '2.4em',
        marginTop: '3em',
        borderRadius: '5px',
        border: 'none',
        fontWeight: '600',
        fontSize: '1.3em'
    }
  return (
    <div>
       <button style={styles}>Get Started</button>
    </div>
  )
}

export default PricingButton
