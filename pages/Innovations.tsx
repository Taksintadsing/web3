
import React from 'react';
import PageCard from '../components/PageCard';

const Innovations: React.FC = () => {
  const innovations = [
    {
      title: "1. AI สำหรับการบรรจุภัณฑ์",
      desc: "เลือกกล่องที่เหมาะสม ลดพื้นที่ว่างและต้นทุนวัสดุ",
      icon: "📦"
    },
    {
      title: "2. Machine Learning",
      desc: "คาดการณ์ความต้องการสินค้าและจัดเก็บอย่างมีประสิทธิภาพ (Predictive Analytics)",
      icon: "📈"
    },
    {
      title: "3. Robotics & Automation",
      desc: "หุ่นยนต์ช่วยคัดแยกและบรรจุสินค้า เพิ่มความเร็ว ลดความผิดพลาดจากมนุษย์",
      icon: "🤖"
    },
    {
      title: "4. Computer Vision",
      desc: "ระบบตรวจจับด้วยภาพเพื่อตรวจสอบคุณภาพสินค้าแบบเรียลไทม์และคัดกรองตำหนิ",
      icon: "👁️"
    }
  ];

  return (
    <PageCard>
      <h1 className="text-3xl md:text-4xl font-extrabold mb-8 bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">
        💡 นวัตกรรม AI ในโลจิสติกส์
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {innovations.map((item, index) => (
          <div key={index} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-sky-300 hover:shadow-lg transition-all duration-300">
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
            <p className="text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </PageCard>
  );
};

export default Innovations;
