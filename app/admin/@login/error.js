'use client' // Error components must be Client Components

import {Button} from '@/components/ui/button'
import { useEffect } from 'react'

export default function Error({ error, reset }) {

    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="container m-auto mt-6">
            <h2 className='text-xl'>Algo no salió bien!</h2>
            <hr className='my-6'/>
            <Button onClick={reset}>Intentar nuevamente</Button>
        </div>
    )
}