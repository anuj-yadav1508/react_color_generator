import React from 'react'

const SingleColor = ({list}) => {
    // const [alert, setAlert] = useState(false)
    // useEffect(() => {
    //     const timeOut = setTimeout(() => {
    //         setAlert(false)
    //     },3000)
    //     return () => {
    //         clearTimeout(timeOut)
    //     }
    // },[alert])
    return (
        <article className='colors-section' >
            {
                list.map((item,index) => {
                    const {rgb,weight,hex} = item
                    const bgc = rgb.join(',')
                    console.log(bgc,weight,hex)
                    const hexColor = `#${hex}`
                return(
                        <div className="single-item" style={{backgroundColor:`rgb(${bgc})`}} key={index} >
                            {/* <div className="alert-click"
                            onClick={() => {setAlert(true)
                        navigator.clipboard.writeText(hexColor)}} 
                            >  */}
                            <p className="weight">{weight}%</p>
                            <p className='hex'>{hexColor}</p>
                            {/* {alert ? <p className='alert'>copied to clipboard</p> : ''}
                            </div> */}
                        </div>
                    )
                })
            }
        </article>
    )
}

export default SingleColor
