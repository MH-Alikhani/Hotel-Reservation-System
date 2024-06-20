/**
 * Clears the values of the given input elements
 * @param {...jQuery} $inputs - jQuery input elements to clear
 */
const clearInputs = (...$inputs) => {
  $inputs.forEach(($input) => $input.val(""));
};

/**
 * Displays reservation receipt in the UI
 * @param {Object} reservedInfo - Reservation information
 * @param {jQuery} $receiptTextEl - jQuery element to display receipt text
 */
const displayReservationReceipt = (reservedInfo, $receiptTextEl) => {
  $receiptTextEl.html(`
    آقا/خانم <span>${reservedInfo.firstName} ${reservedInfo.lastName}</span>، شما اتاق شماره 
    <span>${reservedInfo.reservedRoom}</span> از تاریخ 
    <span>${reservedInfo.startDate}</span> الی 
    <span>${reservedInfo.endDate}</span> رزرو کرده اید.
    کد رهگیری شما <span>${reservedInfo.id}</span> می باشد.
  `);
};

/**
 * Resets the receipt text after a delay
 * @param {jQuery} $receiptTextEl - jQuery element to reset text
 * @param {number} delay - Delay in milliseconds before resetting the text
 */
const resetReceiptText = ($receiptTextEl, delay = 10000) => {
  setTimeout(() => {
    $receiptTextEl.html("لطفا از طریق فرم سمت راست رزرو را انجام دهید!");
  }, delay);
};
