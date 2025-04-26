import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 pt-8 pb-4 mt-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-primary font-bold mb-4">LIÊN HỆ</h3>
            <p className="text-sm mb-2">ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH</p>
            <p className="text-sm mb-2">Địa chỉ: Số 12 Nguyễn Văn Bảo, Phường 4, Quận Gò Vấp, Thành phố Hồ Chí Minh</p>
            <p className="text-sm mb-2">Điện thoại: (028) 38940 390 - 100</p>
            <p className="text-sm mb-2">Tuyển sinh: (028) 3994 0422 - (028) 3994 0339</p>
            <p className="text-sm mb-2">Email: dhcn@iuh.edu.vn</p>
          </div>
          
          <div>
            <h3 className="text-primary font-bold mb-4">HOẠT ĐỘNG KHÁC</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-primary">Hoạt động phục vụ cộng đồng</a></li>
              <li><a href="#" className="hover:text-primary">Quản lý nghiên cứu</a></li>
              <li><a href="#" className="hover:text-primary">CLB/Đội/Nhóm sinh viên</a></li>
              <li><a href="#" className="hover:text-primary">Việc làm doanh nghiệp</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-primary font-bold mb-4">THÔNG TIN MỞ RỘNG</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-primary">Báo chí viết về IUH</a></li>
              <li><a href="#" className="hover:text-primary">Album phát triển</a></li>
              <li><a href="#" className="hover:text-primary">Kỷ niệm ngày</a></li>
              <li><a href="#" className="hover:text-primary">Bản đồ</a></li>
              <li><a href="#" className="hover:text-primary">Dịch vụ sinh viên</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-primary font-bold mb-4">VĂN BẢN TIỆN ÍCH</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-primary">Quy chế/Quy định</a></li>
              <li><a href="#" className="hover:text-primary">Bộ công khai</a></li>
              <li><a href="#" className="hover:text-primary">Biểu mẫu đào tạo</a></li>
              <li><a href="#" className="hover:text-primary">Quản lý khoa học</a></li>
              <li><a href="#" className="hover:text-primary">Phần bổi</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-300 pt-4">
          <div className="flex justify-between items-center flex-wrap">
            <div className="flex items-center">
              <img src="/logo-iuh.png" alt="IUH Logo" className="h-16" />
              <div className="ml-4">
                <p className="text-sm">© Bản quyền 2015 - Đại học Công nghiệp Thành phố Hồ Chí Minh</p>
                <p className="text-xs text-gray-500 mt-1">Mọi hành động sử dụng nội dung đăng tải trên Website iuh.edu.vn phải có sự đồng ý bằng văn bản của Đại học Công nghiệp Thành phố Hồ Chí Minh.</p>
              </div>
            </div>
            <div className="flex space-x-3 mt-4 md:mt-0">
              <a href="#" className="text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 