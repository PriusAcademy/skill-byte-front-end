import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

type event = {
  date: string;
  name: string;
  place: string;
};

interface EventTableProps {
  events: event[];
}

const EventTable = ({ events }: EventTableProps) => {
  return (
    <Table>
      <TableHeader className="bg-activeBlue">
        <TableHead className="border text-white text-center text-lg font-semibold">
          S.No
        </TableHead>
        <TableHead className="border w-[125px] text-white text-center text-lg font-semibold">
          Date
        </TableHead>
        <TableHead className="border text-white text-center text-lg font-semibold">
          Name
        </TableHead>
        <TableHead className="border text-white text-center text-lg font-semibold">
          Place
        </TableHead>
      </TableHeader>
      <TableBody>
        {events.map((event, index) => (
          <TableRow className="bg-white" key={index}>
            <TableCell className="border text-center text-gray-600">
              {index + 1}
            </TableCell>
            <TableCell className="border text-center text-gray-600">
              {event.date}
            </TableCell>
            <TableCell className="border text-center text-gray-600">
              {event.name}
            </TableCell>
            <TableCell className="border text-center text-gray-600">
              {event.place}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default EventTable;
