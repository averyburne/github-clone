import React, { useContext } from 'react'
import { GithubContext } from '../context/GithubContext'
import Container from './Container'
import Nav from './Nav'
import User from './User'
import ReposNav from './ReposNav'

const Hero = () => {
    const user = useContext(GithubContext)
    console.log(user)
    
    return (
        <section className='hero'>
            <Nav />
            <Container>
                {user ? 
                        <User /> : <> <p>No User</p>
                        <div className='wrapper'>
                            <ReposNav/>
                        </div>
                        </>}
            </Container>
        </section>
    )
}

export default Hero