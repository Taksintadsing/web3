
import React from 'react';
import PageCard from '../components/PageCard';

const Cases: React.FC = () => {
  return (
    <PageCard>
      <h1 className="text-3xl md:text-4xl font-extrabold mb-8 bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">
        🏭 Case Studies: AI in Logistics
      </h1>

      <div className="space-y-8">
        <div className="border-l-4 border-sky-500 pl-6">
          <h3 className="text-2xl font-bold text-slate-900">Amazon</h3>
          <p className="text-slate-600 mt-2">
            Amazon ใช้ AI และหุ่นยนต์ Kiva ในคลังสินค้าเพื่อเพิ่มความเร็วในการเบิกจ่ายสินค้า 
            และการจัดการสต็อกที่มีความแม่นยำสูงถึง 99.9%
          </p>
        </div>

        <div className="border-l-4 border-sky-500 pl-6">
          <h3 className="text-2xl font-bold text-slate-900">Walmart</h3>
          <p className="text-slate-600 mt-2">
            Walmart ใช้ AI วิเคราะห์เส้นทางขนส่งร่วมกับ Big Data 
            เพื่อลดระยะทางการวิ่งรถเปล่าและความต้องการสินค้าในแต่ละสาขา
          </p>
        </div>

        <div className="border-l-4 border-sky-500 pl-6">
          <h3 className="text-2xl font-bold text-slate-900">Tesco</h3>
          <p className="text-slate-600 mt-2">
            Tesco ใช้ AI พยากรณ์ความต้องการสินค้าสดล่วงหน้า 
            ช่วยลดของเสียจากสินค้าหมดอายุได้มากกว่า 30%
          </p>
        </div>

        <hr className="border-slate-200" />

        <div className="bg-slate-900 text-white p-8 rounded-3xl">
          <h4 className="text-xl font-bold mb-4 flex items-center">
            <span className="mr-2">📅</span> Timeline of Evolution
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="bg-sky-500 text-xs font-bold px-2 py-1 rounded mr-3 mt-1">2015</span>
              <p><span className="font-bold">Big Data:</span> เริ่มการเก็บข้อมูลขนาดใหญ่เพื่อวิเคราะห์ย้อนหลัง</p>
            </li>
            <li className="flex items-start">
              <span className="bg-sky-500 text-xs font-bold px-2 py-1 rounded mr-3 mt-1">2018</span>
              <p><span className="font-bold">AI & Robotics:</span> การนำหุ่นยนต์เข้ามาใช้ในกระบวนการคัดแยก</p>
            </li>
            <li className="flex items-start">
              <span className="bg-sky-500 text-xs font-bold px-2 py-1 rounded mr-3 mt-1">2022</span>
              <p><span className="font-bold">Predictive AI:</span> ระบบวิเคราะห์คาดการณ์ล่วงหน้าแบบอัตโนมัติ 100%</p>
            </li>
          </ul>
        </div>
      </div>
    </PageCard>
  );
};

export default Cases;
