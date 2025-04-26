import React, { useState } from 'react';

const Navigation = () => {
  return (
    <nav style={{ backgroundColor: '#f3f4f6', borderBottom: '1px solid #e5e7eb' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
          <li>
            <a href="#" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              padding: '0.75rem 1rem', 
              fontWeight: '500', 
              color: '#1e40af'
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '1.25rem', height: '1.25rem', marginRight: '0.5rem' }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
            </a>
          </li>
          <NavItemWithDropdown 
            text="GIỚI THIỆU" 
            items={[
              "Giới thiệu chung",
              "Tầm nhìn - Sứ mạng - Mục tiêu chiến lược",
              "Triết lý giáo dục",
              "Phương châm hoạt động",
              "Giá trị cốt lõi",
              "Chính sách chất lượng",
              "Sơ đồ bộ máy tổ chức",
              "Cơ sở vật chất",
              "Đội ngũ",
              "Ba công khai",
              "Hệ thống nhận diện"
            ]} 
          />
          <NavItemWithDropdown 
            text="ĐÀO TẠO" 
            items={[
              "Chương trình đào tạo",
              "Đào tạo đại học",
              "Đào tạo sau đại học",
              "Đào tạo từ xa",
              "Đào tạo ngắn hạn",
              "Chuẩn đầu ra"
            ]} 
          />
          <NavItemWithDropdown 
            text="TUYỂN SINH" 
            items={[
              "Tuyển sinh đại học",
              "Tuyển sinh sau đại học",
              "Tuyển sinh vừa làm vừa học",
              "Đào tạo theo nhu cầu xã hội"
            ]} 
          />
          <NavItem text="NGHIÊN CỨU" />
          <NavItem text="SINH VIÊN" />
          <NavItem text="GIẢNG VIÊN" />
          <NavItem text="VĂN BẰNG" />
        </ul>
      </div>
    </nav>
  );
};

const NavItemWithDropdown = ({ text, items }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <li
      style={{ position: 'relative' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a 
        href="#" 
        style={{ 
          display: 'block', 
          padding: '0.75rem 1rem', 
          fontWeight: '500',
          color: isHovered ? '#1e40af' : '#333',
          backgroundColor: isHovered ? 'white' : 'transparent',
          borderLeft: isHovered ? '1px solid #e5e7eb' : 'none',
          borderRight: isHovered ? '1px solid #e5e7eb' : 'none',
          transition: 'color 0.2s, background-color 0.2s'
        }}
      >
        {text}
      </a>
      
      {isHovered && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: '0',
          width: '300px',
          backgroundColor: 'white',
          border: '1px solid #e5e7eb',
          borderTop: 'none',
          zIndex: 50,
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }}>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
            {items.map((item, index) => (
              <li key={index} style={{ borderBottom: index !== items.length - 1 ? '1px solid #f3f4f6' : 'none' }}>
                <a 
                  href="#" 
                  style={{ 
                    display: 'block', 
                    padding: '0.75rem 1rem',
                    color: '#4b5563',
                    textDecoration: 'none',
                    transition: 'background-color 0.2s',
                    fontSize: '0.875rem'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#f3f4f6';
                    e.target.style.color = '#1e40af';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#4b5563';
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

const NavItem = ({ text }) => {
  return (
    <li>
      <a 
        href="#" 
        style={{ 
          display: 'block', 
          padding: '0.75rem 1rem', 
          fontWeight: '500',
          color: '#333',
          transition: 'color 0.2s, background-color 0.2s'
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = 'white';
          e.target.style.color = '#1e40af';
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = 'transparent';
          e.target.style.color = '#333';
        }}
      >
        {text}
      </a>
    </li>
  );
};

export default Navigation; 