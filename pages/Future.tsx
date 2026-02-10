
import React from 'react';
import PageCard from '../components/PageCard';

const Future: React.FC = () => {
  return (
    <PageCard>
      <h1 className="text-3xl md:text-4xl font-extrabold mb-8 bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">
        🔮 Recommendations & Future
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <section>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">แนวทางการปรับตัว</h3>
          <ul className="space-y-3">
            {['เริ่มจากโครงการนำร่อง (Pilot Project)', 'พัฒนาคุณภาพของข้อมูลให้พร้อมใช้งาน', 'ฝึกอบรมบุคลากรให้ทำงานร่วมกับ AI ได้'].map((item, i) => (
              <li key={i} className="flex items-center text-slate-600">
                <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-xs font-bold mr-3">{i+1}</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-6">
          <div className="p-5 bg-gradient-to-r from-indigo-50 to-sky-50 rounded-2xl border border-indigo-100">
            <h3 className="text-xl font-bold text-indigo-900 mb-2">AI + Metaverse</h3>
            <p className="text-slate-600 text-sm">การจำลองคลังสินค้าเสมือนจริง (Digital Twin) เพื่อทดสอบการวางแผนก่อนเริ่มจริง</p>
          </div>
          
          <div className="p-5 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100">
            <h3 className="text-xl font-bold text-emerald-900 mb-2">Sustainability</h3>
            <p className="text-slate-600 text-sm">การใช้ AI เพื่อลดคาร์บอนฟุตพริ้นท์ และคำนวณวัสดุบรรจุภัณฑ์ที่เป็นมิตรต่อสิ่งแวดล้อม</p>
          </div>
        </section>
      </div>
    </PageCard>
  );
};

export default Future;
