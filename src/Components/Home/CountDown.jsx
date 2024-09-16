import Countdown from "react-countdown";

const CountdownTimer = () => {
  // Custom renderer to display the countdown in the format you want
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completion message when countdown is done
      return <span>{"Time's"} up!</span>;
    } else {
      // Render the countdown timer
      return (
        <div className="flex py-[6px] px-[12px] bg-[#F3DE6D] font-medium gap-[6px] rounded-[2px]">
          <span>{days}d</span>
          <span>:</span>
          <span>{hours}h</span>
          <span>:</span>
          <span>{minutes}m</span>
          <span>:</span>
          <span>{seconds}s</span>
        </div>
      );
    }
  };

  return (
    <div>
      <Countdown
        date={Date.now() + 5 * 24 * 60 * 60 * 1000} // 5 days in milliseconds
        renderer={renderer}
      />
    </div>
  );
};

export default CountdownTimer;
