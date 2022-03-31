# website-janina-garber

This project was realized by a student trainee of the 11th grade and is therefore an exercise project but at the same time also a small customer project.

## Development Setup

First you need to install [Node.js](https://nodejs.org/en/) on your development machine.

### Linux

We are using Linux for development, so we have not tested Windows for this project, so it is better to or install Linux or to use [WSL (Windows Subsystem for Linux)](https://docs.microsoft.com/en-us/windows/wsl/about).

As Linux distribution you can use [Fedora Workstation](https://getfedora.org/en/workstation/), [Ubuntu Desktop](https://ubuntu.com/download/desktop), [Manjaro](https://manjaro.org/), [Zorin OS](https://zorin.com/os/) or whatever you like.

### Node.js

Note: To install Node.js on Windows you can use WSL (Windows Subsystem for Linux) or [NVM for Windows](https://github.com/coreybutler/nvm-windows).

On Linux, the easiest way to install Node.js is via [NVM](https://github.com/nvm-sh/nvm), which also allows you to install multiple Node.js versions at the same time.

So, open your terminal / console and run the following command to install NVM:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

After this, close and reopen your terminal / console. Now you can use the nvm command to install Node.js in a desired version. To test if the NVM command works, enter the following:

```bash
nvm --help
```

This should output the help of NVM on your screen, that means NVM works as desired.

Now, install Node.js in Version 16 using NVM:

```bash
nvm install 16
```

Now Node.js 16 should be installed, to test this enter the following command:

```bash
node --version
```

This should print your currently installed Node.js version, e.g. `v16.14.2`.

### Git

Note: On Windows you can use WSL again or install [Git for Windows](https://git-scm.com/download/win).

You'll also need git, because that's what you'll use to manage the source code for this project. Most Linux distributions have git preinstalled, if not you can install git like this:

On Fedora:

```bash
sudo dnf install git
```

On Ubuntu and Zorin OS:

```bash
sudo apt install git
```

On Manjaro:

```bash
sudo pacman -Syu git
```

### Set up Github

To be able to upload changes to Github you need an [SSH key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent). Run the following command to generate a new SSH Key on Linux (replace `your_email@example.com"` with your email):

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

This generates a private and a public key, the public key you are allowed to pass on, the other one you are not. The public key has the file extension `.pub` and is stored under `~/.ssh/name-of-your-key.pub`. Copy the content of this public key and [add them to Github](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account).

### Clone this project

To download this project you need to use `git` (See above). Run the following command to clone this project to your local development machine:

```bash
git clone git@github.com:ArtCodeStudio/website-janina-garber.git
```

This will create a new directory called `website-janina-garber` which contains the content of this project.

### Install dependencies

Go to the newly created directory:

```bash
cd website-janina-garber
```

And execute the following command inside this directory:

```bash
npm install
```

this installs all dependencies this project has, you don't need to enter this command every time, only if something has changed in the dependencies.

## Start developing

To build the source code now execute the following command, this must always run in the background when you are working on the project:

```bash
npm run start
```

This will watch for file changes and starts a web server with a auto reload function. After you have successfully set up this project, you will mostly only need this command to continue working.