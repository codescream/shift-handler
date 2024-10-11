

const clients = [
  {
    id: 1001,
    name: "John Doe",
    phone: "123-456-7890",
    email: "johndoe@example.com"
  },
  {
    id: 1002,
    name: "Jane Smith",
    phone: "987-654-3210",
    email: "janesmith@example.com"
  },
  {
    id: 1003,
    name: "Alice Johnson",
    phone: "555-555-5555",
    email: "alicejohnson@example.com"
  },
  {
    id: 1004,
    name: "Bob Brown",
    phone: "777-777-7777",
    email: "bobbrown@example.com"
  },
  {
    id: 1005,
    name: "Charlie Wilson",
    phone: "333-333-3333",
    email: "charliewilson@example.com"
  },
  {
    id: 1006,
    name: "David Davis",
    phone: "222-222-2222",
    email: "daviddavis@example.com"
  },
  {
    id: 1007,
    name: "Emily Thompson",
    phone: "111-111-1111",
    email: "emilythompson@example.com"
  },
  {
    id: 1008,
    name: "Frank Garcia",
    phone: "444-444-4444",
    email: "frankgarcia@example.com"
  },
  {
    id: 1009,
    name: "Grace Wilson",
    phone: "666-666-6666",
    email: "gracewilson@example.com"
  },
  {
    id: 1010,
    name: "Harry Lee",
    phone: "888-888-8888",
    email: "harrylee@example.com"
  }
];

const getClient = (id) => {
  return clients.filter(client => client.id === id)[0];
}

