import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
// import Pdata from "./Pdata";

function Home() {
  const [circkt, setcirckt] = useState([]);

  const fdata = async () => {
    await fetch(
      "https://rest.entitysport.com/v2/iccranks?token=ec471071441bb2ac538a0ff901abd249"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.response.ranks)
        setcirckt(data.response.ranks.batsmen.odis);
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
              <Card style={{ width: "18rem", height: "15rem" }}>
                <Card.Body>
                  <h6>Player Id: {v.pid}</h6>
                  <Card.Title>Name: {v.player}</Card.Title>
                  <h6>Rank: {v.rank}</h6>
                  <h6>Rating {v.rating}</h6>
                  <h6>Team: {v.team}</h6>
                  <Button variant="primary">
                    <Link
                      to="/Pdata"
                      state={{ from: v.pid }}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Player Details
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
