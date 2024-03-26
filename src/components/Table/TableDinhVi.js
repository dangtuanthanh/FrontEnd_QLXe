import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrash, faCheck, faBan } from '@fortawesome/free-solid-svg-icons'
const TableDinhVi = (props) => {
    const [isAsc, setIsAsc] = useState(false);//trạng thái sắp xếp tăng dần
    //hàm sắp xếp
    const handleClickSort = (value) => {//Xử lý click cột sắp xếp
        if (isAsc) {
            props.setdataUser({ ...props.dataUser, sortBy: value, sortOrder: 'asc' })
            setIsAsc(false)
            if (value === 'NgayMua' || value === 'NgayHetHan')
                props.addNotification(`Sắp xếp cũ nhất tới mới nhất theo ${value}`, 'success', 3000)
            else
                props.addNotification(`Sắp xếp tăng dần theo ${value}`, 'success', 3000)
        } else {
            props.setdataUser({ ...props.dataUser, sortBy: value, sortOrder: 'desc' })
            setIsAsc(true)
            if (value === 'NgayMua' || value === 'NgayHetHan')
                props.addNotification(`Sắp xếp mới nhất đến cũ nhất theo ${value}`, 'success', 3000)
            else
                props.addNotification(`Sắp xếp giảm dần theo ${value}`, 'success', 3000)
        }


    };
    return (
        <table id="thanhvien" class="table align-items-center mb-0">
            <thead>
                <tr >
                    {/* <th style={{ padding: 8, textAlign:'center'}} onClick={() => handleClickSort('MaXe')} class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-10">Mã Nhóm Loại Xe</th> */}
                    <th style={{ textAlign: 'center',padding: 8 }} onClick={() => handleClickSort('BienSoXe')} class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-10">Biển Số Xe </th>

                    <th style={{ textAlign: 'center',padding: 8 }} onClick={() => handleClickSort('LanMuaDinhVi')} class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-10">Lần Mua Định Vị</th>

                    <th style={{ textAlign: 'center', padding: 8 }} onClick={() => handleClickSort('NgayMua')} class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-10">Ngày Mua</th>

                    <th style={{ textAlign: 'center', padding: 8 }} onClick={() => handleClickSort('NgayHetHan')} class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-10">Ngày Hết Hạn </th>

                    <th style={{ padding: 8 }} onClick={() => handleClickSort('NguoiMuaDinhVi')} class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-10">Người Mua Định Vị</th>
                    <th style={{ textAlign: 'center', padding: 8 }} onClick={() => handleClickSort('TinhTrangApDung')} class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-10">Trạng Thái</th>
                    <th style={{ textAlign: 'center', padding: 8 }} class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-10 ps-2">Hành Động</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.duLieuHienThi.map((dulieu, index) =>
                        //<div  onClick={() => handleRowClick(thanhvien)}>
                        <tr style={{ 'textAlign': 'center' }} id='trdata' key={index} onClick={() => {
                            props.setIsInsert(false)
                            props.setIDAction(dulieu.MaXe)
                            props.setIDAction2(dulieu.LanMuaDinhVi)
                            props.setIDAction3(dulieu.BienSoXe)
                            props.setPopupInsertUpdate(true)
                        }} >
                            {/* <td >{dulieu.MaXe}</td> */}
                            <td>{dulieu.BienSoXe}</td>
                            <td >{dulieu.LanMuaDinhVi}</td>
                            <td >{dulieu.NgayMua}</td>
                            <td >{dulieu.NgayHetHan}</td>
                            <td style={{ textAlign: 'left' }} >{dulieu.NguoiMuaDinhVi}</td>
                            {dulieu.TinhTrangApDung ?
                                <td style={{ color: 'green' }} ><FontAwesomeIcon icon={faCheck} /> Áp Dụng</td>
                                :
                                <td style={{ color: 'darkorange' }} ><FontAwesomeIcon icon={faBan} /> Không Áp Dụng</td>
                            }
                            {/* <td style={{ padding: '0' }}>
                                <img
                                    height={'35px'}
                                    src={dulieu.HinhAnh}></img>
                            </td> */}
                            <td>
                                <a onClick={(e) => {
                                    e.stopPropagation();
                                    props.setIsInsert(false)
                                    props.setIDAction(dulieu.MaXe)
                                    props.setIDAction2(dulieu.LanMuaDinhVi)
                                    props.setIDAction3(dulieu.BienSoXe)
                                    props.setPopupInsertUpdate(true)
                                }}>
                                    <i class="fas fa-pencil-alt text-dark me-2" aria-hidden="true" />
                                    < FontAwesomeIcon icon={faPencil} />
                                    {/* < FontAwesomeIcon icon={faPencil}style={{color:'cb0c9f'}} /> */}
                                </a>
                                ㅤ
                                <a onClick={(e) => {
                                    e.stopPropagation(); props.openPopupAlert(
                                        `Bạn có chắc chắn muốn xoá ${dulieu.BienSoXe} lần ${dulieu.LanMuaDinhVi}`,
                                        () => { props.deleteData(dulieu.MaXe, dulieu.LanMuaDinhVi) }
                                    )
                                }} class='btnEdit'><FontAwesomeIcon icon={faTrash} /></a>

                            </td>

                        </tr>
                        //</div>
                    )
                }
            </tbody>
        </table>
    )
};

export default TableDinhVi;