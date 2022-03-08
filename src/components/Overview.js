import React, { useContext } from 'react'
import { GithubContext } from '../context/GithubContext' 

const Overview = () => {
    const { overview } = useContext(GithubContext)

        return (
            <h1>Overview sheesh</h1>
        )
}

export default Overview
