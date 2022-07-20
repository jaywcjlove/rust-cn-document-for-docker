本仓库，将来自 [**@rust-lang-cn**](https://github.com/rust-lang-cn) 中 Rust 相关的中文文档仓库打包到 Docker 中，用于本地部署预览：

- [Rust 标准库文档中文版](https://github.com/rust-lang-cn/std-cn)
- [Rust 程序设计语言 中文版](https://github.com/rust-lang-cn/book-cn)
- [Rust By Example 中文版](https://github.com/rust-lang-cn/rust-by-example-cn)
- [Rust 参考手册中文版](https://github.com/rust-lang-cn/reference-cn)
- [RustDoc 手册中文版](https://github.com/rust-lang-cn/rustdoc-cn)
- [Rust Cookbook 中文版](https://github.com/rust-lang-cn/rust-cookbook-cn)

## Docker

Using default tag: latest
latest: Pulling from wcjiang/rust-cn-document-for-docker
79caed534a38: Pulling fs layer
36c2236a4a31: Pulling fs layer
0076b2ef2c77: Pulling fs layer
ef99c22aaeb6: Pulling fs layer
07f6b3ff743f: Pulling fs layer
ef99c22aaeb6: Waiting
07f6b3ff743f: Waiting
79caed534a38: Verifying Checksum
79caed534a38: Download complete
0076b2ef2c77: Verifying Checksum
0076b2ef2c77: Download complete
36c2236a4a31: Verifying Checksum
36c2236a4a31: Download complete
79caed534a38: Pull complete
ef99c22aaeb6: Verifying Checksum
ef99c22aaeb6: Download complete
07f6b3ff743f: Verifying Checksum
07f6b3ff743f: Download complete
36c2236a4a31: Pull complete
0076b2ef2c77: Pull complete
ef99c22aaeb6: Pull complete
07f6b3ff743f: Pull complete
Digest: sha256:e6fba2edef0973f0c7943d91250edfa03c2a2e93b9a5435c83c58d19c89bae5f
Status: Downloaded newer image for wcjiang/rust-cn-document-for-docker:latest
docker.io/wcjiang/rust-cn-document-for-docker:latest

76d31a20371de6415e7eaea30930018cff0b7e23ef1e4bf6bd5a72c95cbe7044

在浏览器中访问以下 URL

http://localhost:9613/  
http://localhost:9613/book/  
http://localhost:9613/reference/  
http://localhost:9613/rustdoc/  
http://localhost:9613/rust-cookbook/  
http://localhost:9613/std/std/  
http://localhost:9613/rust-by-example-cn/  
