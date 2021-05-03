import React from "react";

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

  let amPm = hours <= 11 ? "AM" : "PM";
  hours = hours % 12 || 12;

  return (
    <div className="currentDate">
      {currentDay} {date} {month}, {year} {hours}:{minutes}
      {amPm}
    </div>
  );
}
