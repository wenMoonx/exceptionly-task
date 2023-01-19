/* eslint-disable react/react-in-jsx-scope */
import { Fragment, useState, useCallback, useMemo, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Calendar, Views, DateLocalizer } from 'react-big-calendar';
import { convertDate, getDay, getMonth, getYear } from '../../libs/time';
import { AuthContext } from '../../context';
import axios from '../../libs/axios';
import { Event } from '../../types/event';

const events = [
  {
    id: 0,
    title: 'All Day Event very long title1',
    allDay: true,
    start: '2023-1-1',
    end: '2023-1-1',
  },
];

type IProps = {
  localizer: any;
};

export const MyCalendar: React.FC<IProps> = ({ localizer }) => {
  const { user } = useContext(AuthContext);
  const [myEvents, setEvents] = useState(events);
  const email = user.user.email;

  const handleSelectSlot = useCallback(
    ({ start, end }) => {
      const title = window.prompt('New Event name');
      if (title) {
        setEvents((prev: any) => [...prev, { start, end, title }]);
        axios.post('/events', {
          start: convertDate(start),
          end: convertDate(end),
          title,
          email,
        });
      }
    },
    [setEvents]
  );

  useEffect(() => {
    getEvent();
  }, []);

  const getEvent = useCallback(async () => {
    const result = await axios.get(`events/${user.user.email}`);
    result.data.forEach((event: Event) => {
      setEvents((prev: any) => [...prev, event]);
    });
  }, []);

  const handleSelectEvent = useCallback((event) => window.alert(event.title), []);

  const { defaultDate, scrollToTime } = useMemo(
    () => ({
      defaultDate: new Date(getYear(), getMonth(), getDay()),
      scrollToTime: new Date(1970, 1, 1, 6),
    }),
    []
  );

  return (
    <Fragment>
      <div style={{ height: '700px', maxWidth: '1500px', margin: 'auto', marginTop: '10px' }}>
        <Calendar
          defaultDate={defaultDate}
          defaultView={Views.MONTH}
          events={myEvents}
          localizer={localizer}
          onSelectEvent={handleSelectEvent}
          onSelectSlot={handleSelectSlot}
          selectable
          scrollToTime={scrollToTime}
        />
      </div>
    </Fragment>
  );
};

MyCalendar.propTypes = {
  localizer: PropTypes.instanceOf(DateLocalizer),
};
