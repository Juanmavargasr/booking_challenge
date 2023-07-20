const generateBooking = () => {
  const allowedCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const bookingLength = 6;
  let bookingArray = ["X", "X", "X", "X", "X", "X"];

  for (i = 0; i < bookingLength; i++) {
    const randomIndex = Math.floor(
      Math.random() * (allowedCharacters.length - 1)
    );
    bookingArray[i] = allowedCharacters[randomIndex];
  }
  const booking = bookingArray.join("");

  return booking;
};

module.exports = generateBooking;
