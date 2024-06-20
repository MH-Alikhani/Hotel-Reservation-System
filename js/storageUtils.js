// Define the initial state of customersRoom
let customersRoom = {
  1: [],
  2: [],
  3: [],
  4: [],
  5: [],
  6: [],
  7: [],
  8: [],
  9: [],
  10: [],
};

/**
 * Updates local storage with new reservation information
 * @param {Object} userInfo - User information object
 * @param {string} room - Reserved room number
 * @param {number} roomCapacity - Current capacity of the room
 */
const updateLocalStorage = (userInfo, room, roomCapacity) => {
  localStorage.setItem(room, roomCapacity - 1);
  customersRoom[room].push(userInfo);
  localStorage.setItem("reservationReport", JSON.stringify(customersRoom));
};

/**
 * Initializes room capacities in local storage
 * @param {Object} roomCapacities - An object with room numbers as keys and capacities as values
 */
const initializeRoomCapacities = (roomCapacities) => {
  $.each(roomCapacities, (room, capacity) => {
    localStorage.setItem(room, capacity);
  });
};

/**
 * Retrieves room capacity from local storage
 * @param {string} room - Room number
 * @returns {number} - Room capacity
 */
const getRoomCapacity = (room) => {
  return Number(localStorage.getItem(room));
};
