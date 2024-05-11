---
title: Install the Openos CLI
pagination_label: Install the Openos CLI
sidebar_label: Installation
sidebar_position: 1
---

There are multiple ways to install the Openos tools on your computer depending
on your preferred workflow:

- [Use Openos's Install Tool (Simplest option)](#use-solanas-install-tool)
- [Download Prebuilt Binaries](#download-prebuilt-binaries)
- [Build from Source](#build-from-source)
- [Use Homebrew](#use-homebrew)

## Use Openos's Install Tool

### MacOS & Linux

- Open your favorite Terminal application

- Install the Openos release version on your machine by running:

- The following output indicates a successful update:


- Depending on your system, the end of the installer messaging may prompt you to

```bash
Please update your PATH environment variable to include the openos programs:
```

- If you get the above message, copy and paste the recommended command below it
  to update `PATH`
- Confirm you have the desired version of `openos` installed by running:

```bash
openos --version
```

---
### Linux

Download the binaries by navigating to
[https://github.com/openversenetwork/OpenOS.Prod/releases/latest](https://github.com/openversenetwork/OpenOS.Prod/releases/latest),
download **openos-release-x86_64-unknown-linux-gnu.tar.bz2**, then extract the
archive:

```bash
tar jxf openos-release-x86_64-unknown-linux-gnu.tar.bz2
cd openos-release/
export PATH=$PWD/bin:$PATH
```

### MacOS

Download the binaries by navigating to
[https://github.com/openversenetwork/OpenOS.Prod/releases/latest](https://github.com/openversenetwork/OpenOS.Prod/releases/latest),
download **openos-release-x86_64-apple-darwin.tar.bz2**, then extract the
archive:

```bash
tar jxf openos-release-x86_64-apple-darwin.tar.bz2
cd openos-release/
export PATH=$PWD/bin:$PATH
```

### Windows

- Download the binaries by navigating to
  [https://github.com/openversenetwork/OpenOS.Prod/releases/latest](https://github.com/openversenetwork/OpenOS.Prod/releases/latest),
  download **openos-release-x86_64-pc-windows-msvc.tar.bz2**, then extract the
  archive using WinZip or similar.

- Open a Command Prompt and navigate to the directory into which you extracted
  the binaries and run:

```bash
cd openos-release/
set PATH=%cd%/bin;%PATH%
```

## Build From Source

If you are unable to use the prebuilt binaries or prefer to build it yourself
from source, follow these steps, ensuring you have the necessary prerequisites
installed on your system.

### Prerequisites

Before building from source, make sure to install the following prerequisites:

#### For Debian and Other Linux Distributions:

Rust Programming Language: Check "Install Rust" at
[https://www.rust-lang.org/tools/install](https://www.rust-lang.org/tools/install),
which recommends the following command.

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

Install build dependencies:

- Build essential
- Package config
- Udev & LLM & libclang
- Protocol buffers

```bash
apt-get install \
    build-essential \
    pkg-config \
    libudev-dev llvm libclang-dev \
    protobuf-compiler
```

#### For Other Linux Distributions:

Replace `apt` with your distribution's package manager (e.g., `yum`, `dnf`,
`pacman`) and adjust package names as needed.

#### For macOS:

Install Homebrew (if not already installed), check "Install Hombrew" at
[https://brew.sh/](https://brew.sh/), which recommends the following command:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Install the necessary tools and libraries using Homebrew:

```bash
brew install rust pkg-config libudev protobuf llvm coreutils
```

Follow the instructions given at the end of the brew install command about
`PATH` configurations.

#### For Windows:

Rust Programming Language: Check "Install Rust" at
[https://www.rust-lang.org/tools/install](https://www.rust-lang.org/tools/install),
which recommends the following command.

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

- Download and install the Build Tools for Visual Studio (2019 or later) from
  the
  [Visual Studio downloads page](https://visualstudio.microsoft.com/downloads/).
  Make sure to include the C++ build tools in the installation.
- Install LLVM: Download and install LLVM from the
  [official LLVM download page](https://releases.llvm.org/download.html).
- Install Protocol Buffers Compiler (protoc): Download `protoc` from the
  [GitHub releases page of Protocol Buffers](https://github.com/protocolbuffers/protobuf/releases),
  and add it to your `PATH`.

:::info

Users on Windows 10 or 11 may need to install
[Windows Subsystem for Linux](https://learn.microsoft.com/en-us/windows/wsl/install)
(WSL) in order to be able to build from source. WSL provides a Linux environment
that runs inside your existing Windows installation. You can then run regular
Linux software, including the Linux versions of Openos CLI.

After installed, run `wsl` from your Windows terminal, then continue through the
[Debian and Other Linux Distributions](#for-debian-and-other-linux-distributions)
above.

:::

### Building from Source

After installing the prerequisites, proceed with building Openos from source,
navigate to
[Openos's GitHub releases page](https://github.com/openversenetwork/OpenOS.Prod/releases/latest),
and download the **Source Code** archive. Extract the code and build the
binaries with:

```bash
./scripts/cargo-install-all.sh .
export PATH=$PWD/bin:$PATH
```

## Use Homebrew

This option requires you to have [Homebrew](https://brew.sh/) package manager on
your MacOS or Linux machine.

### MacOS & Linux

- Confirm you have the desired version of `openos` installed by entering:

```bash
openos --version
```