export const shifts = [
  {
    id: 1,
    location: "123 Main St",
    date: "2024-10-09",
    time: "08:00 AM",
    type: "AM",
    duration: 8,
    client: getClient(1001),   
    staffId: 5001,
    amount: 150.0,
    paid: 150.0,
    status: "closed",
    notes: [
      {
        staffId: 5001,
        note: "Shift started on time.",
        datetime: "2024-10-09T08:00:00"
      },
      {
        staffId: 5001,
        note: "Client requested additional tasks.",
        datetime: "2024-10-09T12:00:00"
      }
    ],
    clockin: [
      {
        time: "08:00 AM",
        accuracy: "high",
        coordinates: { latitude: 40.7128, longitude: -74.0060 }
      }
    ],
    clockout: [
      {
        time: "04:00 PM",
        accuracy: "high",
        coordinates: { latitude: 40.7128, longitude: -74.0060 }
      }
    ]
  },
  {
    id: 2,
    location: "456 Elm St",
    date: "2024-10-10",
    time: "01:00 PM",
    type: "PM",
    duration: 6,
    client: getClient(1002),
    staffId: 5002,
    amount: 120.0,
    paid: 0.0,
    status: "open",
    notes: [],
    clockin: [],
    clockout: []
  },
  {
    id: 3,
    location: "789 Oak St",
    date: "2024-10-11",
    time: "07:00 AM",
    type: "AM",
    duration: 8,
    client: getClient(1003),
    staffId: 5003,
    amount: 160.0,
    paid: 160.0,
    status: "finished",
    notes: [
      {
        staffId: 5003,
        note: "Arrived early and completed tasks ahead of time.",
        datetime: "2024-10-11T08:00:00"
      }
    ],
    clockin: [
      {
        time: "07:00 AM",
        accuracy: "high",
        coordinates: { latitude: 40.7306, longitude: -73.9352 }
      }
    ],
    clockout: [
      {
        time: "03:00 PM",
        accuracy: "high",
        coordinates: { latitude: 40.7306, longitude: -73.9352 }
      }
    ]
  },
  {
    id: 4,
    location: "246 Pine St",
    date: "2024-10-12",
    time: "02:00 PM",
    type: "PM",
    duration: 4,
    client: getClient(1004),
    staffId: 5004,
    amount: 80.0,
    paid: 0.0,
    status: "ongoing",
    notes: [
      {
        staffId: 5004,
        note: "Client requested a longer shift. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at earum similique quibusdam. Quos ratione nostrum odit consequatur nihil vitae repellendus pariatur suscipit, corrupti quis facere rem officiis voluptate modi!",
        datetime: "2024-10-12T02:30:00"
      }
    ],
    clockin: [
      {
        time: "02:00 PM",
        accuracy: "high",
        coordinates: { latitude: 40.7127, longitude: -74.0059 }
      }
    ],
    clockout: []
  },
  {
    id: 5,
    location: "357 Cedar St",
    date: "2024-10-13",
    time: "09:00 AM",
    type: "AM",
    duration: 6,
    client: getClient(1005),
    staffId: 5005,
    amount: 120.0,
    paid: 120.0,
    status: "closed",
    notes: [
      {
        staffId: 5005,
        note: "Smooth shift, no issues.",
        datetime: "2024-10-13T09:15:00"
      }
    ],
    clockin: [
      {
        time: "09:00 AM",
        accuracy: "medium",
        coordinates: { latitude: 40.7580, longitude: -73.9855 }
      }
    ],
    clockout: [
      {
        time: "03:00 PM",
        accuracy: "medium",
        coordinates: { latitude: 40.7580, longitude: -73.9855 }
      }
    ]
  },
  {
    id: 6,
    location: "159 Birch St",
    date: "2024-10-14",
    time: "06:00 AM",
    type: "AM",
    duration: 10,
    client: getClient(1006),
    staffId: 5006,
    amount: 200.0,
    paid: 0.0,
    status: "open",
    notes: [],
    clockin: [],
    clockout: []
  },
  {
    id: 7,
    location: "753 Willow St",
    date: "2024-10-15",
    time: "03:00 PM",
    type: "PM",
    duration: 5,
    client: getClient(1007),
    staffId: 5007,
    amount: 100.0,
    paid: 100.0,
    status: "finished",
    notes: [
      {
        staffId: 5007,
        note: "Finished tasks early, client happy.",
        datetime: "2024-10-15T07:00:00"
      }
    ],
    clockin: [
      {
        time: "03:00 PM",
        accuracy: "high",
        coordinates: { latitude: 40.7411, longitude: -73.9897 }
      }
    ],
    clockout: [
      {
        time: "08:00 PM",
        accuracy: "high",
        coordinates: { latitude: 40.7411, longitude: -73.9897 }
      }
    ]
  },
  {
    id: 8,
    location: "951 Maple St",
    date: "2024-10-16",
    time: "12:00 PM",
    type: "PM",
    duration: 7,
    client: getClient(1008),
    staffId: 5008,
    amount: 140.0,
    paid: 0.0,
    status: "ongoing",
    notes: [
      {
        staffId: 5008,
        note: "Client requested help with equipment.",
        datetime: "2024-10-16T12:30:00"
      }
    ],
    clockin: [
      {
        time: "12:00 PM",
        accuracy: "medium",
        coordinates: { latitude: 40.7295, longitude: -73.9965 }
      }
    ],
    clockout: []
  },
  {
    id: 9,
    location: "111 Spruce St",
    date: "2024-10-17",
    time: "05:00 AM",
    type: "AM",
    duration: 8,
    client: getClient(1009),
    staffId: 5009,
    amount: 160.0,
    paid: 0.0,
    status: "open",
    notes: [],
    clockin: [],
    clockout: []
  },
  {
    id: 10,
    location: "222 Ash St",
    date: "2024-10-18",
    time: "10:00 AM",
    type: "AM",
    duration: 8,
    client: getClient(1010),
    staffId: 5010,
    amount: 160.0,
    paid: 160.0,
    status: "closed",
    notes: [
      {
        staffId: 5010,
        note: "Client happy with performance.",
        datetime: "2024-10-18T02:00:00"
      }
    ],
    clockin: [
      {
        time: "10:00 AM",
        accuracy: "high",
        coordinates: { latitude: 40.7488, longitude: -73.9846 }
      }
    ],
    clockout: [
      {
        time: "06:00 PM",
        accuracy: "high",
        coordinates: { latitude: 40.7488, longitude: -73.9846 }
      }
    ]
  }
];