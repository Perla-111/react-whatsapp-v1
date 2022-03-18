var x = {
    "data": [
        {
            "1234567890": {
                "phoneNumber": "1234567890",
                "name": "Kalyan Perla",
                "about": "Hey There! I am using WhatsApp",
                "lastSeen": "",
                "isOnline": "",
                "calls": [
                    {
                        "type": "audio",
                        "timeStamp": "5 : 50 pm",
                        "phoneNumber": "0987654321",
                        "name": "Kumar",
                        "isIncoming": "no",
                        "isOutgoing": "yes"
                    }
                ],
                "chats": [
                    {
                        "0987654321": {
                            "phoneNumber": "0987654321",
                            "name": "Kumar",
                            "about": "Urgent calls only",
                            "lastSeen": "",
                            "isOnline": "",
                            "messages": [
                                {
                                    "msgType": "sent",
                                    "timeStamp": "5 : 48 pm",
                                    "msg": "Hi",
                                    "isDelivered": "yes",
                                    "isReceived": "yes",
                                    "isRead": "yes",
                                    "id": "1"
                                },
                                {
                                    "msgType": "received",
                                    "timeStamp": "5 : 48 pm",
                                    "msg": "Hello Kalyan",
                                    "isDelivered": "yes",
                                    "isReceived": "yes",
                                    "isRead": "yes",
                                    "id": "2"
                                },
                                {
                                    "msgType": "received",
                                    "timeStamp": "5 : 49 pm",
                                    "msg": "How are you?",
                                    "isDelivered": "yes",
                                    "isReceived": "yes",
                                    "isRead": "yes",
                                    "id": "3"
                                }
                            ]
                        }
                    }
                ]
            }
        },
        {
            "0987654321": {
                "phoneNumber": "0987654321",
                "name": "",
                "about": "Hey There! I am using WhatsApp",
                "lastSeen": "",
                "isOnline": "",
                "calls": [
                    {
                        "type": "audio",
                        "timeStamp": "5 : 50 pm",
                        "phoneNumber": "1234567890",
                        "name": "Kalyan Perla",
                        "isIncoming": "yes",
                        "isOutgoing": "no"
                    }
                ],
                "chats": [
                    {
                        "0987654321": {
                            "phoneNumber": "0987654321",
                            "name": "Kumar",
                            "about": "Urgent calls only",
                            "lastSeen": "",
                            "isOnline": "",
                            "messages": [
                                {
                                    "msgType": "received",
                                    "timeStamp": "5 : 48 pm",
                                    "msg": "Hi",
                                    "isDelivered": "yes",
                                    "isReceived": "yes",
                                    "isRead": "yes",
                                    "id": "1"
                                },
                                {
                                    "msgType": "sent",
                                    "timeStamp": "5 : 48 pm",
                                    "msg": "Hello Kalyan",
                                    "isDelivered": "yes",
                                    "isReceived": "yes",
                                    "isRead": "yes",
                                    "id": "2"
                                },
                                {
                                    "msgType": "sent",
                                    "timeStamp": "5 : 49 pm",
                                    "msg": "How are you?",
                                    "isDelivered": "yes",
                                    "isReceived": "yes",
                                    "isRead": "yes",
                                    "id": "3"
                                }
                            ]
                        }
                    }
                ]
            }
        }
    ],
    "registeredNumbers": [
        {
            "phoneNumber": "1234567890",
            "name": "Kalyan Perla",
            "about": "Hey There! I am using WhatsApp",
            "lastSeen": "",
            "isOnline": "no",
            "id": 1
        },
        {
            "phoneNumber": "0987654321",
            "name": "Kumar",
            "about": "Urgent calls only",
            "lastSeen": "",
            "isOnline": "no",
            "id": 2
        }
    ]
}
/*
{
  "data": [
    {
      "phoneNumber": "0987654321",
      "name": "Perla Kalyan",
      "about": "Urgent calls only",
      "lastSeen": "",
      "isOnline": "",
      "calls": [
        {
          "type": "audio",
          "timeStamp": "5 : 50 pm",
          "phoneNumber": "1234567890",
          "name": "Kumar",
          "isIncoming": "yes",
          "isOutgoing": "no"
        }
      ],
      "chats1": [
        {
          "receiverId": 2,
          "phoneNumber": "1234567890",
          "name": "Kumar",
          "about": "Hey There! I am using WhatsApp",
          "lastSeen": "",
          "isOnline": "",
          "messages": [
            {
              "msgType": "received",
              "timeStamp": "5 : 48 pm",
              "msg": "Hi",
              "isDelivered": "yes",
              "isReceived": "yes",
              "isRead": "yes",
              "id": ""
            },
            {
              "msgType": "sent",
              "timeStamp": "5 : 48 pm",
              "msg": "Hello Kumar",
              "isDelivered": "yes",
              "isReceived": "yes",
              "isRead": "yes",
              "id": ""
            },
            {
              "msgType": "sent",
              "timeStamp": "5 : 49 pm",
              "msg": "How are you?",
              "isDelivered": "yes",
              "isReceived": "yes",
              "isRead": "yes",
              "id": ""
            }
          ]
        }
      ],
      "id": 1
    },
    {
      "phoneNumber": "1234567890",
      "name": "Kumar",
      "about": "Hey There! I am using WhatsApp",
      "lastSeen": "",
      "isOnline": "",
      "calls": [
        {
          "type": "audio",
          "timeStamp": "5 : 50 pm",
          "phoneNumber": "0987654321",
          "name": "Perla Kalyan",
          "isIncoming": "yes",
          "isOutgoing": "no"
        }
      ],
      "chats1": [
        {
          "receiverId": 1,
          "phoneNumber": "0987654321",
          "name": "Perla Kalyan",
          "about": "Urgent calls only",
          "lastSeen": "",
          "isOnline": "",
          "messages": [
            {
              "msgType": "sent",
              "timeStamp": "5 : 48 pm",
              "msg": "Hi",
              "isDelivered": "yes",
              "isReceived": "yes",
              "isRead": "yes",
              "id": ""
            },
            {
              "msgType": "received",
              "timeStamp": "5 : 48 pm",
              "msg": "Hello Kumar",
              "isDelivered": "yes",
              "isReceived": "yes",
              "isRead": "yes",
              "id": ""
            },
            {
              "msgType": "received",
              "timeStamp": "5 : 49 pm",
              "msg": "How are you?",
              "isDelivered": "yes",
              "isReceived": "yes",
              "isRead": "yes",
              "id": ""
            }
          ]
        }
      ],
      "id": 2
    }
  ],
  "registeredNumbers": [
    {
      "phoneNumber": "1234567890",
      "name": "Kalyan Perla",
      "about": "Hey There! I am using WhatsApp",
      "lastSeen": "",
      "isOnline": "no",
      "id": 1
    },
    {
      "phoneNumber": "0987654321",
      "name": "Kumar",
      "about": "Urgent calls only",
      "lastSeen": "",
      "isOnline": "no",
      "id": 2
    }
  ]
}
*/