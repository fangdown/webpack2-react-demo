# webpack2.x 搭建步骤
- npm init   ## 初始化
- npm install webpack --save-dev ##安装webpack
- npm install webpack-dev-server --save-dev ##安装本地服务器
- npm install json-loader --save-dev ##安装json解析器
- npm install babel-core babel-loader babel-preset-es2015 babel-preset-react --save-dev ##安装js解析器
- npm install react react-dom --save ##安装react
- npm install style-loader css-loader --save-dev ##安装样式解析器 
- npm install postcss  autoprefixer --save-dev ##安装前缀解析器
- npm install html-webpack-plugin --save-dev ##安装插件 生成模板文件
- npm install babel-plugin-react-transform react-transform-hmr --save-dev ##安装热加载插件
- npm install extract-text-webpack-plugin ##安装css js分离插件