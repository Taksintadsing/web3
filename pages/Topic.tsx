
import React from 'react';
import PageCard from '../components/PageCard';

const Topic: React.FC = () => {
  return (
    <PageCard>
      <h1 className="text-3xl md:text-4xl font-extrabold mb-8 bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">
        📦 AI for Packaging Optimization
      </h1>
      
      <div className="space-y-8">
        <section>
          <p className="text-lg text-slate-600 leading-relaxed">
            หน้านี้นำเสนอการใช้ปัญญาประดิษฐ์เพื่อปรับปรุงกระบวนการบรรจุภัณฑ์ 
            ในระบบโลจิสติกส์และซัพพลายเชน
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">บทนำ</h3>
          <p className="text-slate-600 leading-relaxed">
            AI ช่วยลดพื้นที่ว่างในพัสดุ เลือกขนาดกล่องที่เหมาะสมกับสินค้าแต่ละรายการ 
            ส่งผลให้ลดต้นทุนการขนส่ง และเพิ่มความแม่นยำในการจัดการสต็อก
          </p>
        </section>

        <section className="bg-sky-50 p-6 rounded-2xl border border-sky-100">
          <h3 className="text-2xl font-bold text-sky-900 mb-4">ผลการศึกษา</h3>
          <p className="text-sky-800 leading-relaxed font-medium">
            งานวิจัยจากอุตสาหกรรมชั้นนำพบว่า การใช้ AI ในการคำนวณบรรจุภัณฑ์ 
            สามารถช่วยลดต้นทุนรวมได้ถึง <span className="text-sky-600 font-bold">10–25%</span>
          </p>
        </section>
      </div>
    </PageCard>
  );
};

export default Topic;
