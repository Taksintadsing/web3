
import React from 'react';
import { Link } from 'react-router-dom';
import PageCard from '../components/PageCard';

const Home: React.FC = () => {
  return (
    <PageCard centered>
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">
        นวัตกรรม AI ใน Logistics & Supply Chain
      </h1>
      <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
        การประยุกต์ใช้ AI เพื่อปรับปรุงการบรรจุภัณฑ์ ลดต้นทุน และเพิ่มประสิทธิภาพ
      </p>
      <Link 
        to="/topic" 
        className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 text-white font-bold text-lg shadow-[0_10px_30px_rgba(56,189,248,0.4)] hover:shadow-[0_15px_40px_rgba(56,189,248,0.6)] hover:-translate-y-1 transition-all duration-300"
      >
        เริ่มเรียนรู้
      </Link>
    </PageCard>
  );
};

export default Home;
