import { useState } from "react";

const useDatepicker = () => {
  const [datepickerIsOpen, setDatepickerIsOpen] = useState(false);

  const close = () => setDatepickerIsOpen(false);
  const open = () => setDatepickerIsOpen(true);

  return { datepickerIsOpen, close, open };
};

export default useDatepicker;