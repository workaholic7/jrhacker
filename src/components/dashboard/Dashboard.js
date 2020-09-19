import React from 'react';
import Users from './Users';
import { Suspense} from 'react';
const DashboardHeader = React.lazy(() => import('./DashboardHeader'));

function Dashboard() {


    return (
        <>  
        <Suspense fallback={<div>Loading...</div>}>
        <DashboardHeader />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
        <Users />
        </Suspense>
            
        </>
    )
}

export default Dashboard;