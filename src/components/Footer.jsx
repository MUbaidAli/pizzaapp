import { useEffect, useState } from "react";

function Footer() {
  const [timer, setTimer] = useState();
  // console.log(new Date());
  const time = new Date().getHours();
  const openingHour = 10;
  const closingHours = 22;
  const showTime = new Date().toLocaleTimeString();
  useEffect(() => {
    const id = setInterval(() => {
      setTimer(showTime);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [showTime]);

  // console.log(timer);
  const prompt =
    time >= openingHour && time < closingHours
      ? `we are currently Open`
      : `We Are Open Until ${closingHours}:00 Come Visit Us Or Order Online`;
  return (
    <>
      <footer className="footer">
        <p>
          {showTime} {prompt}
        </p>

        {time >= closingHours && <button className="btn"> Order Now</button>}
      </footer>
    </>
  );
}

export default Footer;
