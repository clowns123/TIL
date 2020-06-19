const path = require('path');

module.exports = {
  // entry file
  entry: ['@babel/polyfill', './src/js/main.js'],
  // 컴파일 + 번들링된 js 파일이 저장될 경로와 이름 지정
  // __dirname : 이 파일의 절대경로
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // node_modules을 제외한 모든 자바스크립트 파일을 바벨로 트랜스파일링 해라
        include: [path.resolve(__dirname, 'src/js')],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
    ],
  },
  // 번들링된 js파일은 디버깅하기가 어려우므로 이전 소스코드들을 연결시킨 파일
  devtool: 'source-map',
  // https://webpack.js.org/concepts/mode/#mode-development
  mode: 'development',
};
