Rust 中文文档示例文档
===

[![Docker Image Size (latest by date)](https://img.shields.io/docker/image-size/wcjiang/rust-cn-document-for-docker?logo=docker)](https://hub.docker.com/r/wcjiang/rust-cn-document-for-docker)
[![CI](https://github.com/jaywcjlove/rust-cn-document-for-docker/actions/workflows/ci.yml/badge.svg)](https://github.com/jaywcjlove/rust-cn-document-for-docker/actions/workflows/ci.yml)

本仓库，将来自 [**@rust-lang-cn**](https://github.com/rust-lang-cn) 中 Rust 相关的中文文档仓库打包到 Docker 中，用于本地部署预览：

Github Repo | last commit | home
---- | ---- | ----
[Rust 标准库文档中文版](https://github.com/rust-lang-cn/std-cn) | [![GitHub last commit](https://img.shields.io/github/last-commit/rust-lang-cn/std-cn?style=flat&label=last)](https://github.com/rust-lang-cn/std-cn/commits) | [#home](https://jaywcjlove.github.io/rust-cn-document-for-docker/std/std/)
[Rust 程序设计语言 中文版](https://github.com/rust-lang-cn/book-cn) | [![GitHub last commit](https://img.shields.io/github/last-commit/rust-lang-cn/book-cn?style=flat&label=last)](https://github.com/rust-lang-cn/book-cn/commits) | [#home](https://jaywcjlove.github.io/rust-cn-document-for-docker/book/)
[Rust By Example 中文版](https://github.com/rust-lang-cn/rust-by-example-cn) | [![GitHub last commit](https://img.shields.io/github/last-commit/rust-lang-cn/rust-by-example-cn?style=flat&label=last)](https://github.com/rust-lang-cn/rust-by-example-cn/commits) | [#home](https://jaywcjlove.github.io/rust-cn-document-for-docker/rust-by-example-cn/)
[Rust 参考手册中文版](https://github.com/rust-lang-cn/reference-cn) | [![GitHub last commit](https://img.shields.io/github/last-commit/rust-lang-cn/reference-cn?style=flat&label=last)](https://github.com/rust-lang-cn/reference-cn/commits) | [#home](https://jaywcjlove.github.io/rust-cn-document-for-docker/reference/)
[RustDoc 手册中文版](https://github.com/rust-lang-cn/rustdoc-cn) | [![GitHub last commit](https://img.shields.io/github/last-commit/rust-lang-cn/rustdoc-cn?style=flat&label=last)](https://github.com/rust-lang-cn/rustdoc-cn/commits) | [#home](https://jaywcjlove.github.io/rust-cn-document-for-docker/rustdoc/)
[Rust Cookbook 中文版](https://github.com/rust-lang-cn/rust-cookbook-cn) | [![GitHub last commit](https://img.shields.io/github/last-commit/rust-lang-cn/rust-cookbook-cn?style=flat&label=last)](https://github.com/rust-lang-cn/rust-cookbook-cn/commits) | [#home](https://jaywcjlove.github.io/rust-cn-document-for-docker/rust-cookbook/)
[Rust 版本指南](https://github.com/rust-lang-cn/edition-guide) | [![GitHub last commit](https://img.shields.io/github/last-commit/rust-lang-cn/edition-guide?style=flat&label=last)](https://github.com/rust-lang-cn/edition-guide/commits) | [#home](https://jaywcjlove.github.io/rust-cn-document-for-docker/edition-guide/)
[Cargo 手册](https://github.com/rust-lang-cn/cargo-cn) | [![GitHub last commit](https://img.shields.io/github/last-commit/rust-lang-cn/cargo-cn?style=flat&label=last)](https://github.com/rust-lang-cn/cargo-cn/commits) | [#home](https://jaywcjlove.github.io/rust-cn-document-for-docker/cargo/)
[Rust 秘典](https://github.com/rust-lang-cn/nomicon-zh-Hans) | [![GitHub last commit](https://img.shields.io/github/last-commit/rust-lang-cn/nomicon-zh-Hans?style=flat&label=last)](https://github.com/rust-lang-cn/nomicon-zh-Hans/commits) | [#home](https://jaywcjlove.github.io/rust-cn-document-for-docker/nomicon/)
[Cargo 备忘清单(速查表)](https://github.com/jaywcjlove/reference/tree/main/docs/cargo.md) | [![GitHub last commit](https://img.shields.io/github/last-commit/jaywcjlove/reference?style=flat&label=last)](https://github.com/jaywcjlove/reference/commits) | [#home](https://jaywcjlove.github.io/rust-cn-document-for-docker/quick-reference/docs/cargo.html)
[Rust 备忘清单(速查表)](https://github.com/jaywcjlove/reference/tree/main/docs/rust.md) | [![GitHub last commit](https://img.shields.io/github/last-commit/jaywcjlove/reference?style=flat&label=last)](https://github.com/jaywcjlove/reference/commits) | [#home](https://jaywcjlove.github.io/rust-cn-document-for-docker/quick-reference/docs/rust.html)
[Quick Reference(速查表)](https://github.com/jaywcjlove/reference) | [![GitHub last commit](https://img.shields.io/github/last-commit/jaywcjlove/reference?style=flat&label=last)](https://github.com/jaywcjlove/reference/commits) | [#home](https://jaywcjlove.github.io/rust-cn-document-for-docker/quick-reference/index.html)
[Rust 语言圣经](https://github.com/sunface/rust-course) | [![GitHub last commit](https://img.shields.io/github/last-commit/sunface/rust-course?style=flat&label=last)](https://github.com/sunface/rust-course/commits) | [#home](https://jaywcjlove.github.io/rust-cn-document-for-docker/rust-course/index.html)
[Rusty Book(锈书)](https://github.com/rustlang-cn/rusty-book) | [![GitHub last commit](https://img.shields.io/github/last-commit/rustlang-cn/rusty-book?style=flat&label=last)](https://github.com/rustlang-cn/rusty-book/commits) | [#home](https://jaywcjlove.github.io/rust-cn-document-for-docker/rusty-book/index.html)

## Docker

```bash
docker pull wcjiang/rust-cn-document-for-docker
```

```bash
docker run --name rust-document \
  --restart always -itd \
  -p 9613:3000 \
  wcjiang/rust-cn-document-for-docker:latest
# Or
docker run --name rust-document \
  --restart always -itd \
  -p 9613:3000 \
  ghcr.io/jaywcjlove/rust-cn-document-for-docker:latest
```

在浏览器中访问以下 URL

http://localhost:9613/  
http://localhost:9613/book/  
http://localhost:9613/cargo/  
http://localhost:9613/edition-guide/  
http://localhost:9613/reference/  
http://localhost:9613/rustdoc/  
http://localhost:9613/rust-cookbook/  
http://localhost:9613/std/std/  
http://localhost:9613/rust-by-example-cn/  
http://localhost:9613/nomicon/  
http://localhost:9613/quick-reference/index.html  
http://localhost:9613/quick-reference/docs/rust.html  
http://localhost:9613/quick-reference/docs/cargo.html  
http://localhost:9613/rust-course/index.html  
http://localhost:9613/rusty-book/index.html

## License

MIT © [Kenny Wong](https://github.com/jaywcjlove)
