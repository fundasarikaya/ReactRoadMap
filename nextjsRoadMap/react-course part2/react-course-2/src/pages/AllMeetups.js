import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true); //This is a state update, and this will trigger a re-evaluation of this component function.
    fetch(
      "https://react-getting-started-adf9e-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        console.log("1" + response);
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          console.log("2" + meetup);
          console.log("3" + key);
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []); //[isLoading] This is a dependency array, and it's a list of all the dependencies that are used in this effect.
  //So, whenever one of these dependencies changes, this effect will re-run.
  //So, if we have an empty array here, this effect will only run once when this component is rendered for the first time.
  //If we have a dependency here, this effect will run whenever this dependency changes.
  //So, if we have a state here, and we change this state, this effect will run again.
  //If we have multiple dependencies here, this effect will run whenever one of these dependencies changes.
  //So, if we have a state here, and we have another state here, and we change one of these states, this effect will run again.
  //If we have a state here, and we have another state here, and we change both of these states, this effect will run again.

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}
export default AllMeetupsPage;
