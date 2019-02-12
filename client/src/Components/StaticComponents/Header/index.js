import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './style.css';

/* MATERIAL */
import SearchIcon from '@material-ui/icons/Search';
import connect from "react-redux/es/connect/connect";

class Header extends Component {

    render() {
        const {currentPage} = this.props;
        return (
            <section className="header">
                <div className="container">
                    <div className="header_right">
                        <Link to="/" className="header_logo">bobr</Link>
                        <nav className="header_navigation">
                            <Link to="/"
                                  className={currentPage === "home" ? "active_page" : ""}>
                                  Публикации
                            </Link>
                            <Link to="/publish"
                                  className={currentPage === "publish" ? "active_page" : ""}>
                                Опубликовать
                            </Link>
                        </nav>
                    </div>
                    <div className="header_panel">
                        <SearchIcon/>
                        <button className="sign_in_btn">Вход</button>
                        <button className="blue_button sign_up_btn">Регистрация</button>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentPage: state.currentPage,
    }
};

export default connect(mapStateToProps)(Header);