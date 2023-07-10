import { useState } from "react";

interface Props {
  specialization: string;
  children?: React.ReactNode;
}

function CourseWork(props: Props) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <h6 className="ms-5" onClick={handleClick}>
        {props.specialization}
      </h6>
      {open && <div className="ms-5">{props.children}</div>}
    </>
  );
}

export default CourseWork;
