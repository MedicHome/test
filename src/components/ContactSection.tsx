import { useState } from 'react';
import { toast } from 'sonner';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    toast.success('感谢您的留言，我们会尽快回复您！');
    setFormData({ name: '', email: '', message: '' });
  };
  
  const imagePrompt = encodeURIComponent('Modern pharmaceutical company office building, professional medical facility, exterior view');
  const imageUrl = `https://space.coze.cn/api/coze_space/gen_image?image_size=portrait_4_3&prompt=%24%7BimagePrompt%7D&sign=0ac2bb31bcdff193d7af578af06f3561`;
  
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">联系我们</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            如果您有任何问题或合作意向，请随时与我们联系，我们将竭诚为您服务
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">发送消息</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  姓名
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  邮箱
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  留言内容
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all transform hover:scale-[1.02] shadow-md hover:shadow-lg"
              >
                发送留言
                <i className="fa-solid fa-paper-plane ml-2"></i>
              </button>
            </form>
          </div>
          
          <div className="flex flex-col justify-between">
            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <h3 className="text-2xl font-semibold mb-6">联系方式</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <i className="fa-solid fa-map-marker-alt text-blue-600"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">公司地址</h4>
                    <p className="text-gray-600">上海市浦东新区张江高科技园区科苑路88号</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <i className="fa-solid fa-phone text-blue-600"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">联系电话</h4>
                    <p className="text-gray-600">400-888-9999</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <i className="fa-solid fa-envelope text-blue-600"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">电子邮箱</h4>
                    <p className="text-gray-600">info@supradrug.cn</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <i className="fa-solid fa-clock text-blue-600"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">工作时间</h4>
                    <p className="text-gray-600">周一至周五: 9:00 - 18:00</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium text-gray-900 mb-3">关注我们</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                    <i className="fa-brands fa-weixin"></i>
                  </a>
                  <a href="#" className="bg-blue-400 hover:bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                    <i className="fa-brands fa-weibo"></i>
                  </a>
                  <a href="#" className="bg-blue-700 hover:bg-blue-800 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-lg h-64">
              <img 
                src={imageUrl} 
                alt="公司地址" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}