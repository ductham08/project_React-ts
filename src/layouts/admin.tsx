import { NavLink, Outlet, useParams } from 'react-router-dom'
import "../public/css/admin/admin_layout.css"
import Nav_bar from '../components/admin/nav_bar'

type Props = {}

const Admin_layout = (props: Props) => {


    return (
        <div className="admin_layout">
            <div className="nav_bar_admin col-2">
                <Nav_bar />
            </div>
            < div className="main col-10" >
                <div className="content_page" >
                    <Outlet></Outlet>
                </div >
            </div >
        </div >
    )
}

export default Admin_layout 