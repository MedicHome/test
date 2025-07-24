import { motion } from 'framer-motion';

export function AboutSection() {
  const imagePrompt = encodeURIComponent('Pharmaceutical company laboratory, modern equipment, scientists working, clean environment, professional medical research');
  const imageUrl = `https://space.coze.cn/api/coze_space/gen_image?image_size=portrait_4_3&prompt=%24%7BimagePrompt%7D&sign=0ac2bb31bcdff193d7af578af06f3561`;
  
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-blue-100 rounded-full opacity-50 -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-200 rounded-full opacity-50 -z-10"></div>
              <img 
                src={imageUrl} 
                alt="关于我们" 
                className="w-full h-auto rounded-xl shadow-xl relative z-10"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">关于我们</h2>
            <div className="w-20 h-1 bg-blue-600 mb-6"></div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              SupraDrug成立于2005年，是一家专注于医药研发、生产和销售的现代化制药企业。公司拥有一支高素质的研发团队和先进的生产设备，致力于为患者提供安全、有效的医药产品。
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              我们始终坚持"以质量求生存，以创新求发展"的理念，严格遵守药品生产质量管理规范，确保每一件产品都符合高标准的质量要求。
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <i className="fa-solid fa-flask text-blue-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">研发实力</h3>
                  <p className="text-gray-600 text-sm">专业研发团队，先进研发设备</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <i className="fa-solid fa-shield text-blue-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">品质保证</h3>
                  <p className="text-gray-600 text-sm">严格质量控制，符合国际标准</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <i className="fa-solid fa-users text-blue-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">专业团队</h3>
                  <p className="text-gray-600 text-sm">经验丰富的医药专业人才</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <i className="fa-solid fa-globe text-blue-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">全球视野</h3>
                  <p className="text-gray-600 text-sm">国际合作，全球市场布局</p>
                </div>
              </div>
            </div>
            
            <a 
              href="#" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              了解更多公司信息
              <i className="fa-solid fa-arrow-right ml-2"></i>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}