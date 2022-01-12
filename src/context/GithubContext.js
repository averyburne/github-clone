import { getMouseEventOptions } from '@testing-library/user-event/dist/utils'
import React, { createContext, useState, useEffect } from 'react'

export const GithubContext = createContext()

export const GithubState = ({ children }) => {
    const [user, setUser] = useState(null)
    const [repos, setRepos] = useState(null)
    const [followers, setFollowers] = useState(null)
    const [overview, setOverview] = useState(null)
    const [search, setSearch] = useState(null)
    const [error, setError] = useState(null)

    const getData = () => {
        fetch(`https://api.github.com/users/${search}`)
        .then(res => res.json())
        .then(data => {
            if (data.message) {
                setUser(null)
                setRepos(null)
                setFollowers(null)
                setOverview(null)
                setError('User not found...')
            } else {
                setUser(data)
                getRepos()
                getOverview()
                getFollowers()
            }
        })
    }

    const getRepos = () => {
        fetch(`https://.api.github.com/users/${search}/repos`)
            .then(res => res.json())
            .then(data => setRepos(data))
    }

    const getOverview = () => {
        fetch(`https://.api.github.com/users/${search}/repos?per_page=8&sort=asc`)
            .then(res => res.json())
            .then(data => setOverview(data))
    }

    const getFollowers = () => {
        fetch(`https://.api.github.com/users/${search}/followers`)
            .then(res => res.json())
            .then(data => setFollowers(data))
    }

    return (
        <GithubContext.Provider value={{  }}>
            {children}
        </GithubContext.Provider>
    )
}