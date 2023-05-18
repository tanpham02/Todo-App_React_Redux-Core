# DEFIND REDUX CORE
- Redux là một partten (khuôn mẫu)
- Redux là một thư viện JS dùng để quản lí và cập nhật state trong ứng dụng Javascript

# USES
- Dùng để quản tích các STATE GLOBAL (toàn cục)
    + Các component ở nhiều nơi trong ứng dụng có thể truy xuất và cập nhật
    + Giải quyết vấn đề của React khi muốn truyền dữ liệu liệu đến các cấp con cháu
- Dễ dàng debug
- Xử lí caching dữ liệu từ server
 
# WHEN TO USE REDUX?
- Dự án có số lượng lớn state và các state được sử dụng ở nhiều nơi
- State được sử dụng ở nhiều nơi
- Logic  code được cập nhật state phức tạp
- Ứng dụng có số lượng code trung bình hoặc lớn và có nhiều người làm chung
- Cần debug và muốn xem cách state được cập nhật tại bất kì khoản thời gian nào


# STATE MANAGEMENT => là 1 công cụ dùng để quản lí state như trong react có hook: useState, useReducer

# INMUTABILITY - INMUTATION (Bất biến): không thay đổi giá trị của object, array bằng cách sử dụng Spread(...) in ES6 JS (NÊN DÙNG TRONG REDUX)

# MUTABILITY - MUTATION (Đột biến): thay đổi giá trị của object, array (KHÔNG NÊN DÙNG TRONG REDUX)


# Redux makes the state predictable(dự đoán)
# In Redux, the state is always predictable. If the same state and action are passed to a reducer, the same result is always produced because reducers are pure functions (hàm thuần khiết, không bị phụ thuộc bất kì giá trị nào nên ngoài như call api, Math.random, Date.now ...). The state is also(cũng) immutable and is never changed.

# Reducer: Cũng chỉ là 1 cái hàng

# Action chỉ là 1 cái Object do chúng ta quyết định chứa type và payload 
- Action: không nên dùng vì lặp lại code
- Action Creator: nên dùng vì chỉ cần custom 1 lần và dùng cho nhiều nơi. Nó là 1 cái hàm nhận vào payload và return ra object


# ==================================> KHÔNG PHẢI LÚC NÀO TA CŨNG NÊN SỬ DỤNG REDUX. KHÔNG NÊN SỬ DỤNG REDUX CHO ĐẾN KHI GẶP VẤN ĐỀ VỚI REDUX



# DEFIND REDUX TOLLKIT
- Nó cũng là thư viện Javascript và nó sẽ bọc bên ngoài Redux Core 
- Nó sẽ chứa các package và function có sẵn để dùng khi cần thiết trong Redux không cần phải install như trong Redux Core

# SOLVE PROBLEMS: (Sinh ra để các quyết các vấn đề của redux core)
- Việc cấu hình (config) Redux phức tạp
- Phải cài đặt thủ công nhiều pakeages để Redux có thể hoạt động cụ thể
- Redux yêu cầu rất nhiều boilerplate code (đoạn code lặp đi lặp lại nhiều lần)

