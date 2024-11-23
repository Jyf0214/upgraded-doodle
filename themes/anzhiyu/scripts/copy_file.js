const fs = require('fs');
const path = require('path');

// 复制文件函数
function copyFiles(srcDir, destDir, extensions) {
  if (!fs.existsSync(srcDir)) {
    console.error(`Source directory does not exist: ${srcDir}`);
    return;
  }

  // 确保目标目录存在
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  // 读取源目录下的文件
  const files = fs.readdirSync(srcDir);
  files.forEach(file => {
    const ext = path.extname(file).toLowerCase();
    if (extensions.includes(ext)) {
      const srcFile = path.join(srcDir, file);
      const destFile = path.join(destDir, file);
      fs.copyFileSync(srcFile, destFile);
      console.log(`Copied: ${srcFile} -> ${destFile}`);
    }
  });
}

// 注册 Hexo 的 after_generate 钩子
hexo.extend.filter.register('after_generate', () => {
  const srcDir = path.join(hexo.theme_dir, 'source/img/siteicon');
  const destDir = path.join(hexo.public_dir, 'img');
  const extensions = ['.svg', '.png']; // 需要复制的文件扩展名

  console.log('Copying site icons...');
  copyFiles(srcDir, destDir, extensions);
  console.log('Site icons copied successfully!');
});