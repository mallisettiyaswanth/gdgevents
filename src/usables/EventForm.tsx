import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

interface EventFormData {
  eventName: string;
  fromDate: Date | null;
  toDate: Date | null;
  venue: string;
  description: string;
  organizer: string;
}

const EventForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<EventFormData>({
    defaultValues: {
      fromDate: null,
      toDate: null,
    },
  });

  const navigate = useNavigate();

  const onSubmit = (data: EventFormData) => {
    const savedEvents = JSON.parse(localStorage.getItem("gdgEvents") || "[]");
    const updatedEvents = [...savedEvents, data];
    localStorage.setItem("gdgEvents", JSON.stringify(updatedEvents));
    toast.success("Event added successfully!");
    navigate("/events");
  };

  const fromDate = watch("fromDate");
  const toDate = watch("toDate");

  return (
    <div className="flex items-center justify-center min-h-screen w-full relative text-white">
      <button
        className="flex gap-2 text-white items-center absolute top-10 left-10"
        onClick={() => navigate(-1)}
      >
        <IoMdArrowBack />
        back
      </button>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg">
        <h2 className="text-5xl font-bold mb-4 text-center text-white ">
          GDG Event Form
        </h2>

        <div className="mb-4">
          <label className="block mb-1">Event Name</label>
          <Input
            type="text"
            placeholder="Enter event name"
            {...register("eventName", { required: "Event name is required" })}
            className="border-gray-300 rounded-lg"
          />
          {errors.eventName && (
            <p className="text-red-600">{errors.eventName.message}</p>
          )}
        </div>

        <div className="flex flex-row gap-5">
          <div className="mb-4 flex-1">
            <label className="block mb-1 w-full">From (Start Date)</label>
            <DatePicker
              selected={fromDate}
              onChange={(date: Date | null) => setValue("fromDate", date)}
              placeholderText="Select start date"
              className="w-full p-2 border border-gray-300 rounded bg-transparent text-white"
            />
            {errors.fromDate && (
              <p className="text-red-600">{errors.fromDate.message}</p>
            )}
          </div>

          <div className="mb-4 flex-1">
            <label className="block mb-1">To (End Date)</label>
            <DatePicker
              selected={toDate}
              onChange={(date: Date | null) => setValue("toDate", date)}
              placeholderText="Select end date"
              className="w-full p-2 border border-gray-300 rounded bg-transparent text-white"
            />
            {errors.toDate && (
              <p className="text-red-600">{errors.toDate.message}</p>
            )}
          </div>
        </div>

        {errors.toDate?.type === "validate" && (
          <p className="text-red-600">
            The end date must be after the start date.
          </p>
        )}

        <div className="mb-4">
          <label className="block mb-1">Venue</label>
          <Input
            type="text"
            placeholder="Enter venue"
            {...register("venue", { required: "Venue is required" })}
            className="border-gray-300  "
          />
          {errors.venue && (
            <p className="text-red-600">{errors.venue.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-1">Description</label>
          <textarea
            className="w-full p-2 border rounded bg-transparent text-white"
            placeholder="Describe the event"
            {...register("description", {
              required: "Description is required",
            })}
          />
          {errors.description && (
            <p className="text-red-600">{errors.description.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-1">Organizer</label>
          <Input
            type="text"
            className="border-gray-300"
            placeholder="Organizer's name"
            {...register("organizer", {
              required: "Organizer's name is required",
            })}
          />
          {errors.organizer && (
            <p className="text-red-600">{errors.organizer.message}</p>
          )}
        </div>

        <Button
          type="submit"
          className="px-8 py-3 text-lg bg-white text-blue-500 hover:bg-gray-200"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default EventForm;
