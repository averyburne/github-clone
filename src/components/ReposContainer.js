import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Overview from './Overview'

const ReposContainer = () => {

        return (
            <div className='reposContainer'>
                <Routes>
                    <Route path='/overview' component={Overview}/>
                    <Route path='/repos'/>
                    <Route path='/followers'/>
                </Routes>
            </div>
        )
}

export default ReposContainer