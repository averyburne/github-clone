// import { getMouseEventOptions } from '@testing-library/user-event/dist/utils'
import React, { createContext, useState, useEffect } from 'react'

export const GithubContext = createContext()

export const GithubState = ({ children }) => {
    const [user, setUser] = useState('')
    const [repos, setRepos] = useState(null)
    const [followers, setFollowers] = useState(null)
    const [overview, setOverview] = useState(null)
    const [search, setSearch] = useState('averyburne')
    const [error, setError] = useState('')

    const getSearch = e => {
        e.preventDefault()
        getData()
        setSearch('')
    }

    const getData = () => {
        fetch(`https://api.github.com/users/${search}`)
        .then(res => res.json())
        .then(data => {
            if (data.message) {
                setUser('')
                setRepos(null)
                setFollowers(null)
                setOverview(null)
                setError('User not found...')
            } else {
                setUser(data)
                getRepos()
                getOverview()
                getFollowers()
                setError('')
            }
        })
    }

    const getRepos = () => {
        fetch(`https://.api.github.com/users/${search}/repos`)
            .then((res) => res.json())
            .then((data) => setRepos(data))
    }

    const getOverview = () => {
        fetch(`https://.api.github.com/users/${search}/repos?per_page=8&sort=asc`)
            .then((res) => res.json())
            .then((data) => setOverview(data))
    }

    const getFollowers = () => {
        fetch(`https://.api.github.com/users/${search}/followers`)
            .then((res) => res.json())
            .then((data) => setFollowers(data))
    }

    useEffect(() => {
        getData()
        setSearch('')
    },[])

    return (
        <GithubContext.Provider
        value={{ 
            getSearch, 
            user, 
            repos, 
            followers, 
            overview, 
            search, 
            setSearch, 
            error }}>
            {children}
        </GithubContext.Provider>
    )
}
