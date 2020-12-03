import { useState, useEffect } from 'react'
import firebase from "gatsby-plugin-firebase"

async function asyncCollection(collection, orderBy = "", orderType = "desc") {
    return await new Promise((resolve, reject) => {
        firebase.firestore().collection(collection).orderBy(orderBy, orderType).get()
            .then(snap => {
                let data = []
                snap.forEach(doc => {
                    data.push(
                        Object.assign(
                            {
                                id: doc.id
                            },
                            doc.data()
                        )
                    )
                })
                resolve(data)
            })
            .catch(error => {
                reject(error.stack)
            })
    })
}

export function useCollection(collection, orderBy, orderType) {
    const [data, setdata] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
            try {
                const array = await asyncCollection(collection, orderBy, orderType)
                setdata(array)
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        })()
    }, [collection, orderBy, orderType])

    return {
        data,
        error,
        loading
    }
}

export function useLazyCollection(collection, orderBy, orderType) {
    const [data, setdata] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    async function exec() {
        setLoading(true)
        try {
            const array = await asyncCollection(collection, orderBy, orderType)
            setdata(array)
            setLoading(false)
            return array
        } catch (error) {
            setError(error)
            setLoading(false)
            return error
        }
    }

    return [
        exec,
        {
            data,
            error,
            loading
        }
    ]

}