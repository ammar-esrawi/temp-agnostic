# GMS Connector
- A simple connector to the GMS Signal Service
- allows developers to send messages to a GMS Signal Service from their scripts.

## Pre-requisites
- account in GMS Signal Service
- underscore module installed in Scriptr.io IDE


## Configure the connector

- edit the file ./config
```javascript
const gms = {
    baseUrl: "https://mycentralconnect.com/",
    mainNameSpaceDocument: "CUSTOMER_ACCOUNT_NAME",
    endPoint: "https://mycentralconnect.com/CUSTOMER_ACCOUNT_NAME/receiver.asmx",
    name: "GMS ACOUNT NAME",//not used for now but it will help you distinguish your apps
    data: {
        //you can add more default config here
        username: "USER_NAME",
        password: "PASSWORD",
        account: "ACCOUNT",
    }

};

```
## Use the connector
```javascript
var gmsModule = require('./GMS');

var gms=new gmsModule.GMS();
var cnMngr=gms.getConnectorManager();
var myConnector=cnMngr.getConnector();


var data={
    "signalformat": "CID",
    "signalcode": "E140",
    "point": "1",
    "url": "SOME_URL",
};

try{
    
    return myConnector.send(
    msg
);
}catch(exception){
    return exception;
}
```
- the data object is a mapping of the soap service api body
- use lower case
## XML document définition

```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="set timehttp://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <Signal xmlns="http://tempuri.org/">
      <PollMessageFlag>boolean</PollMessageFlag> YOU START HERE
      <UserName>string</UserName>
      <UserPassword>string</UserPassword>
      <Receiver>string</Receiver>
      <Line>string</Line>
      <Account>string</Account> (FOR FIRST ACCOUNT TEST)
      <SignalFormat>string</SignalFormat>
      <SignalCode>string</SignalCode> THIS CODE WILL SEND GENERAL ALARM FOR INITIAL TESTING
      <Point>string</Point> INITIAL ZONE TO USE FOR TESTING
      <Area>string</Area>
      <UserID>string</UserID>
      <Text>string</Text>
      <Date>dateTime</Date>
      <ANIPhone>string</ANIPhone>
      <Longitude>decimal</Longitude> ONLY IF REQUIRED
      <Latitude>decimal</Latitude> ONLY IF REQUIRED
      <FileName>string</FileName> NOT NEEDED
      <URL>string</URL> THIS IS OPTIONL FOR LINKING TO EXTERNAL WEB SITE (Such as linking to a “Dashboard” if required or other URL)
      <VideoType>string</VideoType>
      <TestSignalFlag>boolean</TestSignalFlag>
    </Signal>
  </soap:Body>
</soap:Envelope>
```

## parameters
- All of the parameters are optional parameters.

### PollMessageFlag
When this is set to true stages will mark the task as operational and not process the message.
 
### UserName & UserPassword
The Signal Server may optionally be set up to require a User Name and Password with each signal. If this is required a Valid Stages UserName and UserPassword must be supplied.
### Receiver
This is a string which can be used to identify a specific receiver. This field can be included in the definition of a Stages Xmit#.
### Line
This is a string which can be used to identify the line where the signal was received. This field can be included in the definition of a Stages Xmit#.
### Account
This is a string which can be used to identify the device that generated the signal. This field can be included in the definition of a Stages Xmit#.Account
### SignalFormat
This defines the meaning of the SignalCode Parameter. Common values are “SIA” or “CID”
### SignalCode
Stages will interpret this based on the Signal Format. Often this is a SIA code or a Contact ID code.
### Point
The point or zone that generated the signal.
### Area
The area of protection.
### UserID
The panel User ID.
### Text
A free form comment.
### Date
The date and time of the signal. 
### ANIPhone
The phone number of the line generating the signal.
### Longitude
The decimal representation of the longitude associated with the signal
### Latitude
The decimal representation of the latitude associated with the signal
### FileName
Contains the full path name of related file.
### URL
An address associated with the message.
### VideoType
Defines the type of Video associated with the message.
### TestSignalFlag
When this is set to true stages will interpret the signal as a test signal. The signal will be logged to the account and not generate an alarm.

