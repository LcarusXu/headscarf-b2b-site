# NUVAYLE Static Website Package

这是一个可直接部署到 GitHub Pages 的 NUVAYLE 头巾独立站静态网站包。

## 页面

- `index.html`：首页
- `products.html`：产品集合页
- `product.html`：产品详情页模板，支持 `?sku=NV-MOD-001`
- `about.html`：品牌故事页
- `wholesale.html`：B2B / OEM / ODM 页面
- `faq.html`：FAQ / Fabric Guide 基础页
- `contact.html`：联系与询盘页

## 目录

- `assets/css/styles.css`：全站样式
- `assets/js/main.js`：产品渲染、筛选、详情页逻辑
- `assets/img/`：原创 SVG 图片素材
- `data/products.json`：产品数据，可直接修改产品名称、价格、分类、图片路径
- `素材图片内容清单.md`：每个素材图片内容说明

## GitHub Pages 部署

1. 新建 GitHub 仓库，例如 `nuvayle-site`。
2. 将本文件夹内所有文件上传到仓库根目录。
3. 进入 GitHub 仓库：Settings → Pages。
4. Source 选择 `Deploy from a branch`。
5. Branch 选择 `main`，目录选择 `/root`。
6. 保存后等待 GitHub Pages 生成链接。

## 后续上线前建议替换

- 替换真实产品图片。
- 修改真实价格、库存、SKU。
- 接入 Shopify、WooCommerce 或独立支付系统。
- Contact 表单接入 Formspree、Airtable、HubSpot 或自有后端。
- 添加隐私政策、退换货政策、运输政策。

## 版权说明

本包没有复制参考网站的图片、源代码或文案。模块结构借鉴电商品牌站常见用户路径，所有 NUVAYLE 素材为原创 SVG 示例图。
