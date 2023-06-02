import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
// import Pdata from "./Pdata";

function TestTeam() {
  const [circkt, setcirckt] = useState([]);

  const fdata = async () => {
    await fetch(
      "https://rest.entitysport.com/v2/iccranks?token=ec471071441bb2ac538a0ff901abd249"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.response.ranks)
        setcirckt(data.response.ranks.teams.tests)
      });
  };
  useEffect(() => {
    fdata();
  }, []);

  // }

  return (
    <>
      <div className="Container">
        <div className="row">
          {circkt.map((v) => (
            <div
            className="col" lg-3 md-4 sm-6 col-12 style={{ marginTop: "15px" }}

            >
              <Card style={{ width: "18rem", height: "10rem" }}>
                <Card.Body>
                  <h6>Team Id: {v.tid}</h6>
                  <Card.Title>Team: {v.team}</Card.Title>
                  <h6>Rank: {v.rank}</h6>
                  <h6>Rating {v.rating}</h6>
                  <h6>Points: {v.points}</h6>
                 
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TestTeam;
