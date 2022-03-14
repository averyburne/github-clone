import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Overview from './Overview'
import Repos from './Repos'
import Followers from './Followers'

const ReposContainer = () => {

        return (
            <div className='reposContainer'>
                <Routes>
                    <Route path='/overview' component={Overview}/>
                    <Route path='/repos' component={Repos}>
                    <Route path='/followers' component={Followers}/>
                </Routes>
            </div>
        )
}

export default ReposContainer