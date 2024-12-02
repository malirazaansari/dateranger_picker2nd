import { registerComponent } from "@plasmicapp/loader-react";
import DatePickerWithRangePlasmicWrapper from "@/components/DatePickerWithRangePlasmicWrapper"; // Adjust the path if necessary

registerComponent(DatePickerWithRangePlasmicWrapper, {
  name: "DatePickerWithRange", // Name of the component in Plasmic Studio
  props: {
    minDate: {
      type: "date", // Type for the minDate prop
      description: "The minimum selectable date",
      defaultValue: new Date(),
    },
    maxDate: {
      type: "date", // Type for the maxDate prop
      description: "The maximum selectable date",
      defaultValue: addDays(new Date(), 365),
    },
    onDateRangeSelect: {
      type: "function", // Type for the onDateRangeSelect prop
      description: "Callback when the date range is selected",
    },
    className: {
      type: "string",
      description: "Custom class name for styling",
    },
  },
});
