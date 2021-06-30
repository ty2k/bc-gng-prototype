import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Button } from "../../../components/Button";

const StyledDateRangePicker = styled.div`
  div.datepicker-field {
    align-items: baseline;
    display: flex;
    height: 44px;
    justify-content: space-between;
    line-height: 44px;

    label.label--datepicker {
      font-size: 18px;
    }

    input {
      font-size: 18px;

      &:focus {
        outline: 4px solid #3b99fc;
      }
    }

    div.react-datepicker-wrapper {
      margin-left: auto;
    }
  }

  button.submit {
    margin: 12px 0 16px 0;
    width: 100%;
  }
`;

function DateRangePicker({
  id,
  initialStartDate,
  initialEndDate,
  label,
  reportDates,
}) {
  const [startDate, setStartDate] = useState(
    new Date(initialStartDate) || new Date()
  );
  const [endDate, setEndDate] = useState(
    new Date(initialEndDate) || new Date()
  );

  return (
    <StyledDateRangePicker>
      <div className="datepicker-field">
        <label className="label--datepicker" htmlFor={`datepicker-${id}-start`}>
          From:
        </label>
        <DatePicker
          id={`datepicker-${id}-start`}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          dateFormat="yyyy-MM-dd"
        />
      </div>
      <div className="datepicker-field">
        <label className="label--datepicker" htmlFor={`datepicker-${id}-end`}>
          To:
        </label>
        <DatePicker
          id={`datepicker-${id}-end`}
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          dateFormat="yyyy-MM-dd"
        />
      </div>
      <Button
        className={"submit"}
        onClick={() => {
          reportDates([startDate, endDate]);
        }}
        primary
      >
        {label}
      </Button>
    </StyledDateRangePicker>
  );
}

DateRangePicker.propTypes = {
  id: PropTypes.string.isRequired,
  initialStartDate: PropTypes.number.isRequired,
  initialEndDate: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  reportDates: PropTypes.func.isRequired,
};

export default DateRangePicker;
