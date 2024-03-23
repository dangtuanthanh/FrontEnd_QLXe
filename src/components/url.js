//http://localhost:3000
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

// nhập nhân viên
export const urlImportExcelAccount = 'http://localhost:3000/importExcelAccount';



// thêm vai trò
export const urlInsertRole = 'http://localhost:3000/insertRole';
// sửa nhân viên
export const urlUpdateRole = 'http://localhost:3000/updateRole';
// xoá vai trò
export const urlDeleteRole = 'http://localhost:3000/deleteRole';
//lấy danh sách quyền
export const urlGetPermission = 'http://localhost:3000/getPermission';


//lấy danh sách vị trí công việc
export const urlGetJobPosition = 'http://localhost:3000/getJobPosition';
// thêm vị trí công việc
export const urlInsertJobPosition = 'http://localhost:3000/insertJobPosition';
// sửa vị trí công việc
export const urlUpdateJobPosition = 'http://localhost:3000/updateJobPosition';
//xoá vị trí công việc
export const urlDeleteJobPosition = 'http://localhost:3000/deleteJobPosition';


/* Quản lý bàn và khu vực
 */
//lấy danh sách khu vực
export const urlGetArea = 'http://localhost:3000/getArea';
// thêm Khu vực
export const urlInsertArea = 'http://localhost:3000/insertArea';
// sửa khu vực
export const urlUpdateArea = 'http://localhost:3000/updateArea';
//xoá vị trí khu vực
export const urlDeleteArea = 'http://localhost:3000/deleteArea';

//lấy danh sách bàn
export const urlGetTable = 'http://localhost:3000/getTable';
// thêm bàn
export const urlInsertTable = 'http://localhost:3000/insertTable';
// sửa bàn
export const urlUpdateTable = 'http://localhost:3000/updateTable';
//xoá bàn
export const urlDeleteTable = 'http://localhost:3000/deleteTable';

/* Quản lý ca làm việc
 */
//lấy danh sách ca làm việc
export const urlGetShifts = 'http://localhost:3000/getShifts';
// thêm ca làm việc
export const urlInsertShifts = 'http://localhost:3000/insertShifts';
// sửa ca làm việc
export const urlUpdateShifts = 'http://localhost:3000/updateShifts';
//xoá ca làm việc
export const urlDeleteShifts = 'http://localhost:3000/deleteShifts';

//lấy danh sách chốt ca
export const urlGetCloseShifts = 'http://localhost:3000/getCloseShifts';
//tải danh sách ca phù hợp với giờ hiện tại
export const urlGetMatchShifts = 'http://localhost:3000/GetMatchShifts';
// thêm chốt ca mới
export const urlInsertCloseShifts = 'http://localhost:3000/insertCloseShifts';
// cập nhật chốt ca
export const urlUpdateCloseShifts = 'http://localhost:3000/updateCloseShifts';
// xoá chốt ca
export const urlDeleteCloseShifts = 'http://localhost:3000/deleteCloseShifts';


/* Quản lý Khách Hàng
 */
//lấy danh sách khách hàng
export const urlGetCustomer = 'http://localhost:3000/getCustomer';
// thêm khách hàng
export const urlInsertCustomer = 'http://localhost:3000/insertCustomer';
// sửa khách hàng
export const urlUpdateCustomer = 'http://localhost:3000/updateCustomer';
//xoá khách hàng
export const urlDeleteCustomer = 'http://localhost:3000/deleteCustomer';


/* Quản lý Kho
 */
//lấy danh sách đơn vị tính
export const urlGetUnit = 'http://localhost:3000/getUnit';
//lấy danh sách chuyển đổi đơn vị tính
export const urlGetListUnitConversions = 'http://localhost:3000/getListUnitConversions';
//lấy danh sách chuyển đổi đơn vị tính theo ID
export const urlGetListUnitConversionsByIDUnit = 'http://localhost:3000/getListUnitConversionsByIDUnit';

