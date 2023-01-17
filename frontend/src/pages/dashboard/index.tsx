import React from "react";
import { momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

import { MyCalendar } from "../../components/widgets/Calendar";

const Dashboard: React.FC = () => {
  return (
    <div className="bg-white">
      <MyCalendar localizer={localizer} />
    </div>
  );
};

export default Dashboard;
