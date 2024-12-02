import { registerComponent } from "@plasmicapp/loader-react";
import DatePickerWithRangePlasmicWrapper from "@/components/DatePickerWithRangePlasmicWrapper";
import { addDays } from "date-fns";

registerComponent(DatePickerWithRangePlasmicWrapper, {
  name: "DatePickerWithRange",
  props: {
    minDate: {
      type: "date",
      description: "The minimum selectable date",
      defaultValue: new Date(),
    },
    maxDate: {
      type: "date",
      description: "The maximum selectable date",
      defaultValue: addDays(new Date(), 365),
    },
    onDateRangeSelect: {
      type: "function",
      description: "Callback when the date range is selected",
    },
    className: {
      type: "string",
      description: "Custom class name for styling",
    },
  },
});
