import React from 'react';
import NewsSection from './NewsSection';

const MainContent = () => {
  // Sample data for news sections
  const thongBaoItems = [
    { 
      id: 1, 
      title: 'Thông báo v/v kế hoạch nghỉ lễ 30/4 và sinh nhật lần thứ 49 trường', 
      link: '#',
      date: '21-04-2023'
    },
    { 
      id: 2, 
      title: 'Thông báo tuyển chọn ứng viên tốt nghiệp đại học cho các trường quản lý công', 
      link: '#',
      date: '21-04-2023'
    },
    { 
      id: 3, 
      title: 'Thông báo tuyển sinh đào tạo liên thông trình độ cao đẳng lên trình...', 
      link: '#',
      date: '18-04-2023'
    },
    { 
      id: 4, 
      title: 'Thông báo v/v tuyển sinh đào tạo văn bằng hai đợt 1 năm 2023', 
      link: '#',
      date: '10-03-2023'
    }
  ];

  const tuyenSinhItems = [
    { 
      id: 1, 
      title: 'Thông báo tuyển sinh đào tạo liên thông từ trình độ cao đẳng lên trình...', 
      link: '#',
      date: '28-03-2023'
    },
    { 
      id: 2, 
      title: 'Thông báo v/v tuyển sinh đại học văn bằng hai, đợt 1 năm 2023', 
      link: '#',
      date: '20-03-2023'
    }
  ];

  const tinTucItems = [
    { 
      id: 1, 
      title: 'IUH bế mạc thành công đợt đánh giá chất lượng cấp trường theo tiêu chuẩn...', 
      link: '#',
      date: '26-04-2023'
    },
    { 
      id: 2, 
      title: 'AVEVA tài trợ gói phần mềm trị giá 186.000 đô Mỹ cho Đại học Công nghiệp...', 
      link: '#',
      date: '23-04-2023'
    }
  ];

  const hopTacItems = [
    { 
      id: 1, 
      title: 'Sôi nổi loạt hoạt động Tuần lễ giao lưu văn hóa, khoa học sinh viên quốc...', 
      link: '#',
      date: '24-03-2023'
    },
    { 
      id: 2, 
      title: 'Đại học Công nghiệp TP. HCM tham gia dự án Green Edu Seeds của quỹ Erasmus', 
      link: '#',
      date: '19-03-2023'
    }
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <NewsSection 
            title="THÔNG BÁO" 
            news={thongBaoItems} 
            viewMoreLink="#"
          />
          <NewsSection 
            title="TIN TỨC - SỰ KIỆN" 
            news={tinTucItems} 
            viewMoreLink="#"
          />
        </div>
        <div>
          <NewsSection 
            title="TUYỂN SINH" 
            news={tuyenSinhItems} 
            viewMoreLink="#"
          />
          <NewsSection 
            title="HỢP TÁC QUỐC TẾ" 
            news={hopTacItems} 
            viewMoreLink="#"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white border rounded-md shadow-sm overflow-hidden">
          <h3 className="bg-primary text-white py-2 px-4 font-bold">PHÂN HIỆU QUẢNG NGÃI</h3>
          <div className="w-full flex justify-center">
            <img
              src="/AVEVA-BANER.jpg"
              className="w-full h-48 object-cover"
              alt="Banner"
            />
          </div>
        </div>

        <div className="bg-white border rounded-md shadow-sm overflow-hidden">
          <h3 className="bg-primary text-white py-2 px-4 font-bold">CƠ SỞ THANH HÓA</h3>
          <div className="w-full flex justify-center">
            <img
              src="/AVEVA-BANER2.jpg"
              className="w-full h-48 object-cover"
              alt="Banner"
            />
          </div>
        </div>
        
        <div className="bg-white border rounded-md shadow-sm overflow-hidden">
          <h3 className="bg-primary text-white py-2 px-4 font-bold">VIDEO VÀ HÌNH ẢNH</h3>
          <div className="w-full flex justify-center">
            <img
              src="/AVEVA-BANER2.jpg"
              className="w-full h-48 object-cover"
              alt="Banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent; 