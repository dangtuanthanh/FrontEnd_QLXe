//http://localhost:3000
// http://localhost:3000
//http://localhost:3000/
/* Hệ thống
 */
//kiểm tra phiên đăng nhập
export const urlCheckLogin = 'http://localhost:3000/session';
//đăng nhập
export const urlLogin = 'http://localhost:3000/login';
// đăng ký
export const urlRegister= 'http://localhost:3000/register';
// xác thực đăng ký
export const urlRegisterCode= 'http://localhost:3000/registerCode';
//đăng xuất
export const urlLogout = 'http://localhost:3000/logout';
//đổi thông tin thành viên
export const urlChangeInfo = 'http://localhost:3000/changeInfo';
//đổi mật khẩu
export const urlChangePassword = 'http://localhost:3000/changePassword';

/* Quản lý thành viên
 */
//lấy danh sách thành viên
export const urlGetMember = 'http://localhost:3000/getMember';
// thêm thành viên
export const urlInsertMember = 'http://localhost:3000/insertMember';
// sửa thành viên
export const urlUpdateMember = 'http://localhost:3000/updateMember';
// xoá thành viên
export const urlDeleteMember = 'http://localhost:3000/deleteMember';
// undo delete thành viên
export const urlUndoDeleteMember = 'http://localhost:3000/undoDeleteMember';

export const urlGetRole = 'http://localhost:3000/getRole';
// thêm vai trò
export const urlInsertRole = 'http://localhost:3000/insertRole';
// sửa nhân viên
export const urlUpdateRole = 'http://localhost:3000/updateRole';
// xoá vai trò
export const urlDeleteRole = 'http://localhost:3000/deleteRole';
//lấy danh sách quyền
export const urlGetPermission = 'http://localhost:3000/getPermission';



/* Quản lý xe
 */
//lấy danh sách tình trạng xe
export const urlGetStatusCar = 'http://localhost:3000/getStatusCar';
// thêm tình trạng xe
export const urlInsertStatusCar = 'http://localhost:3000/insertStatusCar';
// sửa tình trạng xe
export const urlUpdateStatusCar = 'http://localhost:3000/updateStatusCar';
//xoá tình trạng xe
export const urlDeleteStatusCar = 'http://localhost:3000/deleteStatusCar';

//lấy danh sách nhóm loại xe
export const urlGetGroupTypeCar = 'http://localhost:3000/getGroupTypeCar';
// thêm nhóm loại xe
export const urlInsertGroupTypeCar = 'http://localhost:3000/insertGroupTypeCar';
// sửa nhóm loại xe
export const urlUpdateGroupTypeCar = 'http://localhost:3000/updateGroupTypeCar';
//xoá nhóm loại xe
export const urlDeleteGroupTypeCar = 'http://localhost:3000/deleteGroupTypeCar';

//lấy danh sách loại xe
export const urlGetTypeCar = 'http://localhost:3000/getTypeCar';
// thêm loại xe
export const urlInsertTypeCar = 'http://localhost:3000/insertTypeCar';
// sửa loại xe
export const urlUpdateTypeCar = 'http://localhost:3000/updateTypeCar';
//xoá loại xe
export const urlDeleteTypeCar = 'http://localhost:3000/deleteTypeCar';

//lấy danh sách xe
export const urlGetCar = 'http://localhost:3000/getCar';
// thêm xe
export const urlInsertCar = 'http://localhost:3000/insertCar';
// sửa xe
export const urlUpdateCar = 'http://localhost:3000/updateCar';
//xoá xe
export const urlDeleteCar = 'http://localhost:3000/deleteCar';



/* Quản lý dịch vụ
 */
//lấy danh sách đăng kiểm
export const urlGetRegistry = 'http://localhost:3000/getRegistry';
// thêm đăng kiểm
export const urlInsertRegistry = 'http://localhost:3000/insertRegistry';
// sửa đăng kiểm
export const urlUpdateRegistry = 'http://localhost:3000/updateRegistry';
//xoá đăng kiểm
export const urlDeleteRegistry = 'http://localhost:3000/deleteRegistry';

