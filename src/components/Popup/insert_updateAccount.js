import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import Combobox from "../Combobox";
import { getCookie } from "../Cookie";
import Insert_updateJobPosition from "./Insert_updateJobPosition";
import Insert_updateRole from "./Insert_updateRole";
import { urlGetRole, urlInsertAccount, urlGetJobPosition, urlGetAccount, urlUpdateAccount } from "../url"

const Insert_updateAccount = (props) => {
    //xử lý redux
    const dispatch = useDispatch()
    //lưu trữ dữ liệu gửi đi
    const [dataReq, setDataReq] = useState({});
    useEffect(() => {
        console.log('dữ liệu gửi đi: ', dataReq);
    }, [dataReq]);
    const [dataUser, setdataUser] = useState({});//
    //xử lý hiển thị ô tài khoản, mật khẩu
    const [isChecked, setIsChecked] = useState(false);

    const [isDisabled, setIsDisabled] = useState(true);
    // combobox
    const [combosVaiTro, setCombosVaiTro] = useState([]);//danh sách vai trò
    const [combosViTriCongViec, setCombosViTriCongViec] = useState([]);//danh sách vị trí công việc
    //hiển thị popup thêm vị trí công việc và vai trò truy cập
    const [themVTCV, setThemVTCV] = useState(false);
    const [themVTTC, setThemVTTC] = useState(false);
    //bắt buộc nhập
    const batBuocNhap = <span style={{ color: 'red' }}>*</span>;
    const [resTaiKhoan, setResTaiKhoan] = useState(false);
    useEffect(() => {
        dispatch({ type: 'SET_LOADING', payload: true })
        if (props.iDAction) {
            const fetchGetAccount = fetch(`${urlGetAccount}?id=${props.iDAction}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'ss': getCookie('ss'),
                },
            })

            const fetchGetRole = fetch(`${urlGetRole}?limit=10000`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'ss': getCookie('ss'),
                },
            })
            const fetchGetJobPosition = fetch(`${urlGetJobPosition}?limit=10000`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'ss': getCookie('ss'),
                },
            })
            Promise.all([fetchGetRole, fetchGetJobPosition, fetchGetAccount])
                .then(responses => {
                    const processedResponses = responses.map(response => {
                        if (response.status === 200) {
                            return response.json();
                        } else if (response.status === 401 || response.status === 500) {
                            return response.json().then(errorData => {
                                throw new Error(errorData.message);
                            });
                        } else {
                            return null;
                        }
                    });
                    return Promise.all(processedResponses);
                })
                .then(data => {
                    setCombosVaiTro(data[0].data)
                    setCombosViTriCongViec(data[1].data)
                    //xử lý dữ liệu hiển thị nếu là sửa dữ liệu
                    if (props.isInsert === false) {
                        let getAccountByID = data[2]
                        const NgaySinh = new Date(data[2].NgaySinh);
                        const formattedDate = NgaySinh.toISOString().split("T")[0];
                        const NgayVao = new Date(data[2].NgayVao);
                        const formattedDate2 = NgayVao.toISOString().split("T")[0];
                        const strings = data[2].IDVaiTro.map(num => num.toString());
                        getAccountByID = ({
                            ...getAccountByID,
                            NgaySinh: formattedDate,
                            NgayVao: formattedDate2,
                            IDVaiTro: strings
                        });
                        setDataReq(getAccountByID)
                        if (data[2].TaiKhoan) {
                            setResTaiKhoan(true)
                            setIsChecked(true);
                            setIsDisabled(false);
                        }
                    }
                    else setDataReq({
                        ...dataReq,
                        IDViTriCongViec: data[1].data[0].IDViTriCongViec
                    });
                    //ẩn loading
                    dispatch({ type: 'SET_LOADING', payload: false })
                })
                .catch(error => {
                    if (error instanceof TypeError) {
                        props.openPopupAlert('Không thể kết nối tới máy chủ. Vui lòng kiểm tra đường truyền kết nối!')
                    } else {
                        props.addNotification(error.message, 'warning', 5000)
                    }
                    dispatch({ type: 'SET_LOADING', payload: false })
                });
        } else {
            const fetchGetRole = fetch(`${urlGetRole}?limit=10000`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'ss': getCookie('ss'),
                },
            })
            const fetchGetJobPosition = fetch(`${urlGetJobPosition}?limit=10000`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'ss': getCookie('ss'),
                },
            })
            Promise.all([fetchGetRole, fetchGetJobPosition])
                .then(responses => {
                    const processedResponses = responses.map(response => {
                        if (response.status === 200) {
                            return response.json();
                        } else if (response.status === 401 || response.status === 500) {
                            return response.json().then(errorData => {
                                throw new Error(errorData.message);
                            });
                        } else {
                            return null;
                        }
                    });
                    return Promise.all(processedResponses);
                })
                .then(data => {
                    setCombosVaiTro(data[0].data)
                    setCombosViTriCongViec(data[1].data)
                    setDataReq({
                        ...dataReq,
                        IDViTriCongViec: data[1].data[0].IDViTriCongViec
                    });
                    //ẩn loading
                    dispatch({ type: 'SET_LOADING', payload: false })
                })
                .catch(error => {
                    if (error instanceof TypeError) {
                        props.openPopupAlert('Không thể kết nối tới máy chủ. Vui lòng kiểm tra đường truyền kết nối!')
                    } else {
                        props.addNotification(error.message, 'warning', 5000)
                    }
                    dispatch({ type: 'SET_LOADING', payload: false })
                });
        }



    }, [dataUser]);

    //combo vai trò
    const handleVaiTroChange = (ID) => {
        let updatedDataReq = { ...dataReq };
        let IDVaiTro = updatedDataReq.IDVaiTro;

        if (IDVaiTro.includes(ID)) {
            IDVaiTro = IDVaiTro.filter(item => item !== ID)
        } else {
            IDVaiTro.push(ID);
        }
        updatedDataReq.IDVaiTro = IDVaiTro;

        setDataReq(updatedDataReq);

    }
    //combo vị trí công việc
    function handleViTriCongViecChange(selectedValue) {
        setDataReq({
            ...dataReq,
            IDViTriCongViec: selectedValue
        });
    }
    // xử lý ảnh
    //url xử lý hiển thị hình ảnh
    const [urlAnh, setUrlAnh] = useState();
    useEffect(() => {
        if (dataReq.HinhAnh && dataReq.HinhAnh instanceof File) { // Kiểm tra kiểu dữ liệu
            setUrlAnh(URL.createObjectURL(dataReq.HinhAnh));
        } else setUrlAnh(dataReq.HinhAnh);
    }, [dataReq.HinhAnh]);
    function ImageUpload() {
        const fileInputRef = useRef(null);

        const handleImageChange = (event) => {
            const file = event.target.files[0];
            if (file) {
                // Kiểm tra xem file có phải là hình ảnh hay không
                if (file.type.startsWith('image/')) {
                    const reader = new FileReader();
                    reader.onload = () => {
                        setDataReq({
                            ...dataReq,
                            HinhAnh: file // Lưu file hình ảnh vào dataReq
                        });
                    };
                    reader.readAsDataURL(file);
                } else {
                    props.openPopupAlert('Bạn chỉ có thể chọn file hình ảnh.')
                }
            } else {
                setDataReq({
                    ...dataReq,
                    HinhAnh: undefined
                });
            }
        };

        const handleChooseFileClick = () => {
            fileInputRef.current.click();
        };

        const handleDrop = (event) => {
            event.preventDefault();
            const file = event.dataTransfer.files[0];

            if (file) {
                // Kiểm tra xem file có phải là hình ảnh hay không
                if (file.type.startsWith('image/')) {
                    const reader = new FileReader();
                    reader.onload = () => {
                        setDataReq({
                            ...dataReq,
                            HinhAnh: file // Lưu file hình ảnh vào dataReq
                        });
                    };
                    reader.readAsDataURL(file);
                } else {
                    props.openPopupAlert('Bạn chỉ có thể chọn file hình ảnh.')
                }
            }
        };

        const handleDragOver = (event) => {
            event.preventDefault();
        };

        return (
            <div className="form-group">
                <label>Hình Ảnh</label>
                <div
                    style={{ textAlign: 'center', border: '1px dashed #ccc', padding: '20px' }}
                    onClick={handleChooseFileClick}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                >
                    <span style={{ color: 'blue' }}>Chọn file</span> hoặc Kéo và thả ảnh vào đây
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*" // Chỉ chấp nhận các file hình ảnh
                        style={{ display: 'none' }}
                        onChange={handleImageChange}
                    />
                    {dataReq.HinhAnh && (
                        <img
                            src={urlAnh} // Sử dụng URL.createObjectURL để hiển thị hình ảnh đã chọn
                            alt="Selected"
                            style={{ maxHeight: '112px', marginTop: '10px' }}
                        />
                    )}
                </div>
            </div>
        );
    }



    const handleCheckboxChange = (event) => {
        if (isDisabled === true) {//nếu đang hiện ô
            const updatedDataReq = { ...dataReq };
            if (!updatedDataReq.IDVaiTro) {
                updatedDataReq.IDVaiTro = [];
            }
            const IDVaiTro = updatedDataReq.IDVaiTro;
            IDVaiTro.push(String(combosVaiTro[0].IDVaiTro));
            updatedDataReq.IDVaiTro = IDVaiTro;
            setDataReq(updatedDataReq);
        } else {
            const inputElement = document.getElementById('accountInput');
            const inputElement2 = document.getElementById('passwordInput');

            if (inputElement) {
                inputElement.value = '';
            }
            if (inputElement2) {
                inputElement2.value = '';
            }
            const updatedDataReq = { ...dataReq };
            delete updatedDataReq.IDVaiTro;
            delete updatedDataReq.TaiKhoan;
            delete updatedDataReq.MatKhau;

            setDataReq(updatedDataReq);
        }
        setIsChecked(!isChecked);
        setIsDisabled(!event.target.checked);
    };
    const labelStyle = isDisabled ? { color: 'Silver' } : {};

    //xử lý xác nhận
    function handleFetchAPISubmit() {
        dispatch({ type: 'SET_LOADING', payload: true })
        const formData = new FormData();
        for (const key in dataReq) {
            if (dataReq.hasOwnProperty(key)) {
                formData.append(key, dataReq[key]);
            }
        }
        if (props.isInsert === true) {
            console.log('hành động thêm');
            fetch(urlInsertAccount, {
                method: 'POST',
                headers: {
                    'ss': getCookie('ss'),
                },
                body: formData
            })
                .then(response => {
                    if (response.status === 200) {
                        return response.json();
                    } else if (response.status === 401) {
                        return response.json().then(errorData => { throw new Error(errorData.message); });
                    } else if (response.status === 500) {
                        return response.json().then(errorData => { throw new Error(errorData.message); });
                    } else {
                        return;
                    }
                })
                .then(data => {
                    props.addNotification(data.message, 'success', 3000)
                    //ẩn loading
                    dispatch({ type: 'SET_LOADING', payload: false })
                    props.setPopup1(false)
                    props.setdataUser({ ...props.dataUser, page: 1, sortBy: 'IDNhanVien', sortOrder: 'desc' })
                })
                .catch(error => {
                    dispatch({ type: 'SET_LOADING', payload: false })
                    if (error instanceof TypeError) {
                        props.openPopupAlert('Không thể kết nối tới máy chủ. Vui lòng kiểm tra đường truyền kết nối!')
                    } else {
                        props.addNotification(error.message, 'warning', 5000)
                    }

                });
        } else {
            console.log('hành động sửa')
            fetch(urlUpdateAccount, {
                method: 'PUT',
                headers: {
                    'ss': getCookie('ss'),
                },
                body: formData
            })
                .then(response => {
                    if (response.status === 200) {
                        return response.json();
                    } else if (response.status === 401) {
                        return response.json().then(errorData => { throw new Error(errorData.message); });
                    } else if (response.status === 500) {
                        return response.json().then(errorData => { throw new Error(errorData.message); });
                    } else {
                        return;
                    }
                })
                .then(data => {
                    props.addNotification(data.message, 'success', 3000)
                    //ẩn loading
                    dispatch({ type: 'SET_LOADING', payload: false })
                    props.setPopup1(false)
                    props.setdataUser({ ...props.dataUser })
                })
                .catch(error => {
                    dispatch({ type: 'SET_LOADING', payload: false })
                    if (error instanceof TypeError) {
                        props.openPopupAlert('Không thể kết nối tới máy chủ. Vui lòng kiểm tra đường truyền kết nối!')
                    } else {
                        props.addNotification(error.message, 'warning', 5000)
                    }

                });
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isChecked === true) {
            if (props.isInsert) {
                //trường hợp check và thêm
                if (!dataReq.TaiKhoan
                    || !dataReq.MatKhau
                    || !dataReq.IDVaiTro
                    || !dataReq.IDVaiTro.length
                    || !dataReq.TenNhanVien
                    || !dataReq.IDViTriCongViec
                    || !dataReq.NgaySinh
                    || !dataReq.GioiTinh
                    || !dataReq.DiaChi
                    || !dataReq.SoDienThoai
                    || !dataReq.TinhTrang
                    || !dataReq.NgayVao
                ) props.openPopupAlert('Vui lòng nhập đầy đủ thông tin. Các trường có dấu * là bắt buộc nhập')
                else handleFetchAPISubmit();
                //check và sửa
            } else if (!dataReq.TaiKhoan
                || !dataReq.IDVaiTro
                || !dataReq.IDVaiTro.length
                || !dataReq.TenNhanVien
                || !dataReq.IDViTriCongViec
                || !dataReq.NgaySinh
                || !dataReq.GioiTinh
                || !dataReq.DiaChi
                || !dataReq.SoDienThoai
                || !dataReq.TinhTrang
                || !dataReq.NgayVao
            ) props.openPopupAlert('Vui lòng nhập đầy đủ thông tin. Các trường có dấu * là bắt buộc nhập')
            else handleFetchAPISubmit();
        } else if (!dataReq.TenNhanVien
            || !dataReq.IDViTriCongViec
            || !dataReq.NgaySinh
            || !dataReq.GioiTinh
            || !dataReq.DiaChi
            || !dataReq.SoDienThoai
            || !dataReq.TinhTrang
            || !dataReq.NgayVao) {
            props.openPopupAlert('Vui lòng nhập đầy đủ thông tin. Các trường có dấu * là bắt buộc nhập')
        }
        else {
            handleFetchAPISubmit();
        }
    };
    const batPopupThemKhachHang = () => {
        setThemVTCV(true)
    }


    return (
        <div className="popup-box">
            <div className="box">
                <div className="conten-modal">
                    <div>
                        <div className="bg-light px-4 py-3">
                            <h4 id='tieudepop'>{props.tieuDe}<span style={{ color: 'blue' }}>ㅤ{props.iDAction}</span></h4>
                            <form onSubmit={handleSubmit}>
                                {/* <div className="form-group">
                                    <label>Mã Nhân Viên</label>
                                    <input
                                        id="editSoHD"
                                        type="text"
                                        className="form-control"
                                        readOnly
                                        style={{ opacity: 0.5, cursor: "not-allowed" }}
                                        value=''
                                    />
                                </div> */}
                                <div className="row">
                                    <div className='col-6'>
                                        <div className="form-group">
                                            <label>Tên Nhân Viên {batBuocNhap}</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={dataReq.TenNhanVien}
                                                onChange={(event) => {
                                                    setDataReq({
                                                        ...dataReq,
                                                        TenNhanVien: event.target.value
                                                    });
                                                }}
                                            />
                                        </div>
                                        <Combobox
                                            combos={combosViTriCongViec}
                                            columnValue="IDViTriCongViec"
                                            columnAdd="TenViTriCongViec"
                                            nameCombo="Vị Trí Công Việc: "
                                            batBuocNhap={batBuocNhap}
                                            //defaultValue=''
                                            value={dataReq.IDViTriCongViec}
                                            onChange={handleViTriCongViecChange}
                                            onClick={batPopupThemKhachHang}
                                            isAdd={true}
                                        />
                                        <div className="form-group">
                                            <label>Ngày Sinh {batBuocNhap}</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                onChange={(event) => {
                                                    setDataReq({
                                                        ...dataReq,
                                                        NgaySinh: event.target.value
                                                    });
                                                }}
                                                value={dataReq.NgaySinh}
                                            //  defaultValue='' 
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Giới Tính {batBuocNhap} ㅤ</label>
                                            <label>
                                                <input
                                                    type="radio"
                                                    value="Nam"
                                                    checked={dataReq.GioiTinh === 'Nam'}
                                                    onChange={(event) => {
                                                        setDataReq({
                                                            ...dataReq,
                                                            GioiTinh: event.target.value
                                                        });
                                                    }}
                                                />
                                                Namㅤ
                                            </label>
                                            <label>
                                                <input
                                                    type="radio"
                                                    value="Nữ"
                                                    checked={dataReq.GioiTinh === 'Nữ'}
                                                    onChange={(event) => {
                                                        setDataReq({
                                                            ...dataReq,
                                                            GioiTinh: event.target.value
                                                        });
                                                    }}
                                                />
                                                Nữ
                                            </label>
                                        </div>
                                        <div className="form-group">
                                            <label>Địa Chỉ {batBuocNhap}</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={dataReq.DiaChi}
                                                onChange={(event) => {
                                                    setDataReq({
                                                        ...dataReq,
                                                        DiaChi: event.target.value
                                                    });
                                                }}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Số Điện Thoại {batBuocNhap}</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                value={dataReq.SoDienThoai}
                                                onChange={(event) => {
                                                    setDataReq({
                                                        ...dataReq,
                                                        SoDienThoai: event.target.value
                                                    });
                                                }}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Tình Trạng {batBuocNhap} ㅤ</label>
                                            <label>
                                                <input
                                                    type="radio"
                                                    value='Đang làm'
                                                    checked={dataReq.TinhTrang === 'Đang làm'}
                                                    onChange={(event) => {
                                                        setDataReq({
                                                            ...dataReq,
                                                            TinhTrang: event.target.value
                                                        });
                                                    }}
                                                />
                                                Đang làmㅤ
                                            </label>
                                            <label>
                                                <input
                                                    type="radio"
                                                    value='Đã nghỉ'
                                                    checked={dataReq.TinhTrang === 'Đã nghỉ'}
                                                    onChange={(event) => {
                                                        setDataReq({
                                                            ...dataReq,
                                                            TinhTrang: event.target.value
                                                        });
                                                    }}
                                                />
                                                Đã nghỉ
                                            </label>
                                        </div>
                                        <div className="form-group">
                                            <label>Ngày Vào {batBuocNhap}</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                onChange={(event) => {
                                                    setDataReq({
                                                        ...dataReq,
                                                        NgayVao: event.target.value
                                                    });
                                                }}
                                                value={dataReq.NgayVao} />
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <ImageUpload />
                                        <div className="form-group">
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    onChange={handleCheckboxChange}
                                                    checked={isChecked}
                                                />
                                                ㅤCho Phép Truy Cập Ứng Dụng Quản Lý
                                            </label>
                                        </div>
                                        <label style={{
                                            ...labelStyle,
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}>

                                            Vai Trò Truy Cập:

                                            <div
                                                style={{
                                                    marginLeft: '10px'
                                                }}
                                                onClick={() => setThemVTTC(true)}
                                            >
                                                <FontAwesomeIcon icon={faPlusCircle} />
                                            </div>

                                            {isChecked && <span style={{ color: 'red' }}>*</span>}

                                        </label>
                                        <div className="form-group"
                                            style={{ maxHeight: '90px', overflow: 'auto' }}
                                        >

                                            {combosVaiTro.map(combo => (
                                                <div key={combo.IDVaiTro} >
                                                    <label style={labelStyle}>
                                                        <input
                                                            disabled={isDisabled}
                                                            type="checkbox"
                                                            checked={
                                                                (dataReq.IDVaiTro?.includes(combo.IDVaiTro.toString())) || false
                                                            }
                                                            onChange={() => handleVaiTroChange(combo.IDVaiTro.toString())}
                                                        />
                                                        {` ${combo["IDVaiTro"]} - ${combo["TenVaiTro"]}`}
                                                    </label>
                                                </div>
                                            ))}

                                            {/* <select
                                                className="form-select-sm"
                                                value={dataReq.IDVaiTro}
                                                onChange={handleVaiTroChange}
                                                disabled={isDisabled}
                                                multiple
                                                style={{ maxHeight: '100px', overflow: 'auto' }}
                                            >
                                                {combosVaiTro.map((combo) => (
                                                    <option key={combo["IDVaiTro"]} value={combo["IDVaiTro"]}>
                                                        {`${combo["IDVaiTro"]} - ${combo["TenVaiTro"]}`}
                                                    </option>
                                                ))}
                                            </select> */}

                                        </div>

                                        {/* <Combobox
                                            combos={combosVaiTro}
                                            columnValue="IDVaiTro"
                                            columnAdd="TenVaiTro"
                                            nameCombo="Vai Trò Truy Cập: "
                                            //defaultValue=''
                                            value={dataReq.IDVaiTro}
                                            onChange={handleVaiTroChange}
                                            labelStyle={labelStyle}
                                            disabled={isDisabled}
                                            batBuocNhap={isChecked && <span style={{ color: 'red' }}>*</span>}
                                            multiple={true}
                                            onReset={resetVaiTro}
                                        /> */}
                                        {/* <Multiselect
                                            name="Vai Trò Truy Cập"
                                            data={combosVaiTro}
                                            onChange={handleVaiTroChange}
                                        /> */}

                                        <div className="form-group">
                                            <label style={labelStyle}>
                                                Tài Khoản {isChecked && <span style={{ color: 'red' }}>*</span>}
                                            </label>
                                            <input
                                                id="accountInput"
                                                type="text"
                                                className="form-control"
                                                onChange={(event) => {
                                                    setDataReq({
                                                        ...dataReq,
                                                        TaiKhoan: event.target.value
                                                    });
                                                }}
                                                value={dataReq.TaiKhoan}
                                                disabled={isDisabled}
                                            />
                                        </div>


                                        {(props.isInsert || (props.isInsert === false && resTaiKhoan === false)) && (
                                            <div className="form-group">
                                                <label style={labelStyle}>Mật Khẩu {isChecked && <span style={{ color: 'red' }}>*</span>}</label>
                                                <input
                                                    id="passwordInput"
                                                    type="text"
                                                    className="form-control"
                                                    onChange={(event) => {
                                                        setDataReq({
                                                            ...dataReq,
                                                            MatKhau: event.target.value
                                                        });
                                                    }}
                                                    value={dataReq.MatKhau}
                                                    disabled={isDisabled}
                                                />
                                            </div>
                                        )}


                                        {props.isInsert === false && resTaiKhoan === true && (<div className="form-group"
                                            style={{ display: 'flex', flexDirection: 'column' }}
                                        >
                                            <label style={labelStyle}>
                                                <input
                                                    type="checkbox"
                                                    value='1234'
                                                    checked={dataReq.MatKhau === '1234'}
                                                    onChange={(event) => {
                                                        if (dataReq.MatKhau === '1234') {
                                                            const updatedDataReq = { ...dataReq };
                                                            delete updatedDataReq.MatKhau;
                                                            setDataReq(updatedDataReq);
                                                        } else
                                                            setDataReq({
                                                                ...dataReq,
                                                                MatKhau: event.target.value
                                                            });
                                                    }}
                                                />
                                                ㅤĐặt lại mật khẩu mặc định: 1234
                                            </label>
                                        </div>
                                        )}
                                    </div>
                                </div>
                                <button onClick={() => { props.setPopup1(false) }} type="button" className="btn btn-danger mt-3" >Huỷ Bỏ</button>
                                <button
                                    onClick={handleSubmit}
                                    style={{ float: "right" }} type="button"
                                    className="btn btn-primary mt-3"
                                >
                                    Xác Nhận
                                </button>
                            </form>
                            {
                                themVTCV && <div className="popup">
                                    <Insert_updateJobPosition
                                        isInsert={true}
                                        setPopupInsertUpdate={setThemVTCV}
                                        dataUser={dataUser}
                                        setdataUser={setdataUser}
                                        addNotification={props.addNotification}
                                        openPopupAlert={props.openPopupAlert}
                                    />
                                </div>
                            }
                            {
                                themVTTC && <div className="popup">
                                    <Insert_updateRole
                                        isInsert={true}
                                        setPopupInsertUpdate={setThemVTTC}
                                        dataUser={dataUser}
                                        setdataUser={setdataUser}
                                        addNotification={props.addNotification}
                                        openPopupAlert={props.openPopupAlert}
                                    />
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Insert_updateAccount;