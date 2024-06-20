document.addEventListener("DOMContentLoaded", () => {
  const reservationsTable = document
    .getElementById("reservationsTable")
    .getElementsByTagName("tbody")[0];

  const reservationsReport = JSON.parse(
    localStorage.getItem("reservationReport")
  ) || {
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

  // Iterate through each room's reservations
  for (const room in reservationsReport) {
    reservationsReport[room].forEach((reservation) => {
      const row = reservationsTable.insertRow();

      const cellFirstName = row.insertCell(0);
      const cellLastName = row.insertCell(1);
      const cellRoom = row.insertCell(2);
      const cellStartDate = row.insertCell(3);
      const cellEndDate = row.insertCell(4);

      cellFirstName.textContent = reservation.firstName;
      cellLastName.textContent = reservation.lastName;
      cellRoom.textContent = room; // Room number
      cellStartDate.textContent = reservation.startDate;
      cellEndDate.textContent = reservation.endDate;
    });
  }
});