//lấy danh sách phù hiệu
export const urlGetEmblem = 'http://localhost:3000/getEmblem';
// thêm phù hiệu
export const urlInsertEmblem = 'http://localhost:3000/insertEmblem';
// sửa phù hiệu
export const urlUpdateEmblem = 'http://localhost:3000/updateEmblem';
//xoá phù hiệu
export const urlDeleteEmblem = 'http://localhost:3000/deleteEmblem';

//lấy danh sách bảo hiểm
export const urlGetInsurance = 'http://localhost:3000/getInsurance';
// thêm bảo hiểm
export const urlInsertInsurance = 'http://localhost:3000/insertInsurance';
// sửa bảo hiểm
export const urlUpdateInsurance = 'http://localhost:3000/updateInsurance';
//xoá bảo hiểm
export const urlDeleteInsurance = 'http://localhost:3000/deleteInsurance';

//lấy danh sách định vị
export const urlGetLocate = 'http://localhost:3000/getLocate';
// thêm định vị
export const urlInsertLocate = 'http://localhost:3000/insertLocate';
// sửa định vị
export const urlUpdateLocate = 'http://localhost:3000/updateLocate';
//xoá định vị
export const urlDeleteLocate = 'http://localhost:3000/deleteLocate';


/* Quản lý hợp đồng
 */
//lấy danh sách hợp đồng
export const urlGetContract = 'http://localhost:3000/getContract';
// thêm hợp đồng
export const urlInsertContract = 'http://localhost:3000/insertContract';
// sửa hợp đồng
export const urlUpdateContract = 'http://localhost:3000/updateContract';
//xoá hợp đồng
export const urlDeleteContract = 'http://localhost:3000/deleteContract';
// lấy danh sách hợp đồng của tôi
export const urlGetMyContract = 'http://localhost:3000/getMyContract';


/* Quản lý hạng mục bảo dưỡng
 */
//lấy danh sách hạng mục bảo dưỡng
export const urlGetMaintenanceItem = 'http://localhost:3000/getMaintenanceItem';
// thêm hạng mục bảo dưỡng
export const urlInsertMaintenanceItem = 'http://localhost:3000/insertMaintenanceItem';
// sửa hạng mục bảo dưỡng
export const urlUpdateMaintenanceItem = 'http://localhost:3000/updateMaintenanceItem';
//xoá hạng mục bảo dưỡng
export const urlDeleteMaintenanceItem = 'http://localhost:3000/deleteMaintenanceItem';

/* Quản lý bảo dưỡng
 */
//lấy danh sách bảo dưỡng
export const urlGetMaintenance = 'http://localhost:3000/getMaintenance';
// thêm bảo dưỡng
export const urlInsertMaintenance = 'http://localhost:3000/insertMaintenance';
// sửa bảo dưỡng
export const urlUpdateMaintenance = 'http://localhost:3000/updateMaintenance';
//xoá bảo dưỡng
export const urlDeleteMaintenance = 'http://localhost:3000/deleteMaintenance';

/* Quản lý lịch sử sử dụng
 */
//lấy danh sách lịch sử sử dụng
export const urlGetUsageHistory = 'http://localhost:3000/getUsageHistory';
// thêm lịch sử sử dụng
export const urlInsertUsageHistory = 'http://localhost:3000/insertUsageHistory';
// sửa lịch sử sử dụng
export const urlUpdateUsageHistory = 'http://localhost:3000/updateUsageHistory';
//xoá lịch sử sử dụng
export const urlDeleteUsageHistory = 'http://localhost:3000/deleteUsageHistory';

/* Bảng điều khiển
 */
//lấy số bàn đang có khách
export const urlGetTotalCar = 'http://localhost:3000/getTotalCar';
//lấy số hoá đơn trong ngày
export const urlGetTotalMember = 'http://localhost:3000/getTotalMember';
//lấy tổng tiền hoá đơn trong ngày
export const urlGetYearContract = 'http://localhost:3000/getYearContract';
//lấy tổng tiền hoá đơn trong tháng
export const urlGetRevenueYear = 'http://localhost:3000/getRevenueYear';
//lấy tổng tiền hoá đơn trong tuần
export const urlGetListRevenueYear = 'http://localhost:3000/getListRevenueYear';