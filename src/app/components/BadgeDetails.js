import React from "react";
import { Link } from "react-router-dom";
import Badge from "./Badge";
import Modal from "./Modal"
import "./styles/BadgeDetails.css";
import DeleteBadgeModal from "./DeleteBadgeModal";

const BadgeDetails = (props) => {
  const badge = props.badge;

  return (
    <div className="BadgeDetails">
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 d-flex justify-content-center">
              <img
                className="img-fluid"
                alt="Logo"
                src="/assets/images/platziconf-logo.svg"
              />
            </div>
            <div className="col-12 col-sm-6 d-flex align-items-center justify-content-center">
              <h2 className="BadgeDetails__name">
                {badge.firstName} {badge.lastName}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6">
            <Badge
              firstName={badge.firstName || `First Name`}
              lastName={badge.lastName || `Last Name`}
              avatarUrl={badge.avatarUrl}
              jobTitle={badge.jobTitle || `Job Title`}
              twitter={badge.twitter || `Twitter`}
              email={badge.email || `email@example.com`}
            />
          </div>
          <div className="col-12 col-sm-6">
            <Link to={`/badges/${badge._id}/edit`} className="btn btn-success w-100">Edit</Link>
            <button onClick={props.onOpenModal} className="btn btn-danger w-100">Delete</button>
            <DeleteBadgeModal isOpen={props.modalActive} onCloseModal={props.onCloseModal} deleteBadge={props.deleteBadge}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BadgeDetails;
