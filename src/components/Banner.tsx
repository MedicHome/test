import { motion } from 'framer-motion';

export function Banner() {
  const imagePrompt = encodeURIComponent('Pharmaceutical company banner, modern design, blue and white color scheme, professional medical products display, clean background');
  const imageUrl = `https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=%24%7BimagePrompt%7D&sign=fe5f52000e3a388bcc4aa2a9660fe107`;
  
  return (
    <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={imageUrl} 
          alt="Pharmaceutical products banner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            创新医药，<br />
            <span className="text-blue-300">健康生活</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-xl">
            致力于研发和生产高品质医药产品，为人类健康事业贡献力量。
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#products" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              浏览产品
              <i className="fa-solid fa-arrow-right ml-2"></i>
            </a>
            <a 
              href="#contact" 
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-medium py-3 px-8 rounded-lg transition-all border border-white/40"
            >
              联系我们
            </a>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#products" className="text-white text-2xl">
          <i className="fa-solid fa-chevron-down"></i>
        </a>
      </div>
    </section>
  );
}