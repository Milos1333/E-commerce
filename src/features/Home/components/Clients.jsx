import "../styles/clients.style.css";
import client1 from "../../../assets/client1.jpg";
import client2 from "../../../assets/client2.jpg";
import client3 from "../../../assets/client3.jpg";

const Clients = () => {
  const clients = [
    {
      image: client1,
      person: "Alice Johnson",
      opinion:
        "These headphones have incredible sound quality and are so comfortable to wear for long periods!",
    },
    {
      image: client2,
      person: "Michael Brown",
      opinion:
        "It completely blocks out the background noise, making my music experience much better.",
    },
    {
      image: client3,
      person: "Emily Davis",
      opinion:
        "I love the sleek design and the battery life is fantastic. I can use them all day without needing to recharge.",
    },
  ];
  return (
    <div className="clients-container">
      <div className="clients-content">
        <h2>What Our Clients Say</h2>
        <div className="clients">
          {clients.map((client) => (
            <div className="client">
              <img src={client.image} width="100px" />
              <div className="client-opinion">
                <p>{client.opinion}</p>
              </div>
              <h3>{client.person}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
