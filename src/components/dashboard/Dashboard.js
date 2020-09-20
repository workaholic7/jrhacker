import React from 'react';
import Users from './Users';
import { Suspense} from 'react';
import Loading from '../common/Loading';
const DashboardHeader = React.lazy(() => import('./DashboardHeader'));

function Dashboard() {

    

    return (
        <>  
        <Suspense fallback={<Loading />}>
        <DashboardHeader />
        
        <Users />
        </Suspense>
            
        </>
    )
}

export default Dashboard;