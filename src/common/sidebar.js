import React from "react";
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
    constructor(props){
        super(props)

        this.state = {}
    }

    render(){
        return <div className="border-end sidenav" id="sidebar-wrapper">
            <div className="sidebar-heading border-bottom ">
                <Link to="/landing-page">
                    <h6>What India Think</h6>
                    {/* <img alt="Alt content" src={require('./../assets/images/logo.png')} /> */}
                </Link>
            </div>
            <PerfectScrollbar className="sidebar-items">
                <ul className="list-unstyled ps-0">
                    {/* <li className="mb-1">
                        <Link tag="a" className="" to="/">
                            <i className="fa fa-dashboard"></i> All User
                        </Link>
                    </li> */}
                    <li className="mb-1">
                        <Link tag="a" className="" to="/all-user">
                            <i className="fa fa-file-o"></i> All Users
                        </Link>
                    </li>
                    <li className="mb-1">
                        <Link tag="a" className="" to="/all-contact">
                            <i className="fa fa-file-o"></i> All Contacts
                        </Link>
                    </li>
                    <li className="mb-1">
                        <Link tag="a" className="" to="/blog-post">
                            <i className="fa fa-file-o"></i> Blog Post
                        </Link>
                    </li>
                    {/* <li className="mb-1">
                        <Link tag="a" className="" to="/poll-post">
                            <i className="fa fa-file-o"></i> Poll Post
                        </Link>
                    </li> */}
                    <li className="mb-1">
                        <Link tag="a" className="" to="/blog-comment">
                            <i className="fa fa-file-o"></i> Blog Comment
                        </Link>
                    </li>
                    <li className="mb-1">
                        <Link tag="a" className=" border-bottom" to="/poll-comment">
                            <i className="fa fa-file-o"></i> Poll Comment
                        </Link>
                    </li>
                    <li><Link className="dropdown-item border-bottom" to="/"><i className="fa fa-sign-out" aria-hidden="true"></i> Sign out</Link></li>
                    {/* <li className="border-top my-3"></li>
                    <li className="mb-1">
                        <Link tag="a" className="" to="/typography">
                        <i className="fa fa-text-width" aria-hidden="true"></i> Typography
                        </Link>
                    </li> */}
                    
                    {/* collapsable list item example */}
                     {/* <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                        Opportunity
                        </button>
                        <div className="collapse" id="dashboard-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><a href="#" className="rounded">Overview</a></li>
                            <li><a href="#" className="rounded">Weekly</a></li>
                            <li><a href="#" className="rounded">Monthly</a></li>
                            <li><a href="#" className="rounded">Annually</a></li>
                        </ul>
                        </div>
                    </li> 
                    <li className="border-top my-3"></li>  */}
                   
                </ul>
            </PerfectScrollbar>
            
        </div>
    }
}

export default Sidebar;