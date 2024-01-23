import React, { useEffect, useState } from 'react'
import CardPost from './CardPost'
const YourPost = ({ setUpdate }) => {
    const user = JSON.parse(localStorage.getItem("User"))
    const userId = user && user.user._id
    const [data, setData] = useState([])
    useEffect(() => {
        yourpost()
    }, [])
    const yourpost = async () => {
        try {
            const response = await fetch(`https://socailmediaappapi.vercel.app/api/v1/posts/getYourPost/${userId}`)
            const resdata = await response.json()
            if (response.ok) {
                setData(resdata.yourpost)
            }
        } catch (error) {
            console.log("there is error while getting you post", error)
        }
    }
    return (
        <div>
            {
                Array.isArray(data) && data.map((data) => {
                    return (
                        <div    >
                            <CardPost  key={data._id}
                             id={data?._id}
                                time={data.createdAt}
                                comments={data?.comments}
                                file={data?.file}
                                description={data?.description}
                                avater={data?.user.avater}
                                fullname={data.user.fullname}
                                user_id={data.user._id}
                                setUpdate={setUpdate}
                            />
                            <div className='w-full h-2 bg-slate-50'></div>
                        </div>)
                })
            }

        </div>
    )
}

export default YourPost
