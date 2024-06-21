# Write File Notes

These examples will write to the file and if there is already content, then it will erase what already exists.

## Notes

- Writing files can be done in a few different ways.

  - fs.open(fileName, "w") -- when you need more control over the file and writing.
  - **synchronous**: good for simple small writes, and when you need to have a file written before anything else (like a config file)
    - fs.writeFileSync(fileName, content) -- blocks event loop, needs try / catch
  - **asyncrhonous**: good for more complex writing, when there are multiple things to write, and when speed is important
    - fs.writeFile(fileName, content) -- non blocking, generally prefer to writeFileSync

## Resources

- Docs: [Writing files with NodeJS](https://nodejs.org/en/learn/manipulating-files/writing-files-with-nodejs)
