import { get, post, put, destroy } from "./apiClient";

const base = "/booking";

const Booking = {
  all: () => {
    return get(`${base}/all`);
  },

  getByUserId: () => {
    return get(`${base}/user`);
  },

  getById: (id) => {
    return get(`${base}/${id}`);
  },

  // getUserBookingByDate: (userId, date) => {
  //   return get(`${base}/user/${userId}/date/${date}`);
  // },

  getUserBookingForToday: () => {
    return get(`${base}/today`);
  },

  getUserUpcomingBookings: () => {
    return get(`${base}/upcoming`);
  },

  getUsersTeam: (team, date, time) => {
    return get(`${base}/team/${team}/date/${date}/time/${time}`);
  },

  getBookingsForFloorMap: (location, tower, date, floor) => {
    return get(
      `${base}/location/${location}/tower/${tower}/date/${date}/floor/${floor}`
    );
  },

  createBooking: (booking) => {
    return post(`${base}/create`, booking);
  },

  // deleteBookingByDate: (date) => {
  //   return destroy(`${base}/delete/date/${date}`);
  // },

  deleteBooking: (id) => {
    return destroy(`${base}/delete/${id}`);
  },

  updateBooking: (id, booking) => {
    return put(`${base}/update/${id}`, booking);
  },

  // updateBookingByDate: (date, booking) => {
  //   return put(`${base}/update/date/${date}`, booking);
  // },
};

export default Booking;
