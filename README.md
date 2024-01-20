supported-version-of
======================

A Node.js script to find npm package versions compatible with a specific Node.js version. This tool helps in identifying which versions of a package can be seamlessly integrated into your Node.js project, ensuring compatibility and stability.

Use Case
--------

When working with older Node.js projects, you might encounter situations where you need to add or update dependencies. However, not all package versions are compatible with every Node.js version. This script saves time by automatically finding package versions that are compatible with your specific Node.js environment, thus avoiding potential compatibility issues and errors.

Usage
-----

You can run it directly using `npx`. Ensure you have Node.js and npm installed on your system.

`npx supported-version-of <package-name> <node-version>`

For example, to find versions of the `prisma` package that are compatible with Node.js version `12.22`, run:

`npx supported-version-of prisma 12.22`

Replace `prisma` and `12.22` with the package name and Node.js version you are interested in.

Contributing
------------

Contributions to this project are welcome! If you have suggestions for improvements, bug fixes, or new features, feel free to create an issue or submit a pull request on the project's repository.

To contribute:

1.  Fork the repository.
2.  Create a new branch for your feature (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a pull request.

License
-------

This project is licensed under the ISC License. See the LICENSE file for details.