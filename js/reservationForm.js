/**
 * Handles form submission for room reservation
 * @param {Event} event - Form submit event
 * @param {Object} formElements - Object containing jQuery form elements
 */
const handleReservationSubmit = (event, formElements) => {
  event.preventDefault();

  const {
    $firstNameEl,
    $lastNameEl,
    $reservedRoomEl,
    $startDateEl,
    $endDateEl,
    $receiptTextEl,
  } = formElements;

  const room = $reservedRoomEl.val();
  const roomCapacity = getRoomCapacity(room);

  if (roomCapacity <= 0) {
    alert(`${room} is full`);
    return;
  }

  const userInfo = {
    id: idGenerator(),
    firstName: $firstNameEl.val().trim(),
    lastName: $lastNameEl.val().trim(),
    reservedRoom: room,
    startDate: $startDateEl.val(),
    endDate: $endDateEl.val(),
  };

  console.log(userInfo);

  clearInputs(
    $firstNameEl,
    $lastNameEl,
    $reservedRoomEl,
    $startDateEl,
    $endDateEl
  );
  updateLocalStorage(userInfo, room, roomCapacity);
  saveUserInfoToJson(userInfo);

  displayReservationReceipt(userInfo, $receiptTextEl);
  resetReceiptText($receiptTextEl);
};

/**
 * Saves user information to a JSON file
 * @param {Object} userInfo - User information object
 */
const saveUserInfoToJson = (userInfo) => {
  const dataStr = JSON.stringify(userInfo, null, 2);
  const blob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const $a = $("<a>")
    .attr("href", url)
    .attr("download", `${userInfo.id}.json`)
    .appendTo("body");
  $a[0].click();
  URL.revokeObjectURL(url);
  $a.remove();
};

/**
 * Initializes the reservation form functionalities
 */
const initializeReservationForm = () => {
  const $endDateEl = $("#endDate");
  const $lastNameEl = $("#lastName");
  const $firstNameEl = $("#firstName");
  const $startDateEl = $("#startDate");
  const $receiptTextEl = $("#receiptText");
  const $reservedRoomEl = $("#roomSelection");
  const $reservationForm = $("#reservationForm");

  const ROOM_CAPACITIES = {
    1: "3",
    2: "8",
    3: "5",
    4: "15",
    5: "20",
    6: "9",
    7: "7",
    8: "14",
    9: "16",
    10: "6",
  };

  initializeRoomCapacities(ROOM_CAPACITIES);
  initializeDatepicker();

  if ($reservationForm.length) {
    $reservationForm.on("submit", function (e) {
      e.preventDefault();
      handleReservationSubmit(e, {
        $firstNameEl,
        $lastNameEl,
        $reservedRoomEl,
        $startDateEl,
        $endDateEl,
        $receiptTextEl,
      });
    });
  } else {
    console.error("Reservation form not found.");
  }
};

// Document ready
$(document).ready(() => {
  initializeReservationForm();
});
