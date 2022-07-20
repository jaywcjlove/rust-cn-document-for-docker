Rust 中文文档示例文档
===

[![Docker Image Size (latest by date)](https://img.shields.io/docker/image-size/wcjiang/rust-cn-document-for-docker?logo=docker)](https://hub.docker.com/r/wcjiang/rust-cn-document-for-docker)

文档网站来自 [**@rust-lang-cn**](https://github.com/rust-lang-cn) 中相关仓库：

- [Rust 标准库文档中文版](https://github.com/rust-lang-cn/std-cn)
- [Rust 程序设计语言 中文版](https://github.com/rust-lang-cn/book-cn)
- [Rust By Example 中文版](https://github.com/rust-lang-cn/rust-by-example-cn)

用于 Docker 部署，本地预览。

## Docker

```bash
docker pull wcjiang/rust-cn-document-for-docker
```

```bash
docker run --name rust-cn-document-for-docker -itd -p 9613:3000 wcjiang/rust-cn-document-for-docker:latest
# Or
docker run --name rust-cn-document-for-docker -itd -p 9613:3000 ghcr.io/jaywcjlove/rust-cn-document-for-docker:latest
```

在浏览器中访问以下 URL

http://localhost:9613/
http://localhost:9613/book/
http://localhost:9613/std/std/
http://localhost:9613/rust-by-example-cn/