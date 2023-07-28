
1. In simple terms, explain the difference between a client and a server. 

```
 fairly straightforward explanation of how one program (the client) requests a service or resource from another program (the server). You might want to spend more time explaining the pros and cons of the client-server model, as well as the basics of client-server protocols, particularly TCP/IP.

You may want to explain that an important advantage of the client-server model is that its centralized architecture helps make it easier to protect data with access controls that security policies enforce. Also, you should note that it doesn't matter if the clients and the server are built on the same operating system because data is transferred through client-server protocols that are platform-agnostic. An important disadvantage, you can explain, is that if too many clients simultaneously request data from the server, it may get overloaded. In addition to causing network congestion, too many requests may result in a denial of service.

As for the client-server protocols, explain that clients typically communicate with servers by using the TCP/IP protocol suite. TCP is a connection-oriented protocol, which means a connection is established and maintained until the application programs at each end have finished exchanging messages. It determines how to break application data into packets that networks can deliver; sends packets to and accepts packets from the network layer; manages flow control; and handles retransmission of dropped or garbled packets, as well as acknowledgement of all packets that arrive. In contrast, IP is a connectionless protocol, which means that there is no continuing connection between the endpoints that are communicating. Each packet that travels through the internet is treated as an independent unit of data, without any relation to any other unit of data.
```

2. What are a few different types of database(s)?

```
SQL vs noSQL, graph, (relational)
```

3. When speaking about databases, what's the difference between a 'document' and a 'table'? 

4. What is a cluster?

5. What are the main HTTP methods? What do they do?

6. What is REST? What does it stand for? How is it related to API's?

```
Representational States Transfer (REST) is a software architecture that specifies how an API should operate. REST was first created to provide a framework for managing communication on complex networks like the internet.

```

7. What does the term 'CRUD' mean? Could you relate this back to the HTTP methods? 

```
Create - POST
Read - GET
Update - PUT
Delete - DELETE

```

8. What is the different between 'PUT' and 'PATCH'. What does idempotent mean? 

```
What is POST?
Create in CRUD
A method to create a new (subordinate) resource into the collection of resources
When creating a new resource, the server will automatically assign an ID to this new resource.
If successfully created, will return the HTTP status code 201 (CREATED) and return a location-header with a link, like https://www.example.com/recipes/1.
This method is neither safe nor idempotent. In other words, invoking two identical POST requests will result in two different resources containing the same information

PUT
Update in CRUD
A method to primarily update existing resource. If the resource does not exist, the API may decide to create a resource.
If successfully updated, will return the HTTP status code 200 (OK), or 204 (No Content) if nothing is updated. If successfully created, will return the HTTP status code 201 (CREATED).
This method is not safe, since it modifies (or creates) states within the resource.
It is however idempotent, since the resource will be the same and has the same state as it did in the same call if it is created or updated a resource with the same call again.

Path
(Also) Update in CRUD
A method to make partial update on the resource.
If successfully updated, will return the HTTP status code 200 (OK), or 204 (No Content) if nothing is updated.
This method is neither safe nor idempotent.
```

??

```
The most obvious difference is that PUT can both create and modify a resource while POST can only create a resource.

The PUT method is idempotent. Meaning if you (re)try to send a request multiple times, this is equivalent to a single request modification.

Whereas, the POST method is NOT idempotent. If you retry to send a request multiple times, you will end up having multiple resources with multiple different URIs on the server.

Generally speaking, the PUT method is used for UPDATE operations while the POST method is used for the CREATE operations.

Loosely: PUT means that the request content is a proposed replacement for the current representation of some resource -- it's the method we would use to upload or replace a single web page if we were using the HTTP protocol to do that.

PATCH means that the request content is a patch document - which is to say a proposed edit to the current representation of some resource. So instead of sending the entire HTML document with PUT, you might instead just send a fix to the spelling error in the title element.

POST is... well, POST is everything else.

POST serves many useful purposes in HTTP, including the general purpose of “this action isn’t worth standardizing.” -- Fielding 2009

The POST method has the fewest constraints on its semantics (which is why we can use it for anything), but the consequence is that the HTTP application itself has to be very conservative with it.

Webber 2011 includes a good discussion of the implementations of the fact that HTTP is an application protocol.

Now whether we are inserting a new resource or updating or modifying an existing one - it all depends upon the database operation being carried out.

The HTTP method tells us what the request means - it doesn't place any constraints on how your implementation works.

```