// thêm đơn vị tính
export const urlInsertUnit = 'http://localhost:3000/insertUnit';
// sửa đơn vị tính
export const urlUpdateUnit = 'http://localhost:3000/updateUnit';
//xoá đơn vị tính
export const urlDeleteUnit = 'http://localhost:3000/deleteUnit';

//lấy danh sách phiếu nhập
export const urlGetReceipt = 'http://localhost:3000/getReceipt';
// thêm phiếu nhập
export const urlInsertReceipt = 'http://localhost:3000/insertReceipt';
// sửa phiếu nhập
export const urlUpdateReceipt = 'http://localhost:3000/updateReceipt';
//xoá phiếu nhập
export const urlDeleteReceipt = 'http://localhost:3000/deleteReceipt';

//lấy danh sách nguyên liệu
export const urlGetIngredient = 'http://localhost:3000/getIngredient';
// thêm nguyên liệu
export const urlInsertIngredient = 'http://localhost:3000/insertIngredient';
// sửa nguyên liệu
export const urlUpdateIngredient = 'http://localhost:3000/updateIngredient';
//xoá nguyên liệu
export const urlDeleteIngredient = 'http://localhost:3000/deleteIngredient';


/* Quản lý Thực đơn
 */
//lấy danh sách toàn bộ sản phẩm 
export const urlGetProduct = 'http://localhost:3000/getProduct';
//xoá sản phẩm
export const urlDeleteProduct = 'http://localhost:3000/deleteProduct';


// thêm sản phẩm thành phẩm
export const urlInsertFinishedProduct = 'http://localhost:3000/insertFinishedProduct';
// sửa sản phẩm thành phẩm
export const urlUpdateFinishedProduct = 'http://localhost:3000/updateFinishedProduct';
// thêm sản phẩm chế biến
export const urlInsertProcessedProduct = 'http://localhost:3000/insertProcessedProduct';
// sửa sản phẩm chế biến
export const urlUpdateProcessedProduct = 'http://localhost:3000/updateProcessedProduct';

//lấy danh sách loại sản phẩm
export const urlGetTypeProduct = 'http://localhost:3000/getTypeProduct';
// thêm loại sản phẩm
export const urlInsertTypeProduct = 'http://localhost:3000/insertTypeProduct';
// sửa loại sản phẩm
export const urlUpdateTypeProduct = 'http://localhost:3000/updateTypeProduct';
//xoá loại sản phẩm
export const urlDeleteTypeProduct = 'http://localhost:3000/deleteTypeProduct';

/* Quản lý Hoá Đơn
 */
//lấy danh sách hoá đơn
export const urlGetInvoice = 'http://localhost:3000/getInvoice';
// thêm hoá đơn
export const urlInsertInvoice = 'http://localhost:3000/insertInvoice';
// sửa hoá đơn
export const urlUpdateInvoice = 'http://localhost:3000/updateInvoice';
//xoá hoá đơn
export const urlDeleteInvoice = 'http://localhost:3000/deleteInvoice';
// cập nhật trạng thái bàn ăn
export const urlUpdateStatusTable = 'http://localhost:3000/updateStatusTable';
// lấy ảnh thanh toán
export const urlGetPicturePayment = 'http://localhost:3000/getPicturePayment';

/* Quản lý Bếp
 */
//lấy danh sách order
export const urlGetOrder = 'http://localhost:3000/getListProductsByStatus';
//cập nhật trạng thái món ăn
export const urlUpdateStatusProduct = 'http://localhost:3000/updateStatusProduct';

/* Bảng điều khiển
 */
//lấy số bàn đang có khách
export const urlGetOccupiedTables = 'http://localhost:3000/getOccupiedTables';
//lấy số hoá đơn trong ngày
export const urlGetInvoiceToday = 'http://localhost:3000/getInvoiceToday';
//lấy tổng tiền hoá đơn trong ngày
export const urlGetRevenueToday = 'http://localhost:3000/getRevenueToday';
//lấy tổng tiền hoá đơn trong tháng
export const urlGetRevenueMonth = 'http://localhost:3000/getRevenueMonth';
//lấy tổng tiền hoá đơn trong tuần
export const urlGetListRevenueMonth = 'http://localhost:3000/getListRevenueMonth';