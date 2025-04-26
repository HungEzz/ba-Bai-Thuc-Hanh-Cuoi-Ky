import React, { useState } from 'react';

const Sidebar = () => {
  return (
    <div style={{ 
      backgroundColor: 'white', 
      border: '1px solid #e5e7eb', 
      borderRadius: '0.375rem',
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', 
    
    }}>
      <h2 style={{ 
        backgroundColor: '#1e40af', 
        color: 'white', 
        textAlign: 'center', 
        padding: '0.5rem 1rem', 
        fontWeight: 'bold', 
        marginBottom: '0.75rem'
      }}>
        CƠ CẤU TỔ CHỨC
      </h2>
      <ul style={{ borderTop: '1px solid #e5e7eb' }}>
        <SidebarItem title="LÃNH ĐẠO" items={["ĐẢNG ỦY", "BAN GIÁM HIỆU"]} />
        <SidebarItem title="CÁC PHÒNG BAN" items={["Phòng Tổ chức - Hành chính", "Phòng Đào tạo", "Phòng Tài chính - Kế toán"]} />
        <SidebarItem title="CÁC KHOA" items={["Khoa Công nghệ thông tin", "Khoa Điện - Điện tử", "Khoa Cơ khí", "Khoa Kinh tế"]} />
        <SidebarItem title="CÁC VIỆN" items={["Viện Công nghệ cao", "Viện Khoa học ứng dụng"]} />
        <SidebarItem title="CÁC TRUNG TÂM" items={["Trung tâm Ngoại ngữ", "Trung tâm Tin học", "Trung tâm Thực hành"]} />
        <SidebarItem title="CÁC PHÂN HIỆU" items={["Phân hiệu Quảng Ngãi", "Cơ sở Thanh Hoá"]} />
        <SidebarItem title="ĐOÀN THỂ" items={["Đoàn Thanh niên", "Hội Sinh viên", "Công đoàn"]} />
      </ul>
    </div>
  );
};

const SidebarItem = ({ title, items }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Special styles for LÃNH ĐẠO item
  const isLeadership = title === "LÃNH ĐẠO";

  const sidebarItemStyle = {
    padding: '0.5rem 0', 
    borderBottom: '1px solid #e5e7eb',
    position: 'relative',
    backgroundColor: isHovered && isLeadership ? '#e5e7eb' : 'transparent'
  };

  const linkStyle = {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    textDecoration: 'none',
    padding: '0.5rem 0.5rem',
    fontWeight: isHovered ? 'bold' : 'normal',
    color: isLeadership && isHovered ? '#e11d48' : (isHovered ? '#1e40af' : '#4b5563')
  };

  return (
    <li 
      style={sidebarItemStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href="#" style={linkStyle}>
        <span>{title}</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '1rem', height: '1rem' }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </a>

      {/* Dropdown menu */}
      {isHovered && items && items.length > 0 && (
        <div style={{
          position: 'absolute',
          left: '100%',
          top: '0',
          width: '230px',
          backgroundColor: 'white',
          border: '1px solid #e5e7eb',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          zIndex: 50,
          overflow: 'hidden'
        }}>
          <div style={{ 
            backgroundColor: 'white', 
            borderBottom: '1px solid #e5e7eb'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              color: isLeadership ? '#e11d48' : '#1e40af',
              padding: '0.75rem ',
              fontWeight: 'bold',
              fontSize: '0.875rem'
            }}>
              <div style={{
                marginRight: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src="/logo-iuh.png"
                  alt="IUH Logo"
                  style={{
                    width: 'auto',
                    height: 'auto',
                    maxHeight: '24px'
                  }}
                />
              </div>
              {title}
            </div>
          </div>
          <ul style={{margin: 0, padding: 0, listStyle: 'none'}}>
            {items.map((item, index) => (
              <li key={index} style={{ 
                borderBottom: index !== items.length - 1 ? '1px solid #e5e7eb' : 'none',
              }}>
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

export default Sidebar; 