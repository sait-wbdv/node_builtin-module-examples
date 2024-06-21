# README

These are low level node.js code examples that use the fs and path modules

## Prerequisite Knowlege

- Basic JS code (functions, variables, control flow)
- fetch api
- async/await syntax

## Levels

The techniques used in these files build on concepts incrementally, leading to performant examples.

### Level 1

- Objective: introduce common modules and r/w data
- Topics:
  - node:fs/promises vs node:fs for reading and writing files
  - node:path for using paths
- Code Organization:
  - error handling such as console.error(), try/catch, error.code and error.message
  - Immediatly Invoked Function Expression vs Function Declaration
- Tasks:
  - Create new files
  - Create new directories
  - Write text to files
  - Generate a file full of numbers
- Syntax:
  - fs.readFile
  - fs.readFileSync
  - fs.writeFile
  - fs.open
  - fs.close
- Outcome:
  - improved error handling skills
  - basic skills for reading and writing files in node

### Level 2

- Objective: add more functionality and manpiulate data
- Topics:
  - copying content from 1 source to another
  - directory manipulation
  - making network requests
  - api permissions
- Code Organization:
  - throw errors to pass them up to the next level
  - add arguments to functions
- Tasks:
  - Copy text from 1 file to another in the same folder
  - Copy text from 1 file to another in a different folder
  - Copy text from api fetch to a file
    - lorem ipusm
    - disney api
- Code:
  - fs.mkdir
  - fs.access
  - path.join
  - res.json()
- Outcome:
  - able to write code that edits and creates files
  - understands fundamentals of node file management works

### Level 3

- Objective: Learn how streams can be used to optimize data writing
- Topics:
  - Buffers
  - Streams
  - Examining application resource usage
- Code Organization:
  - split functions into separate files
  - local import and export
- Tasks:
  - stress test initial code using console.time() and system monitor
  - Refactor to use streams to write
  - stress test again to compare performance
  - Refactor and split code up into modules
  - Use arguments to make the functions more flexible
- Code:
  - .createReadStream
  - .createWriteStream
  - stream.on
    - data
    - drain
    - end
  - stream.resume
  - stream.pause
- Outcome:
  - Able to refactor and improve code
  - Improved debugging skills
  - Familarity with how applications use system resources
