import React from 'react';

const Header = () => {
  return (
    <header style={{ backgroundColor: '#1e40af', color: 'white' }}>
      {/* Top bar */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0.25rem 1rem', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        fontSize: '0.875rem' 
      }}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href="#" style={{ display: 'flex', alignItems: 'center', color: 'white', textDecoration: 'none' }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '1rem', height: '1rem', marginRight: '0.25rem' }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            E-OFFICE
          </a>
          <a href="#" style={{ display: 'flex', alignItems: 'center', color: 'white', textDecoration: 'none' }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '1rem', height: '1rem', marginRight: '0.25rem' }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            EMAIL
          </a>
          <a href="#" style={{ display: 'flex', alignItems: 'center', color: 'white', textDecoration: 'none' }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '1rem', height: '1rem', marginRight: '0.25rem' }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            THƯ VIỆN - THÔNG TIN
          </a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>KẾT NỐI</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>LIÊN HỆ</a>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <a href="#" style={{ display: 'block', width: '1.25rem', height: '0.75rem' }}>
              <img src="/icon-flag-vn.png" alt="Vietnamese" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </a>
            <a href="#" style={{ display: 'block', width: '1.25rem', height: '0.75rem' }}>
              <img src="/icon-flag-en.png" alt="English" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Main header */}
      <div style={{ backgroundColor: 'white', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)' }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0.5rem 1rem', 
          display: 'flex', 
          flexWrap: 'wrap',
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/logo-iuh.png" alt="IUH Logo" style={{ height: '4rem' }} />
            <div style={{ marginLeft: '1rem', color: '#1e40af', fontWeight: 'bold' }}>
              <div style={{ fontSize: '1.125rem' }}>BỘ CÔNG THƯƠNG</div>
              <div style={{ fontSize: '1.25rem' }}>ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH</div>
              <div style={{ fontSize: '0.875rem', color: '#e11d48', fontWeight: 'normal', fontStyle: 'italic' }}>Đổi mới sáng tạo, làm giàu thêm tri thức - đời sống</div>
            </div>
          </div>
          <div style={{ position: 'relative', marginTop: '1rem' }}>
            <input 
              type="text" 
              placeholder="Tìm kiếm" 
              style={{ 
                border: '1px solid #d1d5db', 
                borderRadius: '0.375rem', 
                padding: '0.25rem 0.5rem',
                paddingRight: '2rem',
                outline: 'none'
              }}
            />
            <button style={{ position: 'absolute', right: '0', top: '0', height: '100%', padding: '0 0.5rem', color: '#6b7280' }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '1rem', height: '1rem' }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 