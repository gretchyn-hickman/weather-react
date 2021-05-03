import React from "react";

//Change time from AM to PM (format Hours)
// function formatAMPM(date) {
//   var hours = date.getHours();
//   var minutes = date.getMinutes();
//   var ampm = hours >= 12 ? "PM" : "AM";

//   hours = hours % 12;
//   hours = hours ? hours : 12; //hour '0' should be '12'
//   minutes = minutes < 10 ? "0" + minutes : minutes;

//   var ampm = hours + ":" + minutes + " " + ampm;

//   return ampm;
// }

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  let now = new Date();
  let date = now.getDate();
  let currentDay = days[now.getDay()];
  let month = months[now.getMonth()];
  let year = now.getFullYear();
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div className="currentDate">
      {currentDay} {date} {month}, {year} {hours}:{minutes}
    </div>
  );
}
