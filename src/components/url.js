//http://localhost:3000
/* Hệ thống
 */
//kiểm tra phiên đăng nhập
export const urlCheckLogin = 'https://backend-qlxe.onrender.com/session';
//đăng nhập
export const urlLogin = 'https://backend-qlxe.onrender.com/login';
// đăng ký
export const urlRegister= 'https://backend-qlxe.onrender.com/register';
// xác thực đăng ký
export const urlRegisterCode= 'https://backend-qlxe.onrender.com/registerCode';
//đăng xuất
export const urlLogout = 'https://backend-qlxe.onrender.com/logout';
//đổi thông tin thành viên
export const urlChangeInfo = 'https://backend-qlxe.onrender.com/changeInfo';
//đổi mật khẩu
export const urlChangePassword = 'https://backend-qlxe.onrender.com/changePassword';

/* Quản lý thành viên
 */
//lấy danh sách thành viên
export const urlGetMember = 'https://backend-qlxe.onrender.com/getMember';
// thêm thành viên
export const urlInsertMember = 'https://backend-qlxe.onrender.com/insertMember';
// sửa thành viên
export const urlUpdateMember = 'https://backend-qlxe.onrender.com/updateMember';
// xoá thành viên
export const urlDeleteMember = 'https://backend-qlxe.onrender.com/deleteMember';
// undo delete thành viên
export const urlUndoDeleteMember = 'https://backend-qlxe.onrender.com/undoDeleteMember';

export const urlGetRole = 'https://backend-qlxe.onrender.com/getRole';
// thêm vai trò
export const urlInsertRole = 'https://backend-qlxe.onrender.com/insertRole';
// sửa nhân viên
export const urlUpdateRole = 'https://backend-qlxe.onrender.com/updateRole';
// xoá vai trò
export const urlDeleteRole = 'https://backend-qlxe.onrender.com/deleteRole';
//lấy danh sách quyền
export const urlGetPermission = 'https://backend-qlxe.onrender.com/getPermission';



/* Quản lý xe
 */
//lấy danh sách tình trạng xe
export const urlGetStatusCar = 'https://backend-qlxe.onrender.com/getStatusCar';
// thêm tình trạng xe
export const urlInsertStatusCar = 'https://backend-qlxe.onrender.com/insertStatusCar';
// sửa tình trạng xe
export const urlUpdateStatusCar = 'https://backend-qlxe.onrender.com/updateStatusCar';
//xoá tình trạng xe
export const urlDeleteStatusCar = 'https://backend-qlxe.onrender.com/deleteStatusCar';

//lấy danh sách nhóm loại xe
export const urlGetGroupTypeCar = 'https://backend-qlxe.onrender.com/getGroupTypeCar';
// thêm nhóm loại xe
export const urlInsertGroupTypeCar = 'https://backend-qlxe.onrender.com/insertGroupTypeCar';
// sửa nhóm loại xe
export const urlUpdateGroupTypeCar = 'https://backend-qlxe.onrender.com/updateGroupTypeCar';
//xoá nhóm loại xe
export const urlDeleteGroupTypeCar = 'https://backend-qlxe.onrender.com/deleteGroupTypeCar';

//lấy danh sách loại xe
export const urlGetTypeCar = 'https://backend-qlxe.onrender.com/getTypeCar';
// thêm loại xe
export const urlInsertTypeCar = 'https://backend-qlxe.onrender.com/insertTypeCar';
// sửa loại xe
export const urlUpdateTypeCar = 'https://backend-qlxe.onrender.com/updateTypeCar';
//xoá loại xe
export const urlDeleteTypeCar = 'https://backend-qlxe.onrender.com/deleteTypeCar';

//lấy danh sách xe
export const urlGetCar = 'https://backend-qlxe.onrender.com/getCar';
// thêm xe
export const urlInsertCar = 'https://backend-qlxe.onrender.com/insertCar';
// sửa xe
export const urlUpdateCar = 'https://backend-qlxe.onrender.com/updateCar';
//xoá xe
export const urlDeleteCar = 'https://backend-qlxe.onrender.com/deleteCar';



/* Quản lý dịch vụ
 */
//lấy danh sách đăng kiểm
export const urlGetRegistry = 'https://backend-qlxe.onrender.com/getRegistry';
// thêm đăng kiểm
export const urlInsertRegistry = 'https://backend-qlxe.onrender.com/insertRegistry';
// sửa đăng kiểm
export const urlUpdateRegistry = 'https://backend-qlxe.onrender.com/updateRegistry';
//xoá đăng kiểm
export const urlDeleteRegistry = 'https://backend-qlxe.onrender.com/deleteRegistry';

//lấy danh sách phù hiệu
export const urlGetEmblem = 'https://backend-qlxe.onrender.com/getEmblem';
// thêm phù hiệu
export const urlInsertEmblem = 'https://backend-qlxe.onrender.com/insertEmblem';
// sửa phù hiệu
export const urlUpdateEmblem = 'https://backend-qlxe.onrender.com/updateEmblem';
//xoá phù hiệu
export const urlDeleteEmblem = 'https://backend-qlxe.onrender.com/deleteEmblem';

//lấy danh sách bảo hiểm
export const urlGetInsurance = 'https://backend-qlxe.onrender.com/getInsurance';
// thêm bảo hiểm
export const urlInsertInsurance = 'https://backend-qlxe.onrender.com/insertInsurance';
// sửa bảo hiểm
export const urlUpdateInsurance = 'https://backend-qlxe.onrender.com/updateInsurance';
//xoá bảo hiểm
export const urlDeleteInsurance = 'https://backend-qlxe.onrender.com/deleteInsurance';

//lấy danh sách định vị
export const urlGetLocate = 'https://backend-qlxe.onrender.com/getLocate';
// thêm định vị
export const urlInsertLocate = 'https://backend-qlxe.onrender.com/insertLocate';
// sửa định vị
export const urlUpdateLocate = 'https://backend-qlxe.onrender.com/updateLocate';
//xoá định vị
export const urlDeleteLocate = 'https://backend-qlxe.onrender.com/deleteLocate';




/* Bảng điều khiển
 */
//lấy số bàn đang có khách
export const urlGetOccupiedTables = 'https://backend-qlxe.onrender.com/getOccupiedTables';
//lấy số hoá đơn trong ngày
export const urlGetInvoiceToday = 'https://backend-qlxe.onrender.com/getInvoiceToday';
//lấy tổng tiền hoá đơn trong ngày
export const urlGetRevenueToday = 'https://backend-qlxe.onrender.com/getRevenueToday';
//lấy tổng tiền hoá đơn trong tháng
export const urlGetRevenueMonth = 'https://backend-qlxe.onrender.com/getRevenueMonth';
//lấy tổng tiền hoá đơn trong tuần
export const urlGetListRevenueMonth = 'https://backend-qlxe.onrender.com/getListRevenueMonth';