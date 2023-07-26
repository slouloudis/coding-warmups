## How does the internet work anyway? & Other questions. 

For this warmup session, you need to either make a fork of this repo, or copy the content, and answer each of the questions below, either from memory or google it. If you do google it, reword it, or find another resource that makes more sense to you. 

## 1. What is npm? 

```
npm stands for node package manager, and it comes with Node.js. It gives us a way to install packages both globally (on our machine) and locally (for our project) npm by itself doesn’t run any packages. If you want to run a package using npm, you must specify that package in your package.json file.
```

## 2. What is the difference between npm and npx? Why are we using npx when doing create-react-app, but using npm i axios when installing axios? 

```
With NPM (node package manager), we can install packages globally, or locally per project. NPM does not directly allow us to execute these packages. NPX (node package exectue) installs the package temporarily -> executes it -> and then uninstalls it. 
```

## 3. What is a CDN? 

```
CDN stands for Content Delivery Network. CDNs are geographically distributed groups of servers that deliver Internet content quickly. To provide end-users with fast, secure media delivery and web content, the servers are dispersed across many physical and network locations. Using CDNs can significantly reduce load times since they deliver files at higher bandwidth from servers located closer to your visitors than your own web server.
```

## 4. What is a protocol?

```
(network) protocols are a set of rules and conventions that allow different systems to communicate with eachother. We write programs that follow these protocols - the protocol is just the requirment we need to fuful to make a meaningful request to a webserver. 

Think of it like our communication - we may write an email differently then how we'd send a text-message, or speak to someone face to face. There are many different protocols. TCP/IP is a good example. TCP/IP is a protocol that allows two computers to have a long conversation over the Internet, even though the Internet only delivers one packet at a time and doesn't even guarantee success of any one packet.

In a nutshell, a TCP/IP connection starts with messages like "hey, let's talk!", with a response of "OK!", then every time the sender sends a packet, the receiver responds with an acknowledgement ("hey, I got packet 34!").
```

## 5. What is the difference betweeen HTTP and HTTPS? 
```
HTTP stands for HyperText Transfer Protocol. 
The S! It is a protocol (hence the P in the name) originally designed to transfer (the T) a certain sort of file called a HTML (Hypertext Markup Language) file (which is where we get the HT from). With HTTPS, we encrypt the messages being sent between the sender and receiver. 

```


## 6. What is the 'user-agent'? 
```
A user agent is a string identifying the browser and operating system to the webserver. You could potentially write different code for differnt browsers, but this is discouraged. It is included in the HTTP header. https://developer.mozilla.org/en-US/docs/Glossary/Request_header

Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36
```

## 7. What is an HTTP status code? What are some common ones you may run into, and what do they mean? What's one uncommon one?
```
404 (not found), 403 (unautherised), 200 (OK), 
```

## 8. What is a DNS? 
```
A DNS (Domain Name System) - They serve us domain names! Think of it like a phonebook. I may want to call my friend Amber, but I need to know her phone number first. These are hard to memorise, so I can look her name up first to check what the number is. When we make a request for google.com, our browser will first go to a DNS and find out what the 'real' adress of google.com is, often some long list of numbers 
```


## 9. Find out an interesting fact about any of the stuff talked about above. 
```
HTTP (Hypertext Transfer Protocol) was something invented by Tim Berners Lee in 1989 at CERN when he created the WWW (he didn't do it from scratch and built on the ideas of others before him, but he created the version we now all use).
```