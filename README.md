# A simple twitter clone built using a homemade MEAN stack
##### A website that allows a user to create an account, login, logout and post chirps while logged in.  Based off of [this tutorial](https://github.com/hwz/chirp) with modified angular. (10/28/15)

#### By Ian McKenney

## Setup

* Download and install MongoDB, Express, NodeJS
* Clone the project using the link provided on Github in the Terminal.
* In the Terminal navigate to the chirpMEAN (or whatever you've called it) directory and run:
```console
npm install
```
* In one terminal tab start mongoDB by entering:
```console
/example/file/path/mongod.exe
```
* One mongoDB is running (it should say waiting for connections on port: XXXXX) type the following:
```console
npm start
```

* Open your web browser and enter localhost:3000 into the address bar.

Note: The default database port for Windows is 27017.  I'm not sure what the default port is on MacOS/Linux but if the port needs to be changed check out line 12 of app.js.

## Technologies Used

HTML, CSS, Bootstrap, MongoDB, Express, NodeJS, AngularJS

### Legal

Copyright (c) 2015 **Ian McKenney**

This software is licensed under the MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
