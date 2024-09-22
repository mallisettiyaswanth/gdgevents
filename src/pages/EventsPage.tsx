import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface Event {
  eventName: string;
  fromDate: string;
  toDate: string;
  venue: string;
  description: string;
  organizer: string;
}

const EventsPage: React.FC = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const savedEvents = localStorage.getItem("gdgEvents");
    if (savedEvents) {
      setEvents(JSON.parse(savedEvents));
    }
  }, []);

  return (
    <div className="w-full h-fit p-10">
      <div className="flex items-center justify-between">
        <h2 className="text-5xl font-bold mb-4 text-white">GDG Events</h2>
        <Button
          onClick={() => navigate("/events/add")}
          className="px-8 py-3 gap-2 flex items-center justify-center bg-white text-blue-500 hover:bg-gray-200"
        >
          <FaPlus />
          Add Event
        </Button>
      </div>

      {events.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {events.map((event, index) => (
            <Card
              key={index}
              className="bg-white text-blue-500 shadow-lg rounded-lg"
            >
              <CardHeader>
                <CardTitle className="text-3xl font-bold">
                  {event.eventName}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  <strong>From:</strong>{" "}
                  {new Date(event.fromDate).toLocaleDateString()}
                </p>
                <p>
                  <strong>To:</strong>{" "}
                  {new Date(event.toDate).toLocaleDateString()}
                </p>
                <p>
                  <strong>Venue:</strong> {event.venue}
                </p>
                <p>
                  <strong>Description:</strong> {event.description}
                </p>
                <p>
                  <strong>Organizer:</strong> {event.organizer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-white mt-10">
          No events found. Please add an event.
        </p>
      )}
    </div>
  );
};

export default EventsPage;
