import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const sessionName = localStorage.getItem("username")
    const menuList = [{ id: 1, name: "Home", path: "/home"},
                      { id: 2, name: "Post", path: "/post"},
                      { id: 3, name: "Chat", path: "/chat"},
                      { id: 4, name: "Group", path: "/group"},
                      { id: 5, name: "Consultation", path: "/consultation"},
                      { id: 6, name: "Log Out - " + sessionName, path: "/log-out"}];
                    
    return (
        <header>
            <nav className="navbar navbar-expand-md fixed-top shadow" style={{backgroundColor: "#DAEDFF"}}>
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={require('../../../asset/logo 2a 1.png')} alt="curhatin-logo" 
                        style={{ height: "40px" }} />
                    </a>
                    <button className="navbar-toggler" type="button">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="d-flex w-100 justify-content-end">
                            <div id='main-nav'>
                                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                    {menuList.map((v, index) => (
                                        <li className="nav-item me-1" key={index}>
                                            <NavLink className="nav-link text-hover-success px-3" to={v.path}>
                                                <i className={"bi me-2 fs-5 text-dark "+v.icon}></i>
                                                {v.name}
                                            </NavLink>
                                            {/* <a className="nav-link text-hover-success px-3" href={v.path}>
                                                <i className={"bi me-2 fs-5 text-dark "+v.icon}></i>
                                                {v.name}
                                            </a> */}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;