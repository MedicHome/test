import { motion } from 'framer-motion';

export function ProductSection() {
  const products = [
    {
      id: 1,
      name: '抗生素系列',
      description: '高效广谱抗生素，用于治疗各种细菌感染',
      imagePrompt: 'Pharmaceutical antibiotics product packaging, clean design, blue and white colors'
    },
    {
      id: 2,
      name: '心血管药物',
      description: '用于治疗高血压、冠心病等心血管疾病',
      imagePrompt: 'Cardiovascular medication packaging, professional medical design'
    },
    {
      id: 3,
      name: '消化系统用药',
      description: '缓解胃肠不适，促进消化健康',
      imagePrompt: 'Digestive system medication packaging, medical product'
    },
    {
      id: 4,
      name: '营养补充剂',
      description: '全面补充人体所需维生素和矿物质',
      imagePrompt: 'Nutritional supplements packaging, health products'
    }
  ];
  
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">产品中心</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            我们致力于研发和生产高品质医药产品，满足不同患者的健康需求
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => {
            const imagePrompt = encodeURIComponent(product.imagePrompt);
            const imageUrl = `https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=%24%7BimagePrompt%7D&sign=664f4e0c6a2c586326cd3fc95372312f`;
            
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={imageUrl} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                  >
                    了解更多
                    <i className="fa-solid fa-arrow-right ml-2 text-sm"></i>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium border border-blue-600 py-2 px-6 rounded-lg transition-all hover:bg-blue-50"
          >
            查看全部产品
            <i className="fa-solid fa-angle-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
}