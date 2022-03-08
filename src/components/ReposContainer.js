import React from 'react'
import { Route } from 'react-router-dom'
import Overview from './Overview'

const ReposContainer = () => {

        return (
            <div className='reposContainer'>
                <Route path='/overview' component={Overview}/>
                <Route path='/repos'/>
                <Route path='/followers'/>
            </div>
        )
}

export default ReposContainer