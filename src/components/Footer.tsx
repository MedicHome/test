export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <i className="fa-solid fa-pills mr-2 text-blue-400"></i>SupraDrug
            </h3>
            <p className="text-gray-400 mb-6">
              致力于研发和生产高品质医药产品，为人类健康事业贡献力量。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fa-brands fa-weixin text-lg"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fa-brands fa-weibo text-lg"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fa-brands fa-linkedin text-lg"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors">首页</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white transition-colors">产品中心</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">关于我们</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">联系我们</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">产品系列</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">抗生素系列</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">心血管药物</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">消化系统用药</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">营养补充剂</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">联系我们</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fa-solid fa-map-marker-alt text-blue-400 mt-1 mr-3"></i>
                <span className="text-gray-400">上海市浦东新区张江高科技园区科苑路88号</span>
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-phone text-blue-400 mr-3"></i>
                <span className="text-gray-400">400-888-9999</span>
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-envelope text-blue-400 mr-3"></i>
                <span className="text-gray-400">info@supradrug.cn</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2025 SupraDrug. 保留所有权利.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">隐私政策</a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">使用条款</a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">网站地图</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}