import React, { useState } from "react";
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCog, faBell, faSignOut } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'

import { getCookie, deleteCookie } from "../components/Cookie";
import { urlLogout } from "../components/url";
import CheckLogin from "../components/CheckLogin"
import Navigation from "../components/Navigation"
import loadingGif from '../assets/img/loading/loading1.gif'
import TabTinhTrangXe from "../components/Tabs/TabTinhTrangXe";
import TabNhomLoaiXe from "../components/Tabs/TabNhomLoaiXe";
import TabLoaiXe from "../components/Tabs/TabLoaiXe";
import TabXe from "../components/Tabs/TabXe";
import '../App.css';

function Xe() {
    const [thongTinDangNhap, setThongTinDangNhap] = useState({
        menu: [],
        ThanhVien: {}
    });
    const xuLyLayThongTinDangNhap = (data) => {
        setThongTinDangNhap(data);
    };
    //xử lý redux
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const logout = () => {

        dispatch({ type: 'SET_LOADING', payload: true })
        fetch(urlLogout, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'ss': getCookie('ss'),
            },
        })
            .then(response => {
                if (response.status === 200) {
                    deleteCookie('ss')
                    dispatch({ type: 'SET_LOADING', payload: false })
                    navigate(`/`);
                    //window.location.href = "/";//Chuyển trang
                } else if (response.status === 401) {
                    return response.json().then(errorData => { throw new Error(errorData.message); });
                } else if (response.status === 500) {
                    return response.json().then(errorData => { throw new Error(errorData.message); });
                } else {
                    return;
                }
            })

            .catch(error => {
                dispatch({ type: 'SET_LOADING', payload: false })
                if (error instanceof TypeError) {
                    alert('Không thể kết nối tới máy chủ');
                } else {
                    alert(error);
                }

            });

    }

    //Xử lý menu
    const [showNavigation, setShowNavigation] = useState(true);
    const handleToggleNavigation = () => {
        setShowNavigation(!showNavigation);
    };
    const navigationColumnClass = showNavigation ? "col-2" : "col-0";
    const contentColumnClass = showNavigation ? "col-10" : "col-12";

    const loading = useSelector(state => state.loading.loading)
    const tabs = {
        tab1: 'TabTinhTrangXe',
        tab2: 'TabNhomLoaiXe',
        tab3: 'TabLoaiXe',
        tab4: 'TabXe'
    }

    const [activeTab, setActiveTab] = useState(tabs.tab4);

    const handleTabClick = tab => {
        setActiveTab(tab);
    }
    let TabComponent;

    if (activeTab === tabs.tab1) {
        TabComponent = TabTinhTrangXe;
    }

    if (activeTab === tabs.tab2) {
        TabComponent = TabNhomLoaiXe;
    }
    if (activeTab === tabs.tab3) {
        TabComponent = TabLoaiXe;
    }
    if (activeTab === tabs.tab4) {
        TabComponent = TabXe;
    }

    return (
        <CheckLogin thongTinDangNhap={xuLyLayThongTinDangNhap} >
            {loading && <div className="loading">
                <img src={loadingGif} style={{ width: '30%' }} />
            </div>}
            <div className="row">
                <div className={navigationColumnClass}>
                    {showNavigation && <Navigation menu={thongTinDangNhap.menu} />}
                </div>
                <div className={contentColumnClass}>
                    <div style={{ marginLeft: '2%', marginRight: '1%' }}>
                        <div style={{ marginLeft: '0px' }} className="row">
                            <ul class="nav nav-tabs col-6" >
                                <li class="nav-item" >
                                    <button class="nav-link " style={{ color: 'blue' }} onClick={handleToggleNavigation}>
                                        {showNavigation ? "<<" : ">>"}
                                    </button>
                                </li>
                                <li class="nav-item">
                                    <button
                                        className={activeTab === 'TabXe' ? 'nav-link active' : 'nav-link'}
                                        style={{ color: 'blue' }}
                                        onClick={() => handleTabClick(tabs.tab4)}>Xe</button>
                                </li>
                                <li class="nav-item">
                                    <button
                                        className={activeTab === 'TabTinhTrangXe' ? 'nav-link active' : 'nav-link'}
                                        style={{ color: 'blue' }}
                                        onClick={() => handleTabClick(tabs.tab1)}>Tình Trạng Xe</button>
                                </li>
                                <li class="nav-item">
                                    <button
                                        style={{ color: 'blue' }}
                                        className={activeTab === 'TabLoaiXe' ? 'nav-link active' : 'nav-link'}
                                        onClick={() => handleTabClick(tabs.tab3)}>Loại Xe</button>
                                </li>
                                <li class="nav-item">
                                    <button
                                        style={{ color: 'blue' }}
                                        className={activeTab === 'TabNhomLoaiXe' ? 'nav-link active' : 'nav-link'}
                                        onClick={() => handleTabClick(tabs.tab2)}>Nhóm Loại Xe</button>
                                </li>
                                
                            </ul>
                            <div className="col-6 d-flex justify-content-end align-items-center">
                                <span style={{ marginLeft: '20px' }} className="mb-0 d-sm-inline d-none text-body font-weight-bold px-0">
                                    <div onClick={() => {
                                        navigate(`/TrangCaNhan`);
                                    }}>
                                        <FontAwesomeIcon icon={faUser} />  Chào! <span style={{ color: 'blue' }}>{thongTinDangNhap.ThanhVien.TenThanhVien}</span>
                                    </div>
                                </span>
                                <span style={{ marginLeft: '20px' }} className="mb-0 d-sm-inline d-none text-body font-weight-bold px-0">
                                    <FontAwesomeIcon icon={faCog} />
                                </span>
                                <span style={{ marginLeft: '20px' }} className="mb-0 d-sm-inline d-none text-body font-weight-bold px-0">
                                    <FontAwesomeIcon icon={faBell} />
                                </span>
                                <button style={{ marginLeft: '20px' }} onClick={() => logout()} className="btn bg-gradient-info btn-sm mb-0">
                                    Đăng Xuất <FontAwesomeIcon icon={faSignOut} />
                                </button>
                            </div>
                        </div>
                        <TabComponent />

                    </div>
                </div>
            </div>
        </CheckLogin>
    );
}

export default Xe