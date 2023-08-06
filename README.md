# uso-de-Stream
 Stream use for work with files

In this small project i worked with deferent type of Streams:
1- Writable: streams to which we can write data. For example, fs.createWriteStream() lets us write data to a file using streams.
2- Readable: streams from which data can be read. For example: fs.createReadStream() lets us read the contents of a file.
3- Duplex: streams that are both Readable and Writable. For example, net.Socket
4- Transform: streams that can modify or transform the data as it is written and read. For example, in the instance of file-compression, you can write compressed data and read decompressed data to and from a file.

The first step was create a big file with createWriteableStream. Then i readed this big file with createReadableStream and i used listeners for see the process. Then i used Stream duplex type for read and writes all off content of txt.

With transform i could read , write and transform the data that as readed.

Finally, i used promises and pipes for a job more similar to real use. Pipes allows you to link the reading and writing of the file, I mean, once the file is read, that information will be copied elsewhere, the output of the read would be the input of the write
 
