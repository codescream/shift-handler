

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

export const staffs = [
  {
    id: 5001,
    firstName: "John",
    lastName: "Doe",
    username: "Doe5001",
    email: "john.doe@email.com",
    phone: "555-123-4567",
    address: "123 Main St, Cityville, NY, 12345",
    gender: "Male",
    password: "password123",
    role: "user",
    isActive: true
  },
  {
    id: 5002,
    firstName: "Jane",
    lastName: "Smith",
    username: "Smith5002",
    email: "jane.smith@email.com",
    phone: "555-234-5678",
    address: "456 Elm St, Townsville, CA, 67890",
    gender: "Female",
    password: "password456",
    role: "user",
    isActive: true
  },
  {
    id: 5003,
    firstName: "Robert",
    lastName: "Johnson",
    username: "Johnson5003",
    email: "robert.johnson@email.com",
    phone: "555-345-6789",
    address: "789 Oak St, Villagetown, TX, 54321",
    gender: "Male",
    password: "password789",
    role: "user",
    isActive: true
  },
  {
    id: 5004,
    firstName: "Emily",
    lastName: "Brown",
    username: "Brown5004",
    email: "emily.brown@email.com",
    phone: "555-456-7890",
    address: "135 Pine St, Suburbia, FL, 67891",
    gender: "Female",
    password: "password321",
    role: "user",
    isActive: false
  },
  {
    id: 5005,
    firstName: "Michael",
    lastName: "Davis",
    username: "Davis5005",
    email: "michael.davis@email.com",
    phone: "555-567-8901",
    address: "357 Cedar St, Metropolis, IL, 12346",
    gender: "Male",
    password: "password654",
    role: "user",
    isActive: true
  },
  {
    id: 5006,
    firstName: "Sarah",
    lastName: "Wilson",
    username: "Wilson5006",
    email: "sarah.wilson@email.com",
    phone: "555-678-9012",
    address: "159 Birch St, Capitol City, CO, 23456",
    gender: "Female",
    password: "password987",
    role: "user",
    isActive: true
  },
  {
    id: 5007,
    firstName: "David",
    lastName: "Martinez",
    username: "Martinez5007",
    email: "david.martinez@email.com",
    phone: "555-789-0123",
    address: "753 Willow St, Hillside, GA, 78912",
    gender: "Male",
    password: "password321",
    role: "user",
    isActive: false
  },
  {
    id: 5008,
    firstName: "Laura",
    lastName: "Garcia",
    username: "Garcia5008",
    email: "laura.garcia@email.com",
    phone: "555-890-1234",
    address: "951 Maple St, Coastal City, NJ, 98765",
    gender: "Female",
    password: "password1234",
    role: "admin",
    isActive: true
  },
  {
    id: 5009,
    firstName: "Kevin",
    lastName: "Anderson",
    username: "Anderson5009",
    email: "kevin.anderson@email.com",
    phone: "555-901-2345",
    address: "111 Spruce St, Mountainview, WA, 87654",
    gender: "Male",
    password: "password6543",
    role: "admin",
    isActive: true
  },
  {
    id: 5010,
    firstName: "Megan",
    lastName: "Taylor",
    username: "Taylor5010",
    email: "megan.taylor@email.com",
    phone: "555-012-3456",
    address: "222 Ash St, Riverside, OR, 34567",
    gender: "Female",
    password: "password0987",
    role: "user",
    isActive: true
  }
];

const getClient = (id) => {
  return clients.filter(client => client.id === id)[0];
}

const getStaff = (id) => {
  return staffs.filter(staff => staff.id === id)[0];
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
    staffId: getStaff(5001).username,
    amount: 150.0,
    paid: 150.0,
    status: "closed",
    notes: [
      {
        staffId: getStaff(5001).username,
        note: "Shift started on time.",
        datetime: "2024-10-09T08:00:00"
      },
      {
        staffId: getStaff(5001).username,
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
    staffId: getStaff(5002).username,
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
    staffId: getStaff(5003).username,
    amount: 160.0,
    paid: 160.0,
    status: "finished",
    notes: [
      {
        staffId: getStaff(5003).username,
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
    staffId: getStaff(5004).username,
    amount: 80.0,
    paid: 0.0,
    status: "ongoing",
    notes: [
      {
        staffId: getStaff(5004).username,
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
    staffId: getStaff(5005).username,
    amount: 120.0,
    paid: 120.0,
    status: "closed",
    notes: [
      {
        staffId: getStaff(5005).username,
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
    staffId: getStaff(5006).username,
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
    staffId: getStaff(5007).username,
    amount: 100.0,
    paid: 100.0,
    status: "finished",
    notes: [
      {
        staffId: getStaff(5007).username,
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
    staffId: getStaff(5008).username,
    amount: 140.0,
    paid: 0.0,
    status: "ongoing",
    notes: [
      {
        staffId: getStaff(5008).username,
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
    staffId: getStaff(5009).username,
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
    staffId: getStaff(5010).username,
    amount: 160.0,
    paid: 160.0,
    status: "closed",
    notes: [
      {
        staffId: getStaff(5010).username,
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