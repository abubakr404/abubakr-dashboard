import Widget from "../../components/widget/Widget";
import Table from "../../components/table/table";

const Home = () => {
  const massagesData = [
    {
      id: 1,
      name: "ahmed",
      email: "a@a.com",
      phone: "0904219999",
      messages: ["message 1", "message 2"],
      actions: ["edit", "delete"],
    },
    {
      id: 2,
      name: "ahmed",
      email: "a@a.com",
      phone: "0904219999",
      messages: ["message 1", "message 2"],
      actions: ["edit", "delete"],
    },
    {
      id: 3,
      name: "ahmed",
      email: "a@a.com",
      phone: "0904219999",
      messages: ["message 1", "message 2"],
      actions: ["edit", "delete"],
    },
    {
      id: 4,
      name: "ahmed",
      email: "a@a.com",
      phone: "0904219999",
      messages: ["message 1", "message 2"],
      actions: ["edit", "delete"],
    },
  ];

  return (
    <section className="overview">
      <div className="widgets">
        <Widget />
        <Widget />
        <Widget />
      </div>
      <div className="list-container">
        <h2 className="list-title">Latest Messages</h2>
        <Table tableHeaders={Object.keys(massagesData[0])} tableRows={massagesData} />
      </div>
    </section>
  );
};

export default Home;
