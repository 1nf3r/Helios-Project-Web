const ProgressBar = ({props}) => {
    const bgcolor = props.bgColor
    let progress = props.progress

    const containerStyles = {
      height: 20,
      width: '40vw',
      backgroundColor: "#E2E0DF",
      borderRadius: 50,
      margin: 50
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${progress}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right'
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold'
    }

    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span style={labelStyles}>{`${progress}`}</span>
            </div>
        </div>
    )
}

export default ProgressBar