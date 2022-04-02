import {useState} from "react"
import Product from "./Product"
function Modal() {
    const [isLoading, setIsloading] = useState(false)
    const [newData, setNewData] = useState()
/**
 * Fetches data from a URL and then sets the newData state. Sets loading to true while responce is processing.
 */
    async function handleLoadClick() {
        setIsloading(true)
        const response = await fetch("https://course-api.com/javascript-store-products")
        if(response.status >= 200 && response.status <=299) {
            const newData = await response.json()
            setNewData(newData)
        } else {
            console.log(response.status)
        }
        setIsloading(false)
    }
    return <>
        <main>
            <p>Load products?</p>
            <button onClick={handleLoadClick} disabled={isLoading}>Load</button>
            {newData && newData.map(product => {
                return <Product key={product.id} {...product.fields} />
            })}
        </main>
        {isLoading && <div className="loader"></div>}
    </>

}

export default Modal;