# API

## BookingCreate

### URL: "/bookings/

### Method: POST

### Request Body:

| field         | type   |
| ------------- | ------ |
| bookingID     | String |
| name          | String |
| email         | String |
| origin        | String |
| destination   | String |
| departureDate | Date   |
| timeDuration  | Number |

### Response:

| field   | type   |
| ------- | ------ |
| Messaje | String |
| Booking | Object |

## OBTAINING BOOKING

### URL: "/bookings/:bookingID

### Method: GET

### URL Params

| field    | type   |
| -------- | ------ |
| booingID | String |

### Response:

| field   | type   |
| ------- | ------ |
| Messaje | String |
| Booking | Object |

## Booking Update

### URL: "/bookings/:bookingID

### Method: PUT

### URL Params

| field    | type   |
| -------- | ------ |
| booingID | String |

### Request Body:

Only fields you wan't to update

| field         | type   |
| ------------- | ------ |
| name          | String |
| email         | String |
| origin        | String |
| destination   | String |
| departureDate | Date   |
| timeDuration  | Number |

### Response:

| field           | type   |
| --------------- | ------ |
| Messaje         | String |
| Updated_booking | Object |

## BOOKING DELETE

### URL: "/bookings/:bookingID

### Method: DELETE

### URL Params

| field    | type   |
| -------- | ------ |
| booingID | String |

### Response:

| field           | type   |
| --------------- | ------ |
| Messaje         | String |
| Deleted_booking | Object |
