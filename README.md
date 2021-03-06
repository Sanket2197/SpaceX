# SpaceX Explorer

React.js application which would help users list and browse all launches by SpaceX program.

---

## Requirements

For development, you will only need Node.js and a node global package, npm / Yarn, installed in your environement.

### Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###

### Yarn installation

After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

---

## Install and Configure

    $ git clone  https://github.com/Sanket2197/SpaceX.git
    $ cd SpaceX
    $ npm install
    $ cd client
    $ npm install
    $ npm run build

## Running the project

After completing the above mentioned process open command prompt in the project directory and run the below command to run the project

    $ npm start

## Approach

Following are the approach used for developing the project.

- Install the required software for the project.
- Start a Node project with npm init
- Install all the required dependencies.
- Using express.js create RESTful servies in Node which will be used for fetching data from spacex api.
- Start a React.js project inside the Node project which will be serverd to the end user
- Implement Redux for better state mangement in React
- Segreate the logic of components with redux using proper folder structuring.
- Using CSS for styling and making the design responsive for desktop , mobile and tablet
- Build the react project and serve the index.html to the client.
