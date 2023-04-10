import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image: "https://images.alphacoders.com/694/694766.jpg",
    address: "Some address 5, 12345 Some City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5e9EcH5v1mwFf4Qz7k_Tu9VaOBD2V2W531Q&usqp=CAU",
    address: "Some address 10, 12345 Some City",
    description:
      "This is a second, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

function AllMeetupsPage() {
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={DUMMY_DATA} />
    </section>
  );
}
export default AllMeetupsPage;
